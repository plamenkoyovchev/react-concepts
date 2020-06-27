import React, { PureComponent } from "react";
import RegularComponent from "./RegularComponent";
import PureComponentA from "./PureComponentA";

// It is considered as a good practice all children components also to extend PureComponent
// if the parent extends PureComponent

export class ParentComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "Plamen",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "Plamenkooo" });
    }, 2000);
  }

  render() {
    return (
      <>
        <div>Parent Component</div>
        <RegularComponent name={`RegularComponent ${this.state.name}`} />
        <PureComponentA name={`Pure Component ${this.state.name}`} />
      </>
    );
  }
}

export default ParentComponent;
