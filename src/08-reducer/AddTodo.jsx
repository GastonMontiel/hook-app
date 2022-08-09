import React from "react";
import { useForm } from "../hooks/useForm";

export const AddTodo = ({ addTodoFunction }) => {
  const { todoInput, onInputChange, onResetForm } = useForm({ todoInput: "" });
  const onFormSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: new Date().getTime(),
      todo: todoInput,
      done: false,
    };
    addTodoFunction(newTodo);
    onResetForm();
  };
  return (
    <div className="col-5">
      <h1>Agregar todo</h1>
      <hr />
      <form onSubmit={(e) => onFormSubmit(e)}>
        <input
          type="text"
          placeholder="¿Que hay que hacer?"
          className="form-control"
          onChange={onInputChange}
          value={todoInput}
          name="todoInput"
        />
        <button type="submit" className="btn btn-outline-primary mt-1">
          Agregar
        </button>
      </form>
    </div>
  );
};
