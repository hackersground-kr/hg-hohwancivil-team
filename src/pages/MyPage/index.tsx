import {
  Box,
  Heading,
  Stack,
  Tab,
  Table,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useMediaQuery,
} from "@chakra-ui/react";
//import { useParams } from "react-router-dom";
import WorkBox from "../../components/WorkBox";
import { workDummy } from "../HomePage";

const dummy: workDummy = {
  content: [
    {
      id: "3",
      title: "고추수확 도와주실 분 구합니다",
      location: "경북 의성군",
      startDate: "2024-02",
      endDate: "2024-05",
      isFinish: true,
      wage: "30만원",
      agritype: "고추",
    },
    {
      id: "13",
      title: "고추수확 도와주실 분 구합니다",
      location: "경북 의성군",
      startDate: "2024-02",
      endDate: "2024-05",
      isFinish: false,
      wage: "30만원",
      agritype: "고추",
    },

    {
      id: "4",
      title: "고추수확 도와주실 분 구합니다",
      location: "경북 의성군",
      startDate: "2024-02",
      endDate: "2024-05",
      isFinish: true,
      wage: "30만원",
      agritype: "고추",
    },
    {
      id: "2",
      title: "고추수확 도와주실 분 구합니다",
      location: "경북 의성군",
      startDate: "2024-02",
      endDate: "2024-05",
      isFinish: false,
      wage: "30만원",
      agritype: "고추",
    },
    {
      id: "12",
      title: "고추수확 도와주실 분 구합니다",
      location: "경북 의성군",
      startDate: "2024-02",
      endDate: "2024-05",
      isFinish: false,
      wage: "30만원",
      agritype: "고추",
    },
    {
      id: "11",
      title: "고추수확 도와주실 분 구합니다",
      location: "경북 의성군",
      startDate: "2024-02",
      endDate: "2024-05",
      isFinish: false,
      wage: "30만원",
      agritype: "고추",
    },
    {
      id: "1",
      title: "고추수확 도와주실 분 구합니다",
      location: "경북 의성군",
      startDate: "2024-02",
      endDate: "2024-05",
      isFinish: false,
      wage: "30만원",
      agritype: "고추",
    },
  ],
};

interface MyPageProps {
  name: string;
  phone: string;
}

const dummyUser: MyPageProps = {
  name: "hihihi",
  phone: "010-0000-0000",
};

const MyPage = () => {
  //const { userId } = useParams() || ""; // URL에서 사용자 ID를 가져오기

  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  return (
    <>
      <Box display="flex" justifyContent="center">
        <Stack>
          <Heading>{dummyUser.name}</Heading>
          <Text>{dummyUser.phone}</Text>
        </Stack>
      </Box>
      <Tabs>
        <TabList>
          <Tab>내가 모집한 글</Tab>
          <Tab>내가 지원한 글</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>위치</Th>
                  <Th>공고정보</Th>
                  <Th>급여</Th>
                  {isLargerThan768 ? <Th>지원하기</Th> : <></>}
                </Tr>
              </Thead>
              <Tbody>
                {dummy.content.map((dumm) => (
                  <WorkBox
                    key={dumm.id}
                    title={dumm.title}
                    location={dumm.location}
                    startDate={dumm.startDate}
                    endDate={dumm.endDate}
                    isFinish={dumm.isFinish}
                    wage={dumm.wage}
                    agritype={dumm.agritype}
                  />
                ))}
              </Tbody>
            </Table>
          </TabPanel>
          <TabPanel>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>위치</Th>
                  <Th>공고정보</Th>
                  <Th>급여</Th>
                  {isLargerThan768 ? <Th>지원하기</Th> : <></>}
                </Tr>
              </Thead>
              <Tbody>
                {dummy.content.map((dumm) => (
                  <WorkBox
                    key={dumm.id}
                    title={dumm.title}
                    location={dumm.location}
                    startDate={dumm.startDate}
                    endDate={dumm.endDate}
                    isFinish={dumm.isFinish}
                    wage={dumm.wage}
                    agritype={dumm.agritype}
                  />
                ))}
              </Tbody>
            </Table>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default MyPage;
