import React from "react";

// class components are more feature rich
// maintain their own private data, known as 'state'
// can contain complex UI Logic
// provide lifecycle for React hooks
// known as stateful / container component

export class GreetAnother extends React.Component {
  render() {
    return(
        <div>
            {/* props are immutable and readonly access is allowed */}
            {/* when we need to change props value we will have to use 'state' */}
            <h2>Hello {this.props.name}</h2>
            {this.props.children}
        </div>
    );
    // return <h2>Hello {this.props.name}</h2>;
  }
}
