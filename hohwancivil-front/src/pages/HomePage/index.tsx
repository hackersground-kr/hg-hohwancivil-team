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

export interface WorkdumProps {
  id: string;
  isClosed: boolean;
  location: string;
  title: string;
  startDate: string;
  endDate: string;
  species: string;
  salary?: number;
}

export interface workDummy {
  content: WorkdumProps[];
}

const dummy: workDummy = {
  content: [
    {
      id: "3",
      title: "고추수확 도와주실 분 구합니다",
      location: "경북 의성군",
      startDate: "2024-02",
      endDate: "2024-05",
      isClosed: true,
      salary: 300000,
      species: "고추",
    },
    {
      id: "13",
      title: "마늘수확 도와주실 분 구합니다",
      location: "경북 의성군",
      startDate: "2024-04",
      endDate: "2024-06",
      isClosed: false,
      salary: 300000,
      species: "고추",
    },

    {
      id: "4",
      title: "마늘수확 도와주실 분 구합니다",
      location: "경북 의성군",
      startDate: "2024-04",
      endDate: "2024-06",
      isClosed: false,
      salary: 300000,
      species: "고추",
    },
    {
      id: "2",
      title: "고추수확 도와주실 분 구합니다",
      location: "경북 의성군",
      startDate: "2024-02",
      endDate: "2024-05",
      isClosed: true,
      salary: 300000,
      species: "고추",
    },
    {
      id: "12",
      title: "고추수확 도와주실 분 구합니다",
      location: "경북 의성군",
      startDate: "2024-02",
      endDate: "2024-05",
      isClosed: true,
      salary: 300000,
      species: "고추",
    },
    {
      id: "11",
      title: "고추수확 도와주실 분 구합니다",
      location: "경북 의성군",
      startDate: "2024-02",
      endDate: "2024-05",
      isClosed: true,
      salary: 300000,
      species: "고추",
    },
    {
      id: "1",
      title: "고추수확 도와주실 분 구합니다",
      location: "경북 의성군",
      startDate: "2024-02",
      endDate: "2024-05",
      isClosed: true,
      salary: 300000,
      species: "고추",
    },
  ],
};

const HomePage = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

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
              {dummy.content.map((dumm) => (
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
              {dummy.content.map((dumm) => (
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
