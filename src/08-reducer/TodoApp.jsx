import { useReducer } from "react";
import { AddTodo } from "./AddTodo";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";
const initialState = [
  {
    id: new Date().getTime(),
    todo: "recolectar piedra del alma",
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    todo: "recolectar piedra del tiempo",
    done: false,
  },
];

const TodoApp = () => {
  const deleteTodo = (id) => console.log(id);
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  const addTodo = (todo) => {
    const action = {
      type: "add todo",
      payload: todo,
    };
    dispatch(action);
  };
  return (
    <>
      <h1>TodoApp</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList deleteFunction={deleteTodo} todos={todos} />
        </div>
        <AddTodo addTodoFunction={addTodo} />
      </div>
    </>
  );
};
export default TodoApp;
