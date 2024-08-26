import {
  Button,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
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
import { IoMdSearch } from "react-icons/io";
import WorkBox from "../../components/WorkBox";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";

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

const SearchPage = () => {
  const params = useSearchParams()[0];
  const keyword = params.get("search");
  const [search, setSearch] = useState(keyword);
  const navigate = useNavigate();
  console.log(keyword, search);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search) {
      alert("검색어를 입력하세요");
    }
    console.log("search", search, "keyword", keyword);
    navigate(`/keyword?search=${search}`);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <form onSubmit={() => handleSearch}>
        <InputGroup w="80%">
          <Input
            autoFocus={true}
            value={search ? search : ""}
            onChange={handleChange}
          />
          <InputRightElement width="2rem">
            <Button type="submit">
              <Icon color="gray.300" fontSize="1.8rem" as={IoMdSearch} />
            </Button>
          </InputRightElement>
        </InputGroup>
      </form>

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
    </>
  );
};

export default SearchPage;
