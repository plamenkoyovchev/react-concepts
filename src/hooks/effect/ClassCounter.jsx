import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    document.title = `Count: ${this.state.count}`;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      document.title = `Count: ${this.state.count}`;
    }
  }

  increaseHandler = () => {
    this.setState((prevState, props) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <>
        <button onClick={this.increaseHandler}>Increase</button>
        <div>Class Count: {this.state.count}</div>
      </>
    );
  }
}

export default ClassCounter;
