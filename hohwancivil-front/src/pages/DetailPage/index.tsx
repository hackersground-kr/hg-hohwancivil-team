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
import { getDetail } from "../../apis/Post";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const DetailPage = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const { userId } = useParams() || "";

  const { data } = useQuery({
    queryKey: ["detail", userId],
    queryFn: () => getDetail(userId || ""),
  });

  return (
    <>
      <Center>
        <Stack w="80%">
          <Heading padding="1rem" marginBottom="1rem">
            {data?.title}
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
                content={`${data?.startDate} ~ ${data?.endDate}`}
              />
              <DetailText title="작업시간" content={data?.workingHour} />
              <DetailText title="급여" content={`일당 ${data?.salary}원`} />
            </Stack>
            <Divider
              orientation={isLargerThan768 ? "vertical" : "horizontal"}
            />
            <Stack>
              <Text fontSize="1.3rem" fontWeight="bold">
                모집내용
              </Text>
              <DetailText title="모집지역" content={data?.location} />
              <DetailText title="작업품목" content={data?.species} />
              <DetailText title="인원" content={data?.personnel} />
            </Stack>
            <Divider
              orientation={isLargerThan768 ? "vertical" : "horizontal"}
            />
            <Stack>
              <Text fontSize="1.3rem" fontWeight="bold">
                기타사항
              </Text>
              <DetailText title="숙식 제공" content={data?.mealSleep} />
              <DetailText title="연락처" content={data?.contact} />
              <DetailText
                title="마감여부"
                content={data?.isClosed ? "마감" : "모집중"}
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
          <Text padding="2 rem">{data?.details}</Text>
          <Center marginTop="1rem">
            <Button w="20%" onClick={() => navigate("/apply")}>
              지원하기
            </Button>
          </Center>
        </Stack>
      </Center>
    </>
  );
};

export default DetailPage;
