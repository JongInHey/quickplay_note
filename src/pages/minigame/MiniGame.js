import { useNavigate, useParams } from "react-router-dom";
import { PageTitle } from "../../components/PageTitle";
import { Box, Container } from "@chakra-ui/react";
import { Tictactoe } from "./components/Tictactoe";
import { SpeedCheck } from "./components/SpeedCheck";
import { HardMode } from "./components/HardMode";
import { ChevronLeftIcon } from "@chakra-ui/icons";

export const MiniGame = () => {
  const { id } = useParams();
  const navi = useNavigate();

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
        {id === "0" && <Tictactoe />}
        {id === "1" && <SpeedCheck />}
        {id === "2" && <HardMode />}
      </Container>
    </>
  );
};
