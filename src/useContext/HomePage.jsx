import { useContext } from "react";
import UserContext from "./context/UserContext";

export const HomePage = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>HomePage {user.name}</h1>
      <hr />
    </>
  );
};
