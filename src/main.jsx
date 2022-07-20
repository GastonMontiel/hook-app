import React from "react";
import ReactDOM from "react-dom/client";
import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
import "./App.css";
import { FormWithCustomHook } from "./useEffect/FormWithCustomHook";
import { SimpleForm } from "./useEffect/SimpleForm";

import { CounterWithCustomHook } from "./useState/CounterWithCustomHook";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MultipleCustomHooks></MultipleCustomHooks>
  </React.StrictMode>
);
