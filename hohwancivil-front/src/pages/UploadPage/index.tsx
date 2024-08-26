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
import { writeAddRequestType } from "../../types/requestType";
import { useState } from "react";
import { useCreatePost } from "../../hooks/useCreatePost";

const UploadPage = () => {
  const { mutate: mutatePost } = useCreatePost();

  const [formData, setFormData] = useState<writeAddRequestType>({
    title: "",
    species: "",
    startDate: "",
    endDate: "",
    personnel: 0,
    salary: 0,
    contact: "",
    mealSleep: "",
    workingHour: 0,
    location: "",
    details: "",
    isClosed: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutatePost(formData);
  };

  return (
    <Center>
      <Form style={{ width: "70%" }} onSubmit={handleSubmit}>
        <InputBox
          text="제목"
          value={formData.title}
          onChange={handleChange}
          placeholder="제목을 입력하세요"
        />
        <InputBox
          text="품종"
          value={formData.species}
          onChange={handleChange}
          placeholder="키울 품종을 입력하세요"
        />
        <InputBox
          text="전화번호"
          value={formData.contact}
          onChange={handleChange}
          placeholder="010-0000-0000"
        />
        <InputBox
          text="인원"
          value={formData.personnel}
          onChange={handleChange}
          placeholder="필요한 인원을 입력해주세요(숫자만 입력 가능)"
          type="number"
        />
        <InputBox
          text="급여"
          value={formData.salary}
          onChange={handleChange}
          placeholder="급여를 입력하세요(ex. 일11만/시급만원)"
        />
        <InputBox
          text="근무시간"
          value={formData.workingHour}
          placeholder="근무시간을 입력하세요"
          type="number"
          onChange={handleChange}
        />
        <InputBox
          text="시작날"
          value={formData.startDate}
          placeholder="Start Date"
          type="date"
          onChange={handleChange}
        />
        <InputBox
          text="끝나는날"
          value={formData.endDate}
          placeholder="End Date"
          type="date"
          onChange={handleChange}
        />
        <InputBox
          text="위치"
          value={formData.location}
          onChange={handleChange}
          placeholder="위치를 입력하세요"
        />
        <FormControl padding={1} isRequired>
          <FormLabel>숙식제공 여부</FormLabel>
          <Select
            value={formData.mealSleep}
            onChange={handleChange}
            placeholder="숙식제공 여부를 선택해주세요"
          >
            <option value="숙식 제공">숙식 제공</option>
            <option value="숙 제공">숙 제공</option>
            <option value="식 제공">식 제공</option>
            <option value="해당없음">해당없음</option>
          </Select>
        </FormControl>
        <InputBox
          text="상세정보"
          value={formData.details}
          onChange={handleChange}
          placeholder="상세정보를 입력하세요"
        />
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
