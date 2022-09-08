import React, { useRef } from "react";
import { useUpdateTodo } from "../../hooks/useUpdateTodo";

export const EditCard = ({ todoId, onClose }) => {
  const { mutate: updateTodo } = useUpdateTodo();

  const inputRef = useRef(null);

  const handleUpdate = () => {
    const inputValue = inputRef.current.value;

    updateTodo({ id: todoId, value: inputValue });
  };

  return (
    <>
      <h4 className="card-title">Type new todo</h4>
      <div onClick={onClose} className="close" />
      <input ref={inputRef} type="text" className="input" />
      <button onClick={handleUpdate} className="card-button">
        Save
      </button>
    </>
  );
};
