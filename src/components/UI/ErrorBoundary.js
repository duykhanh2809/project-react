import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false, messageError: "" };
  }
  componentDidCatch(error) {
    // this.setState({ hasError: true, messageError: error.message });
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <p className="error-boundary">Something went wrong!</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
