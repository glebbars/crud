import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

const deleteTodo = (id: number) => {
  return axios.delete(`http://localhost:3001/api/delete/${id}`);
};

export const useRemoveTodo = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });
};
