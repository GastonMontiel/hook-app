import React, { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

export const FormWithCustomHook = () => {
  const { form, onInputChange, password, username, email, onResetForm } =
    useForm({
      username: "",
      email: "",
      password: "",
    });
  // const { password, username, email } = form;

  useEffect(() => {
    console.log("useEffect");
  }, []);

  return (
    <>
      <h1>Formulario formSimple</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="mail@mail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input
        type="password"
        className="form-control mt-2"
        placeholder="contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button onClick={onResetForm} className="btn btn-primary mt-2">
        borrar
      </button>
    </>
  );
};
