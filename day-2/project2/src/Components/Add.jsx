import { useState } from "react";

export function Add() {
  const [counter, setCounter] = useState(0);

  const counterHandler = (value) => {
    setCounter(counter + value);
  };
  return (
    <div>
      <h1>Counter:- {counter}</h1>
      <button onClick={() => counterHandler(1)}>Add 1</button>
      <button
        onClick={() => {
          if (counter > 0) {
            counterHandler(-1);
          }
        }}
      >
        Sub 1
      </button>
    </div>
  );
}
