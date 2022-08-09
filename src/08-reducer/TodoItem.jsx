import React from "react";

export const TodoItem = ({ deleteFunction, todoObject }) => {
  const { todo, id, done } = todoObject;
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="aling-self-center">{todo}</span>
      <button className="btn btn-danger" onClick={() => deleteFunction(id)}>
        Borrar
      </button>
    </li>
  );
};
