import { Box, Heading, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export const NoteForm = ({ todos, setTodos }) => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  const { register, handleSubmit, reset } = useForm();

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
  return (
    <>
      <Heading textAlign="center">📝NOTE</Heading>
      <Box as="form" onSubmit={handleSubmit(onSubmit)} mt={4}>
        <Input
          {...register("todo", { required: "빈 내용 말고~😈" })}
          placeholder="내용을 적어주세요."
          border="1px solid #dbdbdb"
          borderRadius="10px"
        />
      </Box>
    </>
  );
};
