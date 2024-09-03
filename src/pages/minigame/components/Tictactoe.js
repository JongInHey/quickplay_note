import { Box, Button, Grid, Heading, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Tictactoe = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(true);
  const [status, setStatus] = useState();

  useEffect(() => {
    const winner = calWinner(squares);
    if (winner) {
      setStatus("승자는 : " + winner);
    } else if (squares.every(Boolean)) {
      setStatus("승자는 없습니다. 다시 해주세요✨");
    } else {
      setStatus("다음 플레이어 : " + (isNext ? "🌞" : "⭐"));
    }
  }, [squares, isNext]);

  const handleClick = (i) => {
    if (squares[i] || calWinner(squares)) {
      return;
    }
    const newSquares = squares.slice();
    newSquares[i] = isNext ? "🌞" : "⭐";
    setSquares(newSquares);
    setIsNext(!isNext);
  };

  const renderSquare = (i) => {
    return (
      <Box
        as="button"
        w="100px"
        h="100px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize="40px"
        bg="red.100"
        borderRadius="10px"
        onClick={() => handleClick(i)}
        _active={{ bg: "red.200", transform: "scale(1.05)" }}
      >
        {squares[i]}
      </Box>
    );
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setIsNext(true);
  };

  return (
    <>
      <VStack spacing={8} mt={5}>
        <Heading fontSize="20px">{status}</Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap={2}>
          {Array(9)
            .fill(null)
            .map((_, i) => (
              <Box key={i}>{renderSquare(i)}</Box>
            ))}
        </Grid>
        <Button
          onClick={handleReset}
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
          리셋
        </Button>
        <Box w="100%">
          <Link to="/minigame/2">
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
              더 어려운 난이도 하러가기
            </Button>
          </Link>
        </Box>
        <Box w="100%">
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
              다른 게임 하러 가기
            </Button>
          </Link>
        </Box>
      </VStack>
    </>
  );
};

const calWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};
