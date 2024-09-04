import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Input,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const DeleteNote = ({
  isOpen,
  onClose,
  cancelRef,
  currentId,
  onClickDelete,
  isDeleteAll,
  setIsEdit,
  isEdit,
}) => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  const [todos, setTodos] = useState(() => {
    const editTodo = localStorage.getItem("todos");
    return editTodo ? JSON.parse(editTodo) : [];
  });

  const { register, handleSubmit, reset, setValue } = useForm();

  const onSubmit = (data) => {
    const { todo: memo } = data;

    setTodos([
      ...todos,
      {
        id: Date.now(),
        title: memo,
        date: `${year}년 ${month}월 ${day}일`,
        finish: false,
      },
    ]);

    reset();
  };

  const onEditTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id === id));
    setValue("_edit", todos[0].title);
    console.log(todos[0].title);
  };

  return (
    <AlertDialog
      isOpen={isOpen}
      onClose={onClose}
      leastDestructiveRef={cancelRef}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader>
            {isDeleteAll ? "모든 노트 삭제" : "노트 삭제 또는 수정"}
          </AlertDialogHeader>
          <ModalCloseButton />
          <AlertDialogBody>
            {isDeleteAll ? (
              "모든 노트를 삭제하시겠습니까?"
            ) : (
              <>
                {isEdit ? (
                  <Box as="form" onSubmit={handleSubmit(onSubmit)}>
                    <Input
                      {...register("todo")}
                      value={todos[0].title}
                      placeholder="내용을 적어주세요."
                      border="1px solid #dbdbdb"
                      borderRadius="10px"
                    />
                  </Box>
                ) : (
                  "이 노트를 삭제하시겠습니까? 수정하시겠습니까?"
                )}
              </>
            )}
          </AlertDialogBody>
          <AlertDialogFooter>
            {isEdit ? (
              ""
            ) : (
              <Button
                mr={4}
                colorScheme="red"
                onClick={() => {
                  onClose();
                  isDeleteAll ? onClickDelete() : onClickDelete(currentId);
                }}
              >
                삭제
              </Button>
            )}
            {isDeleteAll ? (
              <Button variant="outline" ref={cancelRef} onClick={onClose}>
                취소
              </Button>
            ) : (
              <Button
                colorScheme="green"
                onClick={() => {
                  onEditTodo(currentId);
                  setIsEdit(true);
                  onSubmit();
                }}
              >
                수정
              </Button>
            )}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};
