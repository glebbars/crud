import React, { useCallback, useRef } from "react";
import { usePostTodos } from "../../hooks/usePostTodos";

export const Form = () => {
  const { mutate: postTodos } = usePostTodos();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback((event:  React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputRef.current?.value) {
      postTodos(inputRef.current?.value);

      inputRef.current.value = "";
    }
  }, [postTodos]);

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
