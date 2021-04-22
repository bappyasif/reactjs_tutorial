// conditional usecase of useEffect, without using class component
import React, { useState, useEffect } from "react";

export function ConditionalUseEffectExample() {
  // Using useState and useState
  let [count, setCount] = useState(0);
  let [name, setName] = useState(null);

  // with conditional rendering example, we pass in another argument to useEffect function
  useEffect(() => {
    // we'll only render when value of count is changed and not otherwise
    console.log("updating document title :");
    document.title = `clicked ${count} times`;
    // array of values passed into second pareameter will be responsible for any changes into useEffect hooks, not otherwise
  }, [count]);

  //   without conditional rendering example
  //   useEffect(() => {
  //     console.log("updating document title :");
  //     document.title = `clicked ${count} times`;
  //   });

  return (
    <div>
      <fieldset>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          placeholder="enter name"
          onChange={(evt) => setName(evt.target.value)}
        />
        <button onClick={() => setCount(count + 1)}>click {count} times</button>
      </fieldset>
    </div>
  );
}

// using a class compoenent, understanding topic at hand
// import React, { Component } from "react";
// export class ConditionalUseEffectExample extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//       name: "",
//     };
//   }

//   componentDidMount() {
//     document.title = `clicked ${this.state.count} times`;
//   }

//   componentDidUpdate(prevProps, prevState) {
//       // lets stop this from happening by using a conditional check before rendering
//       if(prevState.count !== this.state.count) {
//         console.log("updating document title :");
//         document.title = `clicked ${this.state.count} times`;
//       }
//   }

// //   componentDidUpdate() {
// //     // this blockl of code is rendered each time there is a change in 'name' state value even though it should only be rendered when there is a change in 'count' state value
// //     // lets stop this from happening by using a conditional check before rendering
// //     console.log("updating document title :");
// //     document.title = `clicked ${this.state.count} times`;
// //     // now we'll re write this using useEffect hook to conditionally render and not otherwise improving performance
// //   }

//   render() {
//     return (
//       <div>
//         <fieldset>
//           <label>Name:</label>
//           <input
//             type="text"
//             value={this.state.name}
//             onChange={(evt) => this.setState({ name: evt.target.value })}
//           />
//           <button
//             onClick={() => this.setState({ count: this.state.count + 1 })}
//           >
//             click{this.state.count}
//           </button>
//         </fieldset>
//       </div>
//     );
//   }
// }
