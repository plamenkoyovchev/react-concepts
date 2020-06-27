import React, { PureComponent } from "react";

class PureComponentA extends PureComponent {
  render() {
    console.log("PureComponentA render");

    return <div>{this.props.name}</div>;
  }
}

export default PureComponentA;
