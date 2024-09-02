import { useParams } from "react-router-dom";
import { PageTitle } from "../../components/PageTitle";
import { Container } from "@chakra-ui/react";
import { Tictactoe } from "./components/Tictactoe";
import { SpeedCheck } from "./components/SpeedCheck";
import { HardMode } from "./components/HardMode";

export const MiniGame = () => {
  const { id } = useParams();

  return (
    <>
      <PageTitle titleName={"MiniGame"} />
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
        {id === "0" && <Tictactoe />}
        {id === "1" && <SpeedCheck />}
        {id === "2" && <HardMode />}
      </Container>
    </>
  );
};
