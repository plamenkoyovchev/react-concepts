import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  onIncrementHandler = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  render() {
    return (
      <>
        <label>{`Counter: ${this.state.count}`}</label>
        <button onClick={this.onIncrementHandler}>Increment</button>
      </>
    );
  }
}

export default Counter;
