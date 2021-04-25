import React from "react";
import { AnotherComponentContextsContainer } from "./components_tree_context_levels/ContextContainer";
import { ContextContainer } from "./context_levels/ContextContainer";
import { CounterDemo } from "./CounterDemo";
import { CounterDemoVersionFour } from "./CounterDemoVersionFour";
import { CounterDemoVersionThree } from "./CounterDemoVersionThree";
import { CounterDemoVersionTwo } from "./CounterDemoVersionTwo";
import { ContainerForDataFetching } from "./data_fetching/ContainerForDataFetching";


// useReducer hook is used for 'state' management, an alternative approach to useState
// useState is built upon using useReducer, useReducer is much primitive hook than useState

// reduce vs useReducer
/**
 * reduce in array method:
 *  <> takes in two arguments, a reducer function and an initial value, e.g. array.reduce(reducerFunc, initialValue)
 *  <> reducer method gets a single value, reducer function has two arguments, accumulator and itemValue / current value and gets a single value by summing them, e.g. singleValue = reducer(accumulator, currentValue)
 *  <> reduce method returns a single value which it gets from reducer function
 * useReducer hook in React
 *  <> takes in two arguments, a reducer function and an initial state, e.g. useReducer(reducerFunc, initialState)
 *  <> reducer method gets a new state upon using upon using useReducer, reducer function takes in two arguments, e.g. newState = reducer(currentState, action)
 *  <> useReducer method retuns a pair of values, namely [newState, dispatch], useReducer is changing current 'state' value as brevity
 */

export function ContainerForUseReducer() {
  return (
    <div>
      <h2>useReducer in local state management usecases</h2>
      <CounterDemo />
      <CounterDemoVersionTwo />
      <CounterDemoVersionThree />
      <CounterDemoVersionFour />
      <br />
      <h2>useReducer in global state management usecase with useContext</h2>
      {/* our motivation here is to use a single counter in ContextContainer and then dispatch them among Component B, D, F in defferent component treel level using useContext and useReduser */}
      <div>
        <ContextContainer />
        <br />
        <h2>another useReducer with useContext to share state variable value and dispatch action among component trees in different levels</h2>
        <AnotherComponentContextsContainer />
        <br />
        <p>Data Fetching using useReducer</p>
        {/* first demonstration using useState and useEffect before using useReducer to do just tht same and compare and contrast */}
        <ContainerForDataFetching />
      </div>
    </div>
  );
}
