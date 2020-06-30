import React, { useState } from "react";

const HookCounter = () => {
  const initialValue = 0;
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={() => setCount(initialValue)}>Reset</button>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};

export default HookCounter;
