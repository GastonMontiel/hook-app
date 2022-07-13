import React, { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

export const FormWithCustomHook = () => {
  const { form, setForm } = useForm({
    username: "strider",
    email: "fernando@gmail.com",
    password: "",
  });
  const { password, username, email } = form;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };
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
    </>
  );
};
