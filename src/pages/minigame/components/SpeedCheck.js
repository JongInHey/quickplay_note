import { Box, Heading, Text } from "@chakra-ui/react";
import { useRef, useState } from "react";

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
      }, Math.floor(Math.random() * 1000) + 2000);

      startTime.current = new Date();
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
    } else if (isState === "클릭!") {
      endTime.current = new Date();
      setIsState("시작");
      setIsText("다음 준비화면에서 초록색이 되었을때 클릭!!");
      setDesc("시작하시려면 화면을 클릭해주세요.");
      setIsColor("purple.200");

      setResult(() => {
        return [endTime.current - startTime.current];
      });
    }
  };
  const resAverage = () => {
    const average =
      result.length === 0 ? null : (
        <Text fontSize="24px" mt={4}>
          반응속도 평균 시간 :
          {result.reduce((acc, curr) => acc + curr) / result.length} ms
        </Text>
      );
    console.log(average);
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
        transitionDuration="0.2s"
        borderRadius="10px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        lineHeight="28px"
        cursor="pointer"
        onClick={() => {
          handleStart();
        }}
      >
        <Heading fontSize="24px">{isState}</Heading>
        <Text>{isText}</Text>
        <Text>{desc}</Text>
      </Box>
      {resAverage()}
    </>
  );
};
