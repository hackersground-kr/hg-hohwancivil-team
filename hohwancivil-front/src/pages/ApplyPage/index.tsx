import { Alert, Button, Center, HStack, Spacer } from "@chakra-ui/react";
import { Form, Link } from "react-router-dom";
import InputBox from "../../components/InputBox";
import { useState } from "react";
import { userApplyRequestType } from "../../types/requestType";
import { useNavigate } from "react-router-dom";

const ApplyPage = () => {
  const [formData, setFormData] = useState<userApplyRequestType>({
    name: "",
    phoneNumber: "",
    pr: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  return (
    <Center>
      <Form style={{ width: "70%" }}>
        <InputBox
          text="이름"
          value={formData.name}
          onChange={handleChange}
          placeholder="이름을 입력하세요"
        />

        <InputBox
          text="전화번호"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="010-0000-0000"
        />

        <InputBox
          text="자기소개"
          value={formData.pr}
          onChange={handleChange}
          placeholder="자기소개해주세요"
        />
        <HStack marginTop="2rem">
          <Spacer />
          <Link to="/">
            <Button>취소</Button>
          </Link>
          <Button
            type="submit"
            onClick={() => {
              <Alert>등록되었습니다</Alert>;
              navigate("/");
            }}
          >
            등록하기
          </Button>
        </HStack>
      </Form>
    </Center>
  );
};

export default ApplyPage;
