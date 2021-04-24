import React, { useReducer } from "react";
// let's uppack why this version is much more prudent for apps, we'll have another props namelt value to increment or decremnt value by in dispatch
// will be using an object as value for initialState rather than just any plain value
// by using an object as initial state we can use additional data into reduce method and in turn in JSX reflects those values on DOM
let initialState = {
  firstCounter: 0,
};

let reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { firstCounter: state.firstCounter - action.value };
    case "reset":
      return { firstCounter: initialState.firstCounter };
    default:
      return state;
  }
};

export function CounterDemoVersionTwo() {
  let [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>
        using an object as initialState value and type for dispatching actions
        to reducer function
      </p>
      <fieldset>
        <h4>count is : {count.firstCounter}</h4>
        <button onClick={() => dispatch({ type: "increment", value: 1 })}>
          increment count by 1
        </button>
        <button onClick={() => dispatch({ type: "increment", value: 5 })}>
          increment count by 5
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
          decrement count by 1
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
          decrement count by 5
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>reset count</button>
      </fieldset>
    </div>
  );
}

// just a rewrite of CounterDemo using an object, similar to redux reducer
// // will be using an object as value for initialState rather than just any plain value
// let initialState = {
//   firstCounter: 0,
// };

// let reducer = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return {firstCounter: state.firstCounter + 1};
//     case "decrement":
//       return {firstCounter: state.firstCounter - 1};
//     case "reset":
//       return {firstCounter: initialState.firstCounter};
//     default:
//       return state;
//   }
// };

// export function CounterDemoVersionTwo() {
//   let [count, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div>
//         <p>using an object as initialState value and type for dispatching actions to reducer function</p>
//       <fieldset>
//         <h4>count is : {count.firstCounter}</h4>
//         <button onClick={() => dispatch({type: "increment"})}>increment count</button>
//         <button onClick={() => dispatch({type: "decrement"})}>decrement count</button>
//         <button onClick={() => dispatch({type: "reset"})}>reset count</button>
//       </fieldset>
//     </div>
//   );
// }
