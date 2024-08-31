import { Box, Button, Container, Heading, Image, Text } from "@chakra-ui/react";
import { PageTitle } from "../../components/PageTitle";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <PageTitle titleName={"Home"} />
      <Container
        maxW="450px"
        w="100%"
        minH="100vh"
        bg="#f4f3ee"
        p="80px 10px 30px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Heading
          fontSize="30px"
          fontWeight="700"
          color="#ffb6c1"
          textAlign="center"
          textShadow="2px 2px 5px rgba(220, 220, 170, 0.2)"
        >
          나만의 작은 세상
        </Heading>
        <Box w="90%" m={"30px auto"}>
          <Image
            src={process.env.PUBLIC_URL + "/img/quickplay_logo.png"}
            alt="logoImage"
            w="100%"
          />
        </Box>
        <Box w="80%">
          <Link to="/menu">
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
              들어가기
            </Button>
          </Link>
        </Box>
      </Container>
    </>
  );
};
