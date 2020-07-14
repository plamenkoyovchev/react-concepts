import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + 1 };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - 1 };
    case "increment2":
      return { ...state, firstCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, firstCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CounterTwoReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>Count - {count.firstCounter}</div>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <hr />
      <div>Count - {count.secondCounter}</div>
      <button onClick={() => dispatch({ type: "increment2", value: 10 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 2 })}>
        Decrement
      </button>
    </div>
  );
};

export default CounterTwoReducer;
