import React, { useCallback, FC, useRef } from "react";
import { useUpdateTodo } from "../../hooks/useUpdateTodo";

interface EditCardProps {
  todoId: number;
  onClose?: () => void;
}

export const EditCard: FC<EditCardProps> = ({ todoId, onClose }) => {
  const { mutate: updateTodo } = useUpdateTodo();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpdate = useCallback(() => {
    if (inputRef.current?.value) {
      updateTodo({ id: todoId, value: inputRef.current.value });
    }
  }, [todoId, updateTodo]);

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
