import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasErrors: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasErrors: true,
    };
  }

  componentDidCatch(error) {
    // log error to external service (e.g.)
  }

  render() {
    if (this.state.hasErrors) {
      return <h1>Something went wrong!</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
