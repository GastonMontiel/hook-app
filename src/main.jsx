import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { FormWithCustomHook } from "./useEffect/FormWithCustomHook";
import { SimpleForm } from "./useEffect/SimpleForm";

import { CounterWithCustomHook } from "./useState/CounterWithCustomHook";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FormWithCustomHook></FormWithCustomHook>
  </React.StrictMode>
);
