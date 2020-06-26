import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Plamen",
    };

    console.log("Lifecycle A constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Lifecycle A getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Lifecycle A componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Lifecycle A shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Lifecycle A getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Lifecycle A componentDidUpdate");
  }

  changeStateHandler = () => {
    this.setState({ name: "Plamenko" });
  };

  render() {
    console.log("Lifecycle A render");
    return (
      <>
        <div>Lifecycle A</div>
        <LifecycleB />
        <button onClick={this.changeStateHandler}>Change state</button>
      </>
    );
  }
}

export default LifecycleA;
