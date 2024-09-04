import { Box, Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { DeleteNote } from "./DeleteNote";
import { NoteForm } from "./NoteForm";
import { NoteList } from "./NoteList";

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
  const [isEdit, setIsEdit] = useState(false);

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

  const resetCheck = () => {
    setTodos(todos.map((todo) => ({ ...todo, finish: false })));
  };

  return (
    <Box>
      <NoteForm todos={todos} setTodos={setTodos} />
      <Box w="100%" borderRadius="10px" mt={5}>
        {todos.length > 0 ? (
          <>
            <NoteList
              todos={todos}
              setTodos={setTodos}
              isCheckBox={isCheckBox}
              onOpen={onOpen}
              setCurrentId={setCurrentId}
              setIsDeleteAll={setIsDeleteAll}
              setIsEdit={setIsEdit}
            />
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
                colorScheme="green"
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
        setIsEdit={setIsEdit}
        isEdit={isEdit}
      />
    </Box>
  );
};
