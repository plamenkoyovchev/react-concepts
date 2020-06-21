import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { count, increment } = this.props;
    return <button onClick={increment}>Clicked {count} times!</button>;
  }
}

export default Counter;
