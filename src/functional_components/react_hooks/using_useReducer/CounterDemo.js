import React, { useReducer } from "react";
// useReducer require 3 steps to execute:
// 1> import useReducer
// 2.a> define initial state
// 2.b> define reducer function with action being defined within reducer function
// 3.a> use useReducer() within component
// 3.b> get returned value from useReducer method using array destructuring and within JSX use them in event dispatches and current / new state value directly on DOM

let initialState = 0;
// reducer functiona takes in 2 arguments, current state and action to specify next or new state
let reducer = (state, action) => {
  // convention is to use switch statements for different dispatches for different actions
  switch (action) {
    case "increment":
      // return initialState + 1;
      return state + 1;
    case "decrement":
      // return initialState - 1;
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export function CounterDemo() {
  // using useReducer within component, it returns two values, namely current state and dispatch method
  let [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>counter using useReducer hook</p>
      <fieldset>
        {/* using retuned value from useReducer into on click event and dispatching actions to determine next state value, and use current state value into JSX directly */}
        <h4>count is : {count}</h4>
        <button onClick={() => dispatch("increment")}>increment count</button>
        <button onClick={() => dispatch("decrement")}>decrement count</button>
        <button onClick={() => dispatch("reset")}>reset count</button>
      </fieldset>
    </div>
  );
}
