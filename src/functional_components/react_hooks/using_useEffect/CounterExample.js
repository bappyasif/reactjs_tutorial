import React, { useState, useEffect } from "react";

export function CounterExample() {
  // using useState and useEffect
  let [count, setCount] = useState(0);

  // useEffect hook runs at each state variable value change, and its a function just like useState
  // we are causing side effects from a functional component rather than lifecycle methods from a class component
  // it runs on each render and re-render of components
  // useEffect is used within component itself just like useState, making state variable and props available without have to write any other extra code

  useEffect(() => {
    // passing in function which will be executed at/after each render
    document.title = `clicked ${count} times`;
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>click {count} times</button>
    </div>
  );
}

// using a class compoennt
// import React, { Component } from 'react'
// export class CounterExample extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//              count: 0
//         }
//     }

//     // runs once while loads
//     componentDidMount() {
//         document.title = `clicked ${this.state.count} times`;
//     }

//     // runs after each click
//     componentDidUpdate() {
//         document.title = `clicked ${this.state.count} times`;
//     }

//     render() {
//         return (
//             <div>
//                 <button onClick={()=>this.setState({count: this.state.count+1})}>click{this.state.count} times</button>
//             </div>
//         )
//     }
// }
