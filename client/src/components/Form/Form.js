import React, { useRef } from "react";
import { usePostTodos } from "../../hooks/usePostTodos";

export const Form = () => {
  const { mutate: postTodos } = usePostTodos();

  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    postTodos(inputRef.current.value);

    inputRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>
        Your to do:
        <input ref={inputRef} type="text" className="input" />
      </label>
      <button className="submit-btn">Submit</button>
    </form>
  );
};
