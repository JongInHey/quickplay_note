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
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export const DeleteNote = ({
  isOpen,
  onClose,
  cancelRef,
  currentId,
  onClickDelete,
  isDeleteAll,
  todos,
  setTodos,
  setIsEdit,
  isEdit,
}) => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  const { register, handleSubmit, reset, setValue } = useForm();

  useEffect(() => {
    if (isEdit && currentId) {
      const curTodo = todos.find((todo) => todo.id === currentId);
      if (curTodo) {
        setValue("todo", curTodo.title);
      }
    }
  }, [isEdit, currentId, todos, setValue]);

  const onSubmit = (data) => {
    if (isEdit) {
      setTodos((prevTodo) =>
        prevTodo.map((todo) =>
          todo.id === currentId
            ? {
                ...todo,
                title: data.todo,
                date: `${year}년 ${month}월 ${day}일`,
              }
            : todo
        )
      );
      setIsEdit(false);
    }

    reset();
    onClose();
  };

  const editClose = () => {
    onClose();
    setIsEdit(false);
  };

  return (
    <AlertDialog
      isOpen={isOpen}
      onClose={editClose}
      leastDestructiveRef={cancelRef}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader>
            {isDeleteAll ? (
              "모든 노트 삭제"
            ) : (
              <>{isEdit ? "노트 수정" : "노트 삭제 또는 수정"}</>
            )}
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
                      {...register("todo", { required: true })}
                      placeholder="내용을 적어주세요."
                      border="1px solid #dbdbdb"
                      borderRadius="10px"
                    />
                    <Button
                      type="submit"
                      mt={5}
                      colorScheme="blue"
                      float="right"
                    >
                      저장
                    </Button>
                  </Box>
                ) : (
                  "이 노트를 삭제하시겠습니까? 수정하시겠습니까?"
                )}
              </>
            )}
          </AlertDialogBody>
          <AlertDialogFooter>
            {isEdit ? null : (
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
              <>
                <Button variant="outline" ref={cancelRef} onClick={onClose}>
                  취소
                </Button>
              </>
            ) : (
              !isEdit && (
                <Button
                  colorScheme="green"
                  onClick={() => {
                    setIsEdit(true);
                  }}
                >
                  수정
                </Button>
              )
            )}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};
