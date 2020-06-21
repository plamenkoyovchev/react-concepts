import React, { Component } from "react";
import withCounter from "./withCounter";

class HoverCounter extends Component {
  render() {
    const { count, increment } = this.props;
    return <div onMouseOver={increment}>Hovered {count} times!</div>;
  }
}

export default withCounter(HoverCounter);
