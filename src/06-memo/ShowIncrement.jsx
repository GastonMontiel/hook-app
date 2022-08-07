import React from "react";

export const ShowIncrement = React.memo(({ increment }) => {
  console.log("coso");
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment();
      }}
    >
      +1
    </button>
  );
});
