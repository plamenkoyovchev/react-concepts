import React, { Component } from "react";

// Does not implement shouldComponentUpdate method
// it always return true by default

export class RegularComponent extends Component {
  render() {
    console.log("Regular Component render");

    return <div>{this.props.name}</div>;
  }
}

export default RegularComponent;
