import {
  Button,
  Center,
  Divider,
  Grid,
  Heading,
  Spacer,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import DetailText from "../../components/DetailText";
import { WorkType } from "../../types/WorkType";

const dummy: WorkType = {
  location: "의성군 가음면",
  isClosed: false,
  title: "고추 수확 알바 구합니다.",
  startDate: "2024-08-25",
  endDate: "2024-09-25",
  details: "방 좋고 맛있는 밥 제공합니다. 많은 관심 부탁드립니다.",
  salary: 180000,
  personnel: 15,
  species: "고추",
  workingHour: 10,
  contact: "010-1234-5678",
  mealSleep: "제공",
};

const DetailPage = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <Center>
        <Stack w="80%">
          <Heading padding="1rem" marginBottom="1rem">
            {dummy.title}
          </Heading>
          <Spacer />
          <Grid
            gridTemplateColumns={isLargerThan768 ? "31% 2% 31% 2% 31%" : "1fr"}
            gridTemplateRows={isLargerThan768 ? "1fr" : "31% 2% 31% 2% 31%"}
            border="1px solid gray"
            borderRadius="1rem"
            padding="2.5rem"
          >
            <Stack>
              <Text fontSize="1.3rem" fontWeight="bold">
                근무조건
              </Text>
              <DetailText
                title="작업기간"
                content={`${dummy.startDate} ~ ${dummy.endDate}`}
              />
              <DetailText title="작업시간" content={dummy.workingHour} />
              <DetailText title="급여" content={`일당 ${dummy.salary}원`} />
            </Stack>
            <Divider
              orientation={isLargerThan768 ? "vertical" : "horizontal"}
            />
            <Stack>
              <Text fontSize="1.3rem" fontWeight="bold">
                모집내용
              </Text>
              <DetailText title="모집지역" content={dummy.location} />
              <DetailText title="작업품목" content={dummy.species} />
              <DetailText title="인원" content={dummy.personnel} />
            </Stack>
            <Divider
              orientation={isLargerThan768 ? "vertical" : "horizontal"}
            />
            <Stack>
              <Text fontSize="1.3rem" fontWeight="bold">
                기타사항
              </Text>
              <DetailText title="숙식 제공" content={dummy.mealSleep} />
              <DetailText title="연락처" content={dummy.contact} />
              <DetailText
                title="마감여부"
                content={dummy.isClosed ? "마감" : "모집중"}
              />
            </Stack>
          </Grid>
          <Text
            padding="1rem 1rem 0rem 1rem"
            fontSize="1.3rem"
            fontWeight="bold"
            borderBottom="1px solid gray"
          >
            상세정보
          </Text>
          <Text padding="2 rem">{dummy.details}</Text>
          <Center marginTop="1rem">
            <Button w="20%">지원하기</Button>
          </Center>
        </Stack>
      </Center>
    </>
  );
};

export default DetailPage;
