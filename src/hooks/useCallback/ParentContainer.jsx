import React, { useState } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

const ParentContainer = () => {
  const [age, setAge] = useState(20);
  const [salary, setSalary] = useState(1000);

  const incrementAge = () => {
    setAge((prevAge) => prevAge + 1);
  };

  const incrementSalary = () => {
    setSalary((prevSalary) => prevSalary + 100);
  };

  console.log("Rendering ParentContainer");
  return (
    <>
      <Title title={"without useCallback"} />
      <Count text={"Age"} count={age} />
      <Button clickHandler={incrementAge}>Increment Age</Button>
      <Count text={"Salary"} count={salary} />
      <Button clickHandler={incrementSalary}>Increment Salary</Button>
    </>
  );
};

export default ParentContainer;
