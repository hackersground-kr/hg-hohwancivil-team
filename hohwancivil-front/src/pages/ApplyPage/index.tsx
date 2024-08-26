import { Button, Center, HStack, Spacer } from "@chakra-ui/react";
import { Form, Link } from "react-router-dom";
import InputBox from "../../components/InputBox";

const ApplyPage = () => {
  return (
    <Center>
      <Form style={{ width: "70%" }}>
        <InputBox text="제목" placeholder="제목을 입력하세요" />

        <InputBox text="전화번호" placeholder="010-0000-0000" />
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

export default ApplyPage;
