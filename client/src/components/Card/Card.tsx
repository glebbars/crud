import React, { useState, FC } from "react";
import { useRemoveTodo } from "../../hooks/useRemoveTodo";
import { EditCard } from "../EditCard/EditCard";

import { ToDo } from "../../types/todo";

interface CardProps {
  todo: ToDo;
}

export const Card: FC<CardProps> = ({ todo }) => {
  const [isEditOn, setIsEditOn] = useState(false);

  const { mutate: removeTodo } = useRemoveTodo();

  const handleDelete = () => removeTodo(todo.id);

  const editOpen = () => setIsEditOn(true);
  const editClose = () => setIsEditOn(false);

  return (
    <div className="card">
      {isEditOn ? (
        <EditCard todoId={todo.id} onClose={editClose} />
      ) : (
        <>
          <h4 className="card-title">{todo.name}</h4>
          <div className="card-buttons-wrapper">
            <button className="card-button" onClick={editOpen}>
              Edit
            </button>
            <button onClick={handleDelete} className="card-button">
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};
