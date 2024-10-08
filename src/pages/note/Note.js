import { Box, Container } from "@chakra-ui/react";
import { PageTitle } from "../../components/PageTitle";
import { Todo } from "./components/Todo";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

export const Note = ({ colorMode }) => {
  const navi = useNavigate();
  return (
    <>
      <PageTitle titleName={"Note"} />
      <Container
        maxW="450px"
        w="100%"
        minH="100vh"
        bg={colorMode === "light" ? "#f4f3ee" : "#2b2b2b"}
        p="80px 10px"
        pos="relative"
      >
        <Box>
          <ChevronLeftIcon
            fontSize="26px"
            onClick={() => navi(-1)}
            cursor="pointer"
          />
        </Box>
        <Todo />
      </Container>
    </>
  );
};
