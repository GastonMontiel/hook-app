import React from "react";
import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();
  const onClickButton = () => {
    inputRef.current.select();
  };
  return (
    <>
      <h1>FocusScreen</h1>
      <hr />
      <input
        ref={inputRef}
        type="text"
        className="form-control"
        placeholder="ingrese su nombre"
      />
      <button onClick={onClickButton} className="btn btn-primary mt-2">
        setFocus
      </button>
    </>
  );
};
