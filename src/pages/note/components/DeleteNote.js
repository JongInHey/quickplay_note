import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";

export const DeleteNote = ({
  isOpen,
  onClose,
  cancelRef,
  currentId,
  onClickDelete,
  isDeleteAll,
}) => {
  return (
    <AlertDialog
      isOpen={isOpen}
      onClose={onClose}
      leastDestructiveRef={cancelRef}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader>
            {isDeleteAll ? "모든 노트 삭제" : "노트 삭제"}
          </AlertDialogHeader>
          <AlertDialogBody>
            {isDeleteAll
              ? "모든 노트를 삭제하시겠습니까?"
              : "이 노트를 삭제하시겠습니까?"}
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button variant="outline" mr={4} ref={cancelRef} onClick={onClose}>
              취소
            </Button>
            <Button
              colorScheme="red"
              onClick={() => {
                onClose();
                isDeleteAll ? onClickDelete() : onClickDelete(currentId);
              }}
            >
              삭제
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};
