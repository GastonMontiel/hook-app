import { useState } from "react";
import { useCounter } from "../hooks/useCounter";
import { Small } from "./Small";

export const Memorize = () => {
  const [show, setShow] = useState(true);
  const { increment, counter } = useCounter(0);
  return (
    <>
      <h1>
        counter: <Small value={counter} />
      </h1>
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
