import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  onIncrementHandler = () => {
    this.setState((prevState, props) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <label>{`Counter: ${count}`}</label>
        <button onClick={this.onIncrementHandler}>Increment</button>
      </>
    );
  }
}

export default Counter;
