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
import { useParams } from "react-router-dom";
import WorkBox from "../../components/WorkBox";
import { getMyPage } from "../../apis/User";
import { useQuery } from "@tanstack/react-query";

const MyPage = () => {
  const { userId } = useParams() || "";

  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  const { data } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => getMyPage(userId || ""),
  });

  return (
    <>
      <Box display="flex" justifyContent="center">
        <Stack>
          <Heading>{data?.user.name}</Heading>
          <Text>{data?.user.phoneNumber}</Text>
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
                {data?.userWrites.map((dumm) => (
                  <WorkBox
                    key={dumm.id}
                    title={dumm.title}
                    location={dumm.location}
                    startDate={dumm.startDate}
                    endDate={dumm.endDate}
                    isFinish={dumm.isClosed}
                    wage={dumm.salary}
                    agritype={dumm.species}
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
                {data?.userWrites.map((dumm) => (
                  <WorkBox
                    key={dumm.id}
                    title={dumm.title}
                    location={dumm.location}
                    startDate={dumm.startDate}
                    endDate={dumm.endDate}
                    isFinish={dumm.isClosed}
                    wage={dumm.salary}
                    agritype={dumm.species}
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
