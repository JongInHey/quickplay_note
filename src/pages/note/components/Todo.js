import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { DeleteNote } from "./DeleteNote";
import { NoteForm } from "./NoteForm";

export const Todo = () => {
  const [todos, setTodos] = useState(() => {
    const resTodo = localStorage.getItem("todos");
    return resTodo ? JSON.parse(resTodo) : [];
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const [currentId, setCurrentId] = useState();
  const [isDeleteAll, setIsDeleteAll] = useState(false);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onClickDelete = (id) => {
    if (isDeleteAll) {
      setTodos([]);
    } else {
      setTodos(todos.filter((todo) => todo.id !== id));
    }
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
                  <Text mr={2}>{i + 1}.</Text>
                  <Flex
                    w="100%"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Text maxW="205px">{data.title}</Text>
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
            <Button
              colorScheme="red"
              float="right"
              onClick={() => {
                setIsDeleteAll(true);
                onOpen();
              }}
            >
              전부 삭제
            </Button>
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
