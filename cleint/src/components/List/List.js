import React from "react";
import { Card } from "../Card/Card";
import { useTodoListQuery } from "../../hooks/useTodoListQuery";

export const List = () => {
  const { data: todoList, error, isFetching } = useTodoListQuery();

  if (isFetching) {
    return;
  }

  // TODO: ask if status === 'error' can be replaced with approach below
  if (error) {
    return <h1>Error...</h1>;
  }

  return (
    <div className="cards-container">
      {todoList.map((todo) => (
        <Card todo={todo} key={todo.id} />
      ))}
    </div>
  );
};
