import { Button, Stack, Text, Th, Tr, useMediaQuery } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export interface WorkBoxProps {
  key: string;
  isClosed: boolean;
  location: string;
  title: string;
  startDate: string;
  endDate: string;
  species: string;
  salary: number;
}

const WorkBox = ({
  key,
  isClosed,
  location,
  title,
  startDate,
  endDate,
  species,
  salary = 0,
}: WorkBoxProps) => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const navigate = useNavigate();
  return (
    <Tr onClick={() => navigate(`/work/${key}`)}>
      <Th>{location}</Th>
      <Th>
        <Stack>
          <Text
            fontWeight={isLargerThan768 ? "bold" : "normal"}
            fontSize={isLargerThan768 ? "1.3rem" : "1rem"}
          >
            {title}
          </Text>
          <Text>
            {startDate}~{endDate}
          </Text>
          <Text>{species}</Text>
        </Stack>
      </Th>
      {salary === 0 ? <Th>x</Th> : <Th>{salary}</Th>}
      {isLargerThan768 ? (
        <Th>
          {isClosed ? (
            <Button isDisabled={true} color="#A2A2A2">
              마감
            </Button>
          ) : (
            <Button>지원하기</Button>
          )}
        </Th>
      ) : (
        <></>
      )}
    </Tr>
  );
};

export default WorkBox;
