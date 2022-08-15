import React from "react";

export const TodoItem = ({ deleteFunction, todoObject, onToggleTodo }) => {
  const { todo, id, done } = todoObject;
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        onDoubleClick={() => onToggleTodo(id)}
        className={`aling-self-center ${
          done && "text-decoration-line-through"
        }`}
      >
        {todo}
      </span>
      <button className="btn btn-danger" onClick={() => deleteFunction(id)}>
        Borrar
      </button>
    </li>
  );
};
