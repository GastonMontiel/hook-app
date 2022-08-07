import { useReducer } from "react";
import { todoReducer } from "./todoReducer";
const initialState = [
  {
    id: new Date().getTime(),
    todo: "recolectar piedra del alma",
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    todo: "recolectar piedra del alma",
    done: false,
  },
];

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  return (
    <>
      <h1>TodoApp</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          {/*TO DO LIST*/}
          <ul className="list-group">
            {/*TODO ITEM*/}
            {todos.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between"
              >
                <span className="aling-self-center">item 1</span>
                <button className="btn btn-danger">Borrar</button>
              </li>
            ))}
          </ul>
          {/*TO DO LIST*/}
        </div>
        <div className="col-5">
          <h1>Agregar todo</h1>
          <hr />
          {/* todo add*/}
          <form>
            <input
              type="text"
              placeholder="¿Que hay que hacer?"
              className="form-control"
            />
            <button type="submit" className="btn btn-outline-primary mt-1">
              Agregar
            </button>
          </form>
          {/* todo add*/}
        </div>
      </div>
    </>
  );
};
export default TodoApp;
