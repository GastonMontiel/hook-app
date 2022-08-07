import React, { memo, useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbacHook = () => {
  const [counter, setCounter] = useState(0);

  const increment = useCallback(() => {
    setCounter((v) => v + 1);
  }, []);

  return (
    <>
      <h1>useCallbassck hook {counter}</h1>
      <hr />

      <ShowIncrement increment={increment} />
    </>
  );
};
