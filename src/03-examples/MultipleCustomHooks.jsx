import { useEffect, useState } from "react";
import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
import { LoadingQuote } from "./LoadingQuote";
import { Quotes } from "./Quotes";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const [showMessage, setShowMessage] = useState();
  const { data, isLoading, hasError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = data?.[0] || {};
  useEffect(() => {
    const handler = setTimeout(() => {
      setShowMessage(false);
    }, 1500);

    return () => {
      clearTimeout(handler);
    };
  }, [showMessage]);

  return (
    <>
      <h1>Breaking bad quotes</h1>
      <hr />
      <LoadingQuote isLoading={isLoading} />
      <Quotes {...{ author: author, quote: quote }} />
      <button onClick={() => increment()}>increment</button>
      <button onClick={() => setShowMessage(true)}>showMessage</button>
      {showMessage && <div>pepe</div>}
    </>
  );
};
