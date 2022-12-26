import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

interface updateTodoProps {
  id: number;
  value: string;
}

const updateTodo = ({ id, value }: updateTodoProps) => {
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
