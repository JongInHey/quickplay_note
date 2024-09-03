import { Box, Flex, Heading, Input, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export const Todo = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  const [todos, setTodos] = useState(() => {
    const resTodo = localStorage.getItem("todos");
    return resTodo ? JSON.parse(resTodo) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const { todo: memo } = data;

    setTodos([
      ...todos,
      {
        id: Date.now(),
        title: memo,
        date: `${year}년 ${month}월 ${day}일`,
      },
    ]);

    reset();
  };

  return (
    <Box>
      <Heading textAlign="center">📝NOTE</Heading>
      <Box as="form" onSubmit={handleSubmit(onSubmit)} mt={4}>
        <Input
          {...register("todo", { required: "빈 내용 말고~😈" })}
          placeholder="내용을 적어주세요."
          border="1px solid #dbdbdb"
          borderRadius="10px"
        />
      </Box>
      <Box w="100%" borderRadius="10px" mt={5}>
        {todos.length > 0 ? (
          <>
            {todos.map((data, i) => (
              <Box key={data.id} mb={3}>
                <Flex alignItems="center">
                  <Text mr={2}>{i + 1}.</Text>
                  <Flex
                    w="100%"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Text maxW="260px">{data.title}</Text>
                    <Text fontSize="14px" opacity="0.6">
                      {data.date}
                    </Text>
                  </Flex>
                </Flex>
                <Box w="100%" border="1px solid #ededed" />
              </Box>
            ))}
          </>
        ) : (
          <Text textAlign="center">Note를 작성해주세요.</Text>
        )}
      </Box>
    </Box>
  );
};
