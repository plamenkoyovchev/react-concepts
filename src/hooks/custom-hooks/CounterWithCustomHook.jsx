import React from "react";
import useCounter from "./useCounter";

const CounterWithCustomHook = () => {
  const [count, increment, decrement, reset] = useCounter(0);

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CounterWithCustomHook;
