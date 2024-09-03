import { Box, Container } from "@chakra-ui/react";
import { PageTitle } from "../../components/PageTitle";
import { Todo } from "./components/Todo";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

export const Note = () => {
  const navi = useNavigate();
  return (
    <>
      <PageTitle titleName={"Note"} />
      <Container
        maxW="450px"
        w="100%"
        minH="100vh"
        bg="#f4f3ee"
        p="80px 10px"
        pos="relative"
      >
        <Box
          onClick={() => navi(-1)}
          cursor="pointer"
          pos="absolute"
          left="3%"
          top="10%"
        >
          <ChevronLeftIcon fontSize="26px" />
        </Box>
        <Todo />
      </Container>
    </>
  );
};
