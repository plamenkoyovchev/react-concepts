import React, { Component } from "react";

// we can wrap single component or multiple components or
// if we are rendering lists we can wrap each item with error boundary to keep application running other app parts

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
      return <h4>Something went wrong!</h4>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
