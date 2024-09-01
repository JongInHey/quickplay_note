import { Container } from "@chakra-ui/react";
import { PageTitle } from "../../components/PageTitle";

export const Note = () => {
  return (
    <>
      <PageTitle titleName={"Note"} />
      <Container
        maxW="450px"
        w="100%"
        minH="100vh"
        bg="#f4f3ee"
        p="80px 10px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        Note
      </Container>
    </>
  );
};
