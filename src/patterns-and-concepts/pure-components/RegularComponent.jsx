import React, { Component } from "react";

export class RegularComponent extends Component {
  render() {
    console.log("Regular Component render");

    return <div>{this.props.name}</div>;
  }
}

export default RegularComponent;
