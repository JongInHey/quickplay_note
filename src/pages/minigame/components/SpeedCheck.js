import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export const SpeedCheck = () => {
  const [isColor, setIsColor] = useState("purple.200");
  const [isState, setIsState] = useState("시작");
  const [isText, setIsText] = useState(
    "다음 준비화면에서 초록색이 되었을때 클릭!!"
  );
  const [desc, setDesc] = useState("시작하시려면 화면을 클릭해주세요.");
  const [result, setResult] = useState([]);
  const clickTimer = useRef(null);
  const startTime = useRef(0);
  const endTime = useRef(0);
  const count = useRef(0);

  const handleStart = () => {
    if (isState === "시작") {
      setIsState("준비");
      setIsText("초록색이 되면 클릭해주세요!");
      setDesc("");
      setIsColor("red.300");

      clickTimer.current = setTimeout(() => {
        setIsState("클릭!");
        setIsText("클릭해주세요!");
        setDesc("");
        setIsColor("green.300");
        startTime.current = new Date();
      }, Math.floor(Math.random() * 2000) + 1000);
    } else if (isState === "준비") {
      clearTimeout(clickTimer.current);

      setIsState("너무 빨리 눌렀습니다.");
      setIsText("빨간색 화면에서는 클릭이 불가능! ");
      setDesc("처음부터 시작하시려면 화면을 클릭해주세요.");
      setIsColor("gray.300");
    } else if (isState === "너무 빨리 눌렀습니다.") {
      setIsState("시작");
      setIsText("다음 준비화면에서 초록색이 되었을때 클릭!!");
      setDesc("시작하시려면 화면을 클릭해주세요.");
      setIsColor("purple.200");
    } else if (isState === "3번 시도가 완료 되었습니다.") {
      setResult([]);
      setIsState("시작");
      setIsText("다음 준비화면에서 초록색이 되었을때 클릭!!");
      setDesc("시작하시려면 화면을 클릭해주세요.");
      setIsColor("purple.200");
    } else if (isState === "클릭!") {
      endTime.current = new Date();

      setResult((prevResults) => {
        return [...prevResults, endTime.current - startTime.current];
      });

      setIsState("시작");
      setIsText("다음 준비화면에서 초록색이 되었을때 클릭!!");
      setDesc("시작하시려면 화면을 클릭해주세요.");
      setIsColor("purple.200");

      count.current += 1;

      if (count.current >= 3) {
        setIsState("3번 시도가 완료 되었습니다.");
        setIsText("초기화 하려면 화면을 클릭해주세요.");
        setDesc(
          `일반인 평균 : 273ms 보다 작으면 평균 이상 \n 프로게이머 평균 : 150ms ~ 160ms`
        );
        setIsColor("blue.200");
        count.current = 0;
      }
    }
  };
  const resAverage = () => {
    const average =
      result.length === 0 ? null : (
        <Text fontSize="24px" mt={4}>
          반응속도 평균 시간 :{" "}
          {(result.reduce((acc, curr) => acc + curr) / result.length).toFixed(
            2
          )}{" "}
          ms
        </Text>
      );
    return average;
  };
  return (
    <>
      <Heading fontSize="20px" mb={4}>
        반응속도 체크!
      </Heading>
      <Box
        w="100%"
        h="250px"
        bg={isColor}
        borderRadius="10px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        lineHeight="28px"
        cursor="pointer"
        color="#fff"
        onClick={() => {
          handleStart();
        }}
      >
        <Heading fontSize="24px">{isState}</Heading>
        <Text>{isText}</Text>
        <Text whiteSpace="pre-line" textAlign="center">
          {desc}
        </Text>
      </Box>
      <VStack gap={2} mt={3}>
        {result.map((time, index) => (
          <Text key={index}>
            {index + 1} 번째 시도 :{" "}
            <span style={{ fontWeight: "600" }}>{time}</span> ms
          </Text>
        ))}
      </VStack>
      {resAverage()}
      <Box w="100%" mt={10}>
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
            메뉴로 돌아가기
          </Button>
        </Link>
      </Box>
    </>
  );
};
