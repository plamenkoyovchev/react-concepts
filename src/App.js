import React from "react";
import "./App.css";
import Counter from "./patterns/set-state/Counter";
import ClickCounter from "./patterns/hoc/ClickCounter";

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
      </div>
    </div>
  );
};

export default App;
