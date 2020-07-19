import React, { useCallback } from "react";
import Title from "./Title";
import { useState } from "react";
import Count from "./Count";
import Button from "./Button";

const ParentContainerWithUseCallback = () => {
  const [age, setAge] = useState(20);
  const [salary, setSalary] = useState(1000);

  const incrementAge = useCallback(() => {
    setAge((prevAge) => prevAge + 1);
  }, []);

  const incrementSalary = useCallback(() => {
    setSalary((prevSalary) => prevSalary + 100);
  }, []);

  return (
    <>
      <Title title={"with useCallback"} />
      <Count text={"Age"} count={age} />
      <Button clickHandler={incrementAge}>Increment Age</Button>
      <Count text={"Salary"} count={salary} />
      <Button clickHandler={incrementSalary}>Increment Salary</Button>
    </>
  );
};

export default ParentContainerWithUseCallback;
