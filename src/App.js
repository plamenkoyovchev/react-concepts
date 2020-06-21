import React from "react";
import "./App.css";
import Counter from "./patterns-and-concepts/set-state/Counter";
import ClickCounter from "./patterns-and-concepts/hoc/ClickCounter";
import HoverCounter from "./patterns-and-concepts/hoc/HoverCounter";
import User from "./patterns-and-concepts/render-props/User";
import CounterWithRenderProps from "./patterns-and-concepts/render-props/CounterWithRenderProps";

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
      <div>
        <h4>Pass props as function</h4>
        <User render={(isLoggedIn) => (isLoggedIn ? "Plamen" : "Guest")} />
      </div>
      <div>
        <h4>Render props pattern</h4>
        <CounterWithRenderProps
          render={(count, increment) => (
            <Counter count={count} increment={increment} />
          )}
        />
      </div>
    </div>
  );
};

export default App;
