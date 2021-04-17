import React from "react";

export class Message extends React.Component {
  constructor() {
    super();
    // state is a privately managed object inside a component
    // state influence what will be rendered in DOM and can be changed within compoennt using setState()
    this.state = {
      text: "Welcome Visitor",
    };
  }
  onButtonClickHandler() {
    this.setState({
      text: "Thank you for Subscribing",
    });
  }
  render() {
    return (
      <div>
        <h2>
          {this.state.text}
          {/* Welcome Visitor */}
          {/* Welcome {this.props.name} a.k.a {this.props.aka} */}
        </h2>
        <button onClick={() => this.onButtonClickHandler()}>
          Subscribe Here
        </button>
      </div>
    );
  }
}
