import React, { useState } from "react";

const CounterWithUseMemo = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementCounterOne = () => {
    setCounterOne((prevCounter) => prevCounter + 1);
  };

  const incrementCounterTwo = () => {
    setCounterTwo((prevCounter) => prevCounter + 1);
  };

  const isEven = () => {
    let i = 0;
    while (i < 2000000000) {
      i++;
    }

    return counterOne % 2 === 0;
  };

  return (
    <>
      <div>
        {counterOne} - {isEven() ? "Even" : "Odd"}
      </div>
      <button onClick={incrementCounterOne}>Increment Counter One</button>
      <div>{counterTwo}</div>
      <button onClick={incrementCounterTwo}>Increment Counter Two</button>
    </>
  );
};

export default CounterWithUseMemo;
