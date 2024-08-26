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
} from "@chakra-ui/react";
import WorkBox from "../../components/WorkBox";

export interface WorkdumProps {
  id: string;
  isFinish: boolean;
  location: string;
  title: string;
  startDate: string;
  endDate: string;
  agritype: string;
  wage?: string;
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
      isFinish: true,
      wage: "30만원",
      agritype: "고추",
    },
    {
      id: "13",
      title: "고추수확 도와주실 분 구합니다",
      location: "경북 의성군",
      startDate: "2024-02",
      endDate: "2024-05",
      isFinish: false,
      wage: "30만원",
      agritype: "고추",
    },

    {
      id: "4",
      title: "고추수확 도와주실 분 구합니다",
      location: "경북 의성군",
      startDate: "2024-02",
      endDate: "2024-05",
      isFinish: true,
      wage: "30만원",
      agritype: "고추",
    },
    {
      id: "2",
      title: "고추수확 도와주실 분 구합니다",
      location: "경북 의성군",
      startDate: "2024-02",
      endDate: "2024-05",
      isFinish: false,
      wage: "30만원",
      agritype: "고추",
    },
    {
      id: "12",
      title: "고추수확 도와주실 분 구합니다",
      location: "경북 의성군",
      startDate: "2024-02",
      endDate: "2024-05",
      isFinish: false,
      wage: "30만원",
      agritype: "고추",
    },
    {
      id: "11",
      title: "고추수확 도와주실 분 구합니다",
      location: "경북 의성군",
      startDate: "2024-02",
      endDate: "2024-05",
      isFinish: false,
      wage: "30만원",
      agritype: "고추",
    },
    {
      id: "1",
      title: "고추수확 도와주실 분 구합니다",
      location: "경북 의성군",
      startDate: "2024-02",
      endDate: "2024-05",
      isFinish: false,
      wage: "30만원",
      agritype: "고추",
    },
  ],
};

const HomePage = () => {
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
                <Th>지원하기</Th>
              </Tr>
            </Thead>
            <Tbody>
              {dummy.content.map((dumm) => (
                <Tr key={dumm.id}>
                  <WorkBox
                    id={dumm.id}
                    title={dumm.title}
                    location={dumm.location}
                    startDate={dumm.startDate}
                    endDate={dumm.endDate}
                    isFinish={dumm.isFinish}
                    wage={dumm.wage}
                    agritype={dumm.agritype}
                  />
                </Tr>
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
                <Th>지원하기</Th>
              </Tr>
            </Thead>
            <Tbody>
              {dummy.content.map((dumm) => (
                <Tr key={dumm.id}>
                  <WorkBox
                    id={dumm.id}
                    title={dumm.title}
                    location={dumm.location}
                    startDate={dumm.startDate}
                    endDate={dumm.endDate}
                    isFinish={dumm.isFinish}
                    agritype={dumm.agritype}
                  />
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default HomePage;
