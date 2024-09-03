import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { DeleteNote } from "./DeleteNote";
import { NoteForm } from "./NoteForm";

export const Todo = () => {
  const [todos, setTodos] = useState(() => {
    const resTodo = localStorage.getItem("todos");
    return resTodo ? JSON.parse(resTodo) : [];
  });
  const [isCheckBox, setIsCheckBox] = useState(() => {
    const savedCheck = localStorage.getItem("isCheckBox");
    return savedCheck ? JSON.parse(savedCheck) : false;
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const [currentId, setCurrentId] = useState();
  const [isDeleteAll, setIsDeleteAll] = useState(false);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("isCheckBox", JSON.stringify(isCheckBox));
  }, [todos, isCheckBox]);

  const onClickDelete = (id) => {
    if (isDeleteAll) {
      setTodos([]);
      setIsCheckBox(false);
    } else {
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  };

  const onclickFinish = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, finish: !todo.finish } : todo
      )
    );
  };

  const resetCheck = () => {
    setTodos(todos.map((todo) => ({ ...todo, finish: false })));
  };

  return (
    <Box>
      <NoteForm todos={todos} setTodos={setTodos} />
      <Box w="100%" borderRadius="10px" mt={5}>
        {todos.length > 0 ? (
          <>
            {todos.map((data, i) => (
              <Box key={data.id}>
                <Flex alignItems="center" wordBreak="keep-all">
                  {isCheckBox ? (
                    <Checkbox
                      mr={2}
                      colorScheme="green"
                      size="lg"
                      onChange={() => onclickFinish(data.id)}
                      isChecked={data.finish}
                    />
                  ) : (
                    <Text mr={2}>{i + 1}.</Text>
                  )}
                  <Flex
                    w="100%"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    {data.finish === true ? (
                      <Text maxW="205px" textDecoration="line-through">
                        {data.title}
                      </Text>
                    ) : (
                      <Text maxW="200px">{data.title}</Text>
                    )}
                    <Text fontSize="14px" opacity="0.6" mr={4}>
                      {data.date}
                    </Text>
                  </Flex>
                  <DeleteIcon
                    cursor="pointer"
                    color="red.300"
                    onClick={() => {
                      onOpen();
                      setCurrentId(data.id);
                      setIsDeleteAll(false);
                    }}
                  />
                </Flex>
                <Box w="100%" border="1px solid #ededed" mt={2} mb={3} />
              </Box>
            ))}
            <Flex justifyContent="space-between" mt={10}>
              <Button
                colorScheme="red"
                onClick={() => {
                  onOpen();
                  setIsDeleteAll(true);
                }}
              >
                전부 삭제
              </Button>
              <Button
                colorScheme="cyan"
                color="#fff"
                onClick={() => {
                  if (isCheckBox) {
                    resetCheck();
                    setIsCheckBox(false);
                  } else {
                    setIsCheckBox(true);
                  }
                }}
              >
                {isCheckBox ? "노트리스트로 바꾸기" : "체크리스트로 바꾸기"}
              </Button>
            </Flex>
          </>
        ) : (
          <Text textAlign="center">Note를 작성해주세요.</Text>
        )}
      </Box>
      <DeleteNote
        isOpen={isOpen}
        onClose={onClose}
        cancelRef={cancelRef}
        currentId={currentId}
        onClickDelete={onClickDelete}
        isDeleteAll={isDeleteAll}
      />
    </Box>
  );
};
