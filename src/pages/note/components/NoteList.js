import { Box, Checkbox, Flex, Text } from "@chakra-ui/react";
import { CiMenuKebab } from "react-icons/ci";

export const NoteList = ({
  todos,
  setTodos,
  isCheckBox,
  onOpen,
  setCurrentId,
  setIsDeleteAll,
  setIsEdit,
}) => {
  const onclickFinish = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, finish: !todo.finish } : todo
      )
    );
  };

  return (
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
            <Flex w="100%" alignItems="center" justifyContent="space-between">
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
            <CiMenuKebab
              cursor="pointer"
              onClick={() => {
                onOpen();
                setCurrentId(data.id);
                setIsDeleteAll(false);
                setIsEdit(false);
              }}
            />
            {/* <DeleteIcon
              cursor="pointer"
              color="red.300"
              onClick={() => {
                onOpen();
                setCurrentId(data.id);
                setIsDeleteAll(false);
              }}
            /> */}
          </Flex>
          <Box w="100%" border="1px solid #ededed" mt={2} mb={3} />
        </Box>
      ))}
    </>
  );
};
