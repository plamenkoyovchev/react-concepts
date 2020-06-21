import React, { Component } from "react";

class CounterWithRenderProps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    const { count, increment } = this.state;

    return <div>{this.props.render(count, increment)}</div>;
  }
}

export default CounterWithRenderProps;
