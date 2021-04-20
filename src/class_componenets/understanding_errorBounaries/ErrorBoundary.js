import React, { Component } from "react";

export class ErrorBoundary extends Component {
  // a class component that implements either one or both of these lifecycle methods namely, getDerivedStateFromError or componentDidCatch, and becomes Error Boiundary

  // static method getDerivedStateFromError method is used to render a fallback UI after an error is thrown and componentDidCatch method is used to log that error information

  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h6>Something's Wrong!!</h6>;
    } else {
      return <h6>{this.props.children}</h6>;
    }
    // return (
    //     <div>

    //     </div>
    // )
  }
}
