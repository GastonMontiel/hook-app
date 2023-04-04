import { useContext } from "react";
import UserContext from "./context/UserContext";

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <h1>LoginPage</h1>
      <hr />
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button
        className="btn btn-primary"
        onClick={() => {
          setUser({
            name: "Gaston Montiel",
            age: 23,
            mail: "montiadag@gmail.com",
          });
        }}
      >
        set User
      </button>
    </>
  );
};
