import React, { useReducer } from "react";
// using increment or decremnet by multiple values
// this allows us to stop merging states when working with multiple initial state objects
// also helps us avoid using duplication of codes for multiple state variables with similar actions

let initialState = 0;

let reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + action.value;
    case "decrement":
      return state - action.value;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export function CounterDemoVersionFour() {
  let [count, dispatch] = useReducer(reducer, initialState);
  // considering both reducers uses same reducer functionality, we can simply use same reducer function and initial state
  let [count2, dispatch2] = useReducer(reducer, initialState);
  return (
    <div>
      <p>
        using multiuple useReducer methods to do above multiple state variable
        rendering
      </p>

      <fieldset>
        <fieldset>
          <h4>counter one: {count}</h4>
          <button onClick={() => dispatch({ type: "increment", value: 1 })}>
            increment counterOne by 1
          </button>
          <button onClick={() => dispatch({ type: "increment", value: 5 })}>
            increment counterOne by 5
          </button>
          <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
            decrement counterTwo by 1
          </button>
          <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
            decrement counterTwo by 5
          </button>
        </fieldset>
        <fieldset>
          <h4>counter two: {count2}</h4>
          <button onClick={() => dispatch2({ type: "increment", value: 1 })}>
            increment counterTwo by 1
          </button>
          <button onClick={() => dispatch2({ type: "increment", value: 5 })}>
            increment counterTwo by 5
          </button>
          <button onClick={() => dispatch2({ type: "decrement", value: 1 })}>
            decrement counterTwo by 1
          </button>
          <button onClick={() => dispatch2({ type: "decrement", value: 5 })}>
            decrement counterTwo by 5
          </button>
        </fieldset>
        <button
          onClick={() => {
            dispatch({ type: "reset" });
            dispatch2({ type: "reset" });
          }}
        >
          reset counters
        </button>
      </fieldset>
    </div>
  );
}

// using increment or decrment by default value of 1

// this allows us to stop merging states when working with multiple initial state objects
// also helps us avoid using duplication of codes for multiple state variables with similar actions

// let initialState = 0;

// let reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };

// export function CounterDemoVersionFour() {
//   let [count, dispatch] = useReducer(reducer, initialState);
//   // considering both reducers uses same reducer functionality, we can simply use same reducer function and initial state
//   let [count2, dispatch2] = useReducer(reducer, initialState);
//   return (
//     <div>
//       <p>
//         using multiuple useReducer methods to do above multiple state variable
//         rendering
//       </p>

//       <fieldset>
//         <fieldset>
//           <h4>counter one: {count}</h4>
//           <button onClick={() => dispatch("increment")}>
//             increment counterOne by 1
//           </button>
//           <button onClick={() => dispatch("decrement")}>
//             decrement counterTwo by 1
//           </button>
//         </fieldset>
//         <fieldset>
//           <h4>counter two: {count2}</h4>
//           <button onClick={() => dispatch2("increment")}>
//             increment counterTwo by 1
//           </button>
//           <button onClick={() => dispatch2("decrement")}>
//             decrement counterTwo by 1
//           </button>
//         </fieldset>
//         <button
//           onClick={() => {
//             dispatch("reset");
//             dispatch2("reset");
//           }}
//         >
//           reset counters
//         </button>
//       </fieldset>
//     </div>
//   );
// }
