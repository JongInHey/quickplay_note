import { Box, Button, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const HardMode = () => {
  const [squares, setSquares] = useState(Array(25).fill(null));
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
        w="60px"
        h="60px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize="30px"
        bg="#ffb6c1"
        borderRadius="10px"
        onClick={() => handleClick(i)}
        _active={{ bg: "red.200", transform: "scale(1.05)" }}
      >
        {squares[i]}
      </Box>
    );
  };

  const handleReset = () => {
    setSquares(Array(25).fill(null));
    setIsNext(true);
  };

  return (
    <>
      <VStack spacing={8} mt={5}>
        <Heading fontSize="20px" textAlign="center">
          {status}
          <Text fontSize="16px" fontWeight="400">
            연속 4칸 맞추면 승리!
          </Text>
        </Heading>
        <Grid templateColumns="repeat(5, 1fr)" gap={2}>
          {Array(25)
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
              쉬운 난이도로 가기
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
  const lines = [];
  // 가로줄
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col <= 1; col++) {
      lines.push([
        row * 5 + col,
        row * 5 + col + 1,
        row * 5 + col + 2,
        row * 5 + col + 3,
      ]);
    }
  }
  // 세로줄
  for (let col = 0; col < 5; col++) {
    for (let row = 0; row <= 1; row++) {
      lines.push([
        row * 5 + col,
        (row + 1) * 5 + col,
        (row + 2) * 5 + col,
        (row + 3) * 5 + col,
      ]);
    }
  }
  // 대각선 (왼쪽 위에서 오른쪽 아래로)
  for (let row = 0; row <= 1; row++) {
    for (let col = 0; col <= 1; col++) {
      lines.push([
        row * 5 + col,
        (row + 1) * 5 + col + 1,
        (row + 2) * 5 + col + 2,
        (row + 3) * 5 + col + 3,
      ]);
    }
  }
  // 대각선 (오른쪽 위에서 왼쪽 아래로)
  for (let row = 0; row <= 1; row++) {
    for (let col = 3; col < 5; col++) {
      lines.push([
        row * 5 + col,
        (row + 1) * 5 + col - 1,
        (row + 2) * 5 + col - 2,
        (row + 3) * 5 + col - 3,
      ]);
    }
  }
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c, d] = lines[i];
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c] &&
      squares[a] === squares[d]
    ) {
      return squares[a];
    }
  }
  return null;
};
