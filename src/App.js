import React from "react";
import "./App.css";
import Counter from "./patterns/set-state/Counter";
import ClickCounter from "./patterns/hoc/ClickCounter";
import HoverCounter from "./patterns/hoc/HoverCounter";

const App = () => {
  return (
    <div className="App">
      <div>
        <h4>Normal counter implementation</h4>
        <Counter />
      </div>
      <div>
        <h4>Shared functionality with withCounter HOC component</h4>
        <ClickCounter name="Plamen" />
        <HoverCounter />
      </div>
    </div>
  );
};

export default App;
