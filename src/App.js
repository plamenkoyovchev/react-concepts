import React from "react";
import "./App.css";
import Counter from "./patterns-and-concepts/set-state/Counter";
import ClickCounter from "./patterns-and-concepts/hoc/ClickCounter";
import HoverCounter from "./patterns-and-concepts/hoc/HoverCounter";

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
