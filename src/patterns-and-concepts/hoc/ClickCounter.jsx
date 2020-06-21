import React, { Component } from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component {
  render() {
    const { count, increment, name } = this.props;

    return (
      <button onClick={increment}>
        {name} clicked {count} times!
      </button>
    );
  }
}

export default withCounter(ClickCounter);
