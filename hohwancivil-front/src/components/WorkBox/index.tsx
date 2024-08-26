import { Button, Stack, Text, Th, Tr, useMediaQuery } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export interface WorkBoxProps {
  key: string;
  isFinish: boolean;
  location: string;
  title: string;
  startDate: string;
  endDate: string;
  agritype: string;
  wage?: number;
}

const WorkBox = ({
  key,
  isFinish,
  location,
  title,
  startDate,
  endDate,
  agritype,
  wage = 0,
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
          <Text>{agritype}</Text>
        </Stack>
      </Th>
      {wage ? <Th>{wage}</Th> : <Th>x</Th>}
      {isLargerThan768 ? (
        <Th>
          {isFinish ? (
            <Button isDisabled={false}>마감</Button>
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
