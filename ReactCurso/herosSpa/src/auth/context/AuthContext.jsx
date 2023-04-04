import React, { createContext, useReducer } from "react";
import types from "../types/types";
import { authReducer } from "./authReducer";

export const AuthContext = createContext();

const inicialState = { logged: false };

const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return { logged: !!user, user: user };
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, inicialState, init);
  //los reducer no deben llamar nada mas que a la accion o al state.
  //para eso se crea una funcion ejemplo como on login
  //que carga el localStroge
  const onLogin = (name = "") => {
    const user = { id: "ABX", name: name };
    const action = { type: types.login, payload: user };
    localStorage.setItem("user", JSON.stringify(user));
    dispatch(action);
  };

  const onLogout = () => {
    const action = { type: types.logout };
    localStorage.clear("user");
    dispatch(action);
  };

  return (
    <AuthContext.Provider
      value={{ authState, login: onLogin, logout: onLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
