const initialState = [{ id: 1, todo: "recolectar basura", done: false }];

const todoReducer = (state = initialState, action = {}) => {
  if (action.type == "[TODO] add todo") return [...state, action.payload];
};

const newTodo = {
  id: 2,
  todo: "comer cena",
  done: false,
};

const addTodoAction = {
  type: "[TODO] add todo",
  payload: newTodo,
};

const reducer = todoReducer(initialState, addTodoAction);

console.log(reducer);
