import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  VStack,
} from "@chakra-ui/react";
import { PageTitle } from "../../components/PageTitle";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <>
      <PageTitle titleName={"Menu"} />
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
        <Heading
          fontSize="24px"
          fontWeight="700"
          color="#ffb6c1"
          textShadow="2px 2px 5px rgba(220, 220, 170, 0.2)"
        >
          무엇을 하러 가볼까요?
        </Heading>
        <VStack mt={10} spacing={12}>
          <Box w="80%">
            <Image
              src={process.env.PUBLIC_URL + "/img/tictactoe_ico.png"}
              alt="tictactoe_img"
              w="20%"
              m={"0 auto 10px"}
            />
            <Link to="/minigame/0">
              <Button
                w="100%"
                bg="#ffb6c1"
                color="#fff"
                fontSize="20px"
                fontWeight="700"
                _hover={{
                  bg: "red.100",
                }}
                _active={{ bg: "red.200", transform: "scale(1.05)" }}
              >
                TicTacToe 하러가기
              </Button>
            </Link>
          </Box>
          <Box w="80%">
            <Image
              src={process.env.PUBLIC_URL + "/img/speedometer.png"}
              alt="speedometer_img"
              w="20%"
              m={"0 auto 10px"}
            />
            <Link to="/minigame/1">
              <Button
                w="100%"
                bg="#ffb6c1"
                color="#fff"
                fontSize="20px"
                fontWeight="700"
                _hover={{
                  bg: "red.100",
                }}
                _active={{ bg: "red.200", transform: "scale(1.05)" }}
              >
                반응속토 테스트 하러가기
              </Button>
            </Link>
          </Box>
          <Box w="80%">
            <Image
              src={process.env.PUBLIC_URL + "/img/note.png"}
              alt="note"
              w="20%"
              m={"0 auto 10px"}
            />
            <Link to="/note">
              <Button
                w="100%"
                bg="#ffb6c1"
                color="#fff"
                fontSize="20px"
                fontWeight="700"
                _hover={{
                  bg: "red.100",
                }}
                _active={{ bg: "red.200", transform: "scale(1.05)" }}
              >
                메모 하러가기
              </Button>
            </Link>
          </Box>
          <Box w="80%">
            <Image
              src={process.env.PUBLIC_URL + "/img/music.png"}
              alt="music"
              w="20%"
              m={"0 auto 10px"}
            />
            <Link
              to="https://www.youtube.com/results?search_query=%EC%9D%8C%EC%95%85"
              target="_blank"
            >
              <Button
                w="100%"
                bg="#ffb6c1"
                color="#fff"
                fontSize="20px"
                fontWeight="700"
                _hover={{
                  bg: "red.100",
                }}
                _active={{ bg: "red.200", transform: "scale(1.05)" }}
              >
                Youtube 음악 들으러가기
              </Button>
            </Link>
          </Box>
        </VStack>
      </Container>
    </>
  );
};
