import React from "react";

// class components are more feature rich
// maintain their own private data, known as 'state'
// can contain complex UI Logic
// provide lifecycle for React hooks
// known as stateful / container component

// without destructuring
// export class GreetAnother extends React.Component {
//   render() {
//     return(
//         <div>
//             {/* props are immutable and readonly access is allowed */}
//             {/* when we need to change props value we will have to use 'state' */}
//             <h2>Hello {this.props.name}</h2>
//             {this.props.children}
//         </div>
//     );
//     // return <h2>Hello {this.props.name}</h2>;
//   }
// }

// Withy destruturing, and it happens within render function of class component
export class GreetAnother extends React.Component {
  render() {
    let {name, children} = this.props;
    // to have destructuring for mutiple state object values, we can use this
    // let {state1, state2} = this.state
    return(
        <div>
            {/* props are immutable and readonly access is allowed */}
            {/* when we need to change props value we will have to use 'state' */}
            <h2>Hello {name}</h2>
            {children}
        </div>
    );
    // return <h2>Hello {this.props.name}</h2>;
  }
}