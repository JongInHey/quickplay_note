import { Container } from "@chakra-ui/react";
import { PageTitle } from "../../components/PageTitle";
import { Todo } from "./components/Todo";

export const Note = () => {
  return (
    <>
      <PageTitle titleName={"Note"} />
      <Container maxW="450px" w="100%" minH="100vh" bg="#f4f3ee" p="80px 10px">
        <Todo />
      </Container>
    </>
  );
};
