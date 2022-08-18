import React from "react";
import ReactDOM from "react-dom/client";
import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
import { Layout } from "./05-eample-layoutEffect/Layout";
import { CallbacHook } from "./06-memo/CallbacHook";
import { MemoHook } from "./06-memo/MemoHook";
import { Memorize } from "./06-memo/Memorize";
import { Padre } from "./07-tarea-memo/Padre";
import "./App.css";
import { FocusScreen } from "./example-04-useReff/FocusScreen";
import { FormWithCustomHook } from "./useEffect/FormWithCustomHook";
import { SimpleForm } from "./useEffect/SimpleForm";
import "./08-reducer/intro-reducer";

import { CounterWithCustomHook } from "./useState/CounterWithCustomHook";
import TodoApp from "./08-reducer/TodoApp";
import { MainApp } from "./useContext/MainApp";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <MainApp />
    </React.StrictMode>
  </BrowserRouter>
);
