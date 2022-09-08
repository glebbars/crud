import { useQuery } from "react-query";
import axios from "axios";

const fetchAllToDo = async () => {
  const response = await axios.get("http://localhost:3001/api/get");

  return response.data;
};

export const useTodoListQuery = () => {
  return useQuery("todos", fetchAllToDo, {
    cacheTime: 10000,
    staleTime: 10000,
  });
};
