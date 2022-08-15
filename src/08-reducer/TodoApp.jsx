import { useEffect, useReducer } from "react";
import { AddTodo } from "./AddTodo";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";
const initialState = [
  // {
  //   id: new Date().getTime(),
  //   todo: "recolectar piedra del alma",
  //   done: false,
  // },
  // {
  //   id: new Date().getTime() * 3,
  //   todo: "recolectar piedra del tiempo",
  //   done: false,
  // },
];
const init = () => {
  return JSON.parse(localStorage.getItem("todos") || []);
};
const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    console.log("cambie");
    localStorage.setItem("todos", JSON.stringify(todos) || []);
  }, [todos]);

  const addTodo = (todo) => {
    const action = {
      type: "add todo",
      payload: todo,
    };
    dispatch(action);
  };
  const deleteTodo = (id) => {
    const action = {
      type: "remove todo",
      payload: id,
    };
    dispatch(action);
  };
  const handleToggleTodo = (id) => {
    const action = {
      type: "toggle todo",
      payload: id,
    };
    dispatch(action);
  };
  return (
    <>
      <h1>TodoApp</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            deleteFunction={deleteTodo}
            onToggleTodo={handleToggleTodo}
            todos={todos}
          />
        </div>
        <AddTodo addTodoFunction={addTodo} />
      </div>
    </>
  );
};
export default TodoApp;
