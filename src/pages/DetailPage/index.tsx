import {
  Button,
  Center,
  Grid,
  Heading,
  Spacer,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import DetailText from "../../components/DetailText";

const DetailPage = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <Center>
        <Stack w="80%">
          <Heading padding="1rem" marginBottom="1rem">
            고추어쩌고저쩌고랄랄라라라
          </Heading>
          <Spacer />
          <Grid
            gridTemplateColumns={isLargerThan768 ? "1fr 1fr 1fr" : "1fr"}
            gridTemplateRows={isLargerThan768 ? "1fr" : "1fr 1fr 1fr"}
            border="1px solid gray"
            borderRadius="1rem"
            padding="2.5rem"
          >
            <Stack
              borderRight="1px solid gray"
              marginLeft="1rem"
              marginBottom={isLargerThan768 ? "0rem" : "1 rem"}
            >
              <Text fontSize="1.3rem" fontWeight="bold">
                근무조건
              </Text>
              <DetailText title="작업기간" content="7일" />
              <DetailText title="작업시간" content="7시간" />
              <DetailText title="급여" content="일 13만원" />
            </Stack>
            <Stack borderRight="1px solid gray" marginLeft="1rem">
              <Text fontSize="1.3rem" fontWeight="bold">
                모집내용
              </Text>
              <DetailText title="모집지역" content="의성군 00리 어쩌고" />
              <DetailText title="작업품목" content="고추" />
              <DetailText title="인원" content="10명" />
            </Stack>
            <Stack marginLeft="1rem">
              <Text fontSize="1.3rem" fontWeight="bold">
                위치
              </Text>
            </Stack>
          </Grid>
          <Text fontSize="1.3rem" fontWeight="bold">
            상세정보
          </Text>
          <Text>
            방은 따로 써요~ 10명 수용 가능한 넓은 방입니다~ 일주일 잘 지낼
            식구구해요
          </Text>
          <Center marginTop="1rem">
            <Button w="20%">지원하기</Button>
          </Center>
        </Stack>
      </Center>
    </>
  );
};

export default DetailPage;
