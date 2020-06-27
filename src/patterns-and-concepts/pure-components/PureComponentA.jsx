import React, { PureComponent } from "react";

// Implements shouldComponentUpdate method
// with SHALLOW props and state comparison (prevState with currentState & prevProps with currentProps)
// SHALLOW comparison:
// Primitive types are compared by their value (string, number, boolean)
// Reference types are compared by their reference (objects, arrays)
//          - we should always return new object or array when setting new state

class PureComponentA extends PureComponent {
  render() {
    console.log("PureComponentA render");

    return <div>{this.props.name}</div>;
  }
}

export default PureComponentA;
