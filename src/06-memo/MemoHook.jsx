import { useMemo } from "react";
import { useState } from "react";
import { useCounter } from "../hooks/useCounter";
const heavySTuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("ahi vamos");
  }
  return ` cantidad de iteraciones hechas${iterationNumber}`;
};

export const MemoHook = () => {
  const [show, setShow] = useState(true);
  const { increment, counter } = useCounter(4000);
  const memorizedValue = useMemo(() => heavySTuff(counter), [counter]);
  return (
    <>
      <h1>
        counter: <small>{counter}</small>
      </h1>

      <h4>{memorizedValue}</h4>

      <hr />
      <button
        className="btn btn-primary"
        onClick={() => {
          increment(1);
        }}
      >
        +1
      </button>
      <button
        className=" btn btn-outline-primary"
        onClick={() => setShow((v) => !v)}
      >
        show/hide {JSON.stringify(show)}
      </button>
    </>
  );
};
