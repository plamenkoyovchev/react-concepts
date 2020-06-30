import React from "react";
import { useState } from "react";

const NumbersList = () => {
  const [items, setItems] = useState([]);
  const addItem = () => {
    const number = {
      id: items.length + 1,
      value: Math.floor(Math.random() * 10) + 1,
    };

    setItems([...items, number]);
  };

  return (
    <>
      <button onClick={addItem}>Add number</button>
      <ul>
        {items.map(({ id, value }) => (
          <li key={id}>{value}</li>
        ))}
      </ul>
      <div>{JSON.stringify(items)}</div>
    </>
  );
};

export default NumbersList;
