import {
  Button,
  Center,
  FormControl,
  FormLabel,
  HStack,
  Select,
  Spacer,
} from "@chakra-ui/react";
import { Form, Link } from "react-router-dom";
import InputBox from "../../components/InputBox";

const UploadPage = () => {
  return (
    <Center>
      <Form style={{ width: "70%" }}>
        <InputBox text="제목" placeholder="제목을 입력하세요" />

        <InputBox text="품종" placeholder="키울 품종을 입력하세요" />
        <InputBox text="전화번호" placeholder="010-0000-0000" />
        <InputBox
          text="인원"
          placeholder="필요한 인원을 입력해주세요(숫자만 입력 가능)"
          type="number"
        />
        <InputBox
          text="급여"
          placeholder="급여를 입력하세요(ex. 일11만/시급만원)"
        />
        <InputBox text="근무기간" type="duration" placeholder="n일" />
        <InputBox text="위치" placeholder="위치를 입력하세요" />
        <FormControl padding={1} isRequired>
          <FormLabel>숙식제공 여부</FormLabel>
          <Select placeholder="숙식제공 여부를 선택해주세요">
            <option value="숙식 제공">숙식 제공</option>
            <option value="숙 제공">숙 제공</option>
            <option value="식 제공">식 제공</option>
            <option value="해당없음">해당없음</option>
          </Select>
        </FormControl>
        <InputBox text="상세정보" placeholder="상세정보를 입력하세요" />
        <HStack marginTop="2rem">
          <Spacer />
          <Link to="/">
            <Button>취소</Button>
          </Link>
          <Button type="submit">수정하기</Button>
        </HStack>
      </Form>
    </Center>
  );
};

export default UploadPage;
