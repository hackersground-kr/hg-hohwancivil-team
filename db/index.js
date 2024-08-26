//require('dotenv').config();
const endpoint = process.env.API_ENDPOINT;
const key = process.env.API_KEY;

const cors = require('cors');
app.use(cors({
    origin: 'https://salmon-field-0f3ba8500.5.azurestaticapps.net'
}));



const express = require('express');

const Joi = require('joi');

const schema_write = Joi.object({
    title: Joi.string().required(),
    species: Joi.string().required(),
    startDate: Joi.date().required(),
    endDate: Joi.date().required(),
    personnel: Joi.number().integer().required(),
    salary: Joi.number().integer().required(),
    contact: Joi.string().required(),
    mealSleep: Joi.string().required(),
    workingHour: Joi.number().integer().required(),
    location: Joi.string().required(),
    details: Joi.string().required(),
    isClosed: Joi.boolean().required()
})

const schema_user = Joi.object({
    name: Joi.string().required(),
    phoneNumber: Joi.string().required()
})

const schema_relation = Joi.object({
    writeId: Joi.string().required(),
    isJob: Joi.boolean().required(),
    applicant: Joi.string()
})

//-------------------------------------


const { CosmosClient } = require('@azure/cosmos');

const app = express();
const port = 3000;


const databaseId = "write";
const write = "write";
const user = "user";
const relation = "relation";

const client = new CosmosClient({ endpoint, key });

//-----------------------

// JSON 요청 본문을 파싱하기 위한 미들웨어
app.use(express.json());

//글 생성 API
app.post('/write', async (req, res) => {
    const {error} = schema_write.validate(req.body);

    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const { title, species,startDate,endDate,personnel,salary,contact,mealSleep,workingHour,location,details } = req.body;
    
    const containerWrite = client.database(databaseId).container(write);
    const containerRelation = client.database(databaseId).container(relation);

    try {
        const { resource: createdWriteItem } = await containerWrite.items.create({ 
            title, species, startDate, endDate, personnel, salary, contact, mealSleep, workingHour, location, details });
            //id: writeId, 
        var isJob = salary > 0;

        const { resource: createdRelationItem } = await containerRelation.items.create({ writeId: createdWriteItem.id, isJob, applicant: null }); // 첫 공지에 지원자가 없으므로 null
            //id: relationId, 
        
        res.status(201).send({createdWriteItem, createdRelationItem});
    } catch (error) {
        res.status(500).send(error.message);
    }
});

//user 생성 API
app.post('/user', async (req, res) => {
    const {name, phoneNumber} = req.body;

    const containerUser = client.database(databaseId).container(user);
    
    try {
        const { resource: createdUserItem } = await containerUser.items.create({ name, phoneNumber });
        res.status(201).send(createdUserItem);
    }catch (error){
        res.status(500).send(error.message);
    }
});

//글 삭제 API
app.delete('/write/:id', async (req, res) => {
    const itemId = req.params.id; // URL 파라미터에서 id 가져오기
    const containerWrite = client.database(databaseId).container(write);
    const containerRelation = client.database(databaseId).container(relation); // relation 컨테이너

    try {
        // relation 아이템 조회
        const relationQuery = 'SELECT c.id FROM c WHERE c.writeId = @writeId';
        const relationParameters = [{ name: '@writeId', value: itemId }];

        const { resources: relationItems } = await containerRelation.items.query({
            query: relationQuery,
            parameters: relationParameters
        }).fetchAll();
        console.log(relationItems);
        // relation 아이템 삭제
        for (const relationItem of relationItems) {
            await containerRelation.item(relationItem.id, relationItem.id).delete();
        }

        // write 아이템 삭제
        await containerWrite.item(itemId, itemId).delete();
        res.status(204).send(); // 삭제 후 204 No Content 응답
    } catch (error) {
        if (error.code === 404) {
            res.status(404).send('아이템을 찾을 수 없습니다.'); // 아이템이 존재하지 않을 경우
        } else {
            res.status(500).send(error.message); // 기타 에러 처리
        }
    }
});

//글 1개 조회 API
app.get('/writeOne/:id', async (req, res) => {
    const itemId = req.params.id; // URL 파라미터에서 id 가져오기
    const container = client.database(databaseId).container(write);

    try {
        // write 아이템 조회
        const { resource: item } = await container.item(itemId, itemId).read();

        if (!item) {
            return res.status(404).send('아이템을 찾을 수 없습니다.'); // 아이템이 존재하지 않을 경우
        }

        // relation 아이템 조회
        const relationContainer = client.database(databaseId).container(relation);
        const relationQuery = 'SELECT * FROM c WHERE c.writeId = @writeId';
        const relationParameters = [{ name: '@writeId', value: itemId }];

        const { resources: relationItems } = await relationContainer.items.query({
            query: relationQuery,
            parameters: relationParameters
        }).fetchAll();

        res.status(200).send({ item, relationItems }); // write 아이템과 관련된 relation 아이템 반환
    } catch (error) {
        res.status(500).send(error.message); // 기타 에러 처리
    }
});

//알바 목록 API
app.get('/jobsList', async (req, res) => {
    const containerWrite = client.database(databaseId).container(write);

    try {
        // salary가 0 이상인 아이템 조회
        const salaryQuery = 'SELECT * FROM c WHERE c.salary > 0';
        
        const { resources: items } = await containerWrite.items.query({
            query: salaryQuery
        }).fetchAll();

        res.status(200).send({ items }); // salary가 0 초과인 아이템과 관련된 relation 아이템 반환
    } catch (error) {
        res.status(500).send(error.message); // 기타 에러 처리
    }
});

//봉사 목록 API
app.get('/volunList', async (req, res) => {
    const containerWrite = client.database(databaseId).container(write);

    try {
        // salary가 0 이상인 아이템 조회
        const salaryQuery = 'SELECT * FROM c WHERE c.salary <= 0';
        
        const { resources: items } = await containerWrite.items.query({
            query: salaryQuery
        }).fetchAll();

        res.status(200).send({ items }); // salary가 0 이하인 아이템과 관련된 relation 아이템 반환
    } catch (error) {
        res.status(500).send(error.message); // 기타 에러 처리
    }
});


// 데이터 조회 API
app.get('/items', async (req, res) => {
    const container = client.database(databaseId).container(containerId);
    
    try {
        const { resources: items } = await container.items.readAll().fetchAll();
        res.status(200).send(items);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// 서버 시작
app.listen(port, () => {
    console.log(`서버가 http://localhost:${port}에서 실행 중입니다.`);
});