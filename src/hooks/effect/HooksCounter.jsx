import React from "react";
import { useState, useEffect } from "react";

const HooksCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <div>Count: {count}</div>
    </>
  );
};

export default HooksCounter;
