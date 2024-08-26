import {
  Tab,
  Table,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Th,
  Thead,
  Tr,
  useMediaQuery,
} from "@chakra-ui/react";
import WorkBox from "../../components/WorkBox";
import { getJobList, getVolList } from "../../apis/Post";
import { useQuery } from "@tanstack/react-query";

const HomePage = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  const { data: jobList } = useQuery({
    queryKey: ["jobList"],
    queryFn: () => getJobList(),
  });

  const { data: volList } = useQuery({
    queryKey: ["volList"],
    queryFn: () => getVolList(),
  });

  return (
    <Tabs>
      <TabList>
        <Tab>알바</Tab>
        <Tab>봉사</Tab>
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
              {jobList?.map((dumm) => (
                <WorkBox
                  key={dumm.id}
                  title={dumm.title}
                  location={dumm.location}
                  startDate={dumm.startDate}
                  endDate={dumm.endDate}
                  isClosed={dumm.isClosed}
                  salary={dumm.salary}
                  species={dumm.species}
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
              {volList?.map((dumm) => (
                <WorkBox
                  key={dumm.id}
                  title={dumm.title}
                  location={dumm.location}
                  startDate={dumm.startDate}
                  endDate={dumm.endDate}
                  isClosed={dumm.isClosed}
                  species={dumm.species}
                />
              ))}
            </Tbody>
          </Table>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default HomePage;
