import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import { Box, Flex } from "@chakra-ui/react";

const DefaultLayout = () => {
  return (
    <Flex direction="column" minHeight="100vh">
      <Header />
      <Box marginTop="9rem" marginBottom="10rem">
        <Outlet />
      </Box>
    </Flex>
  );
};

export default DefaultLayout;
