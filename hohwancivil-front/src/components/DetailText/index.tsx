import { HStack, Text } from "@chakra-ui/react";

interface DetailTextProps {
  title: string;
  content?: string | number;
}

const DetailText = ({ title, content = "" }: DetailTextProps) => {
  return (
    <HStack>
      <Text fontWeight="bold">{title}</Text>
      <Text>{content}</Text>
    </HStack>
  );
};

export default DetailText;
