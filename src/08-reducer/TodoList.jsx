import React from "react";
import { TodoItem } from "./TodoItem";
import { todoReducer } from "./todoReducer";

export const TodoList = ({ todos, deleteFunction, onToggleTodo }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todoObject={todo}
          deleteFunction={deleteFunction}
          onToggleTodo={onToggleTodo}
        />
      ))}{" "}
    </ul>
  );
};
