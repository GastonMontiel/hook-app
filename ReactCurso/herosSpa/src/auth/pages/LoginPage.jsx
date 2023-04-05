import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login, authState } = useContext(AuthContext);
  const onLogin = () => {
    login("gaston");
    navigate("/marvel", { replace: true });
  };
  return (
    <div>
      <h1 className="container mt-5">LoginPage</h1>
      <hr />
      <button onClick={onLogin} className="btn btn-primary">
        login
      </button>
    </div>
  );
};
