import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

const updateTodo = ({ id, value }) => {
  return axios.put("http://localhost:3001/api/update", {
    id: id,
    name: value,
  });
};

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation(updateTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });
};
