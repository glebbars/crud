import React from "react";
import { Card } from "../Card/Card";
import { useTodoListQuery } from "../../hooks/useTodoListQuery";
import { ToDoDb } from "../../types/todo";

export const List = () => {
  const { data: todoList, error, isFetching } = useTodoListQuery();

  if (isFetching) {
    return null;
  }

  // TODO: ask if status === 'error' can be replaced with approach below
  if (error) {
    return <h1>Error...</h1>;
  }

  return (
    <div className="cards-container">
      {todoList.map((todo: ToDoDb) => (
        <Card todo={{ id: todo.id, name: todo.todo_name }} key={todo.id} />
      ))}
    </div>
  );
};
