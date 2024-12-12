import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";
import { PageTitle } from "../components/PageTitle";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <>
      <PageTitle titleName={"404page"} />
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
          fontSize="36px"
          fontWeight="800"
          color="pink.600"
          textAlign="center"
          textShadow="2px 2px 5px rgba(220, 220, 170, 0.2)"
        >
          404
        </Heading>
        <Text fontSize="26px" mb={4}>
          페이지를 찾을 수 없습니다.
        </Text>
        <Text mb={6} textAlign={"center"}>
          요청하신 페이지는 존재하지 않거나, <br />
          잘못 이동된 것 같습니다.
          <br />
          올바른 주소를 입력했는지 확인해 주세요.
        </Text>
        <Box w="80%">
          <Link to="/">
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
              HOME으로 돌아가기
            </Button>
          </Link>
        </Box>
      </Container>
    </>
  );
};
