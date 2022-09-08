import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

const postTodos = async (value) => {
  return await axios.post("http://localhost:3001/api/insert", {
    name: value,
  });
};

export const usePostTodos = () => {
  const queryClient = useQueryClient();

  return useMutation(postTodos, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });
};
