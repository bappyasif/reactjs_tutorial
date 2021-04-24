import React, { useReducer } from "react";
// importing component context levels
import { ComponentA } from "./A_Component";
import { ComponentB } from "./B_Component";
import { ComponentC } from "./C_Component";
// we'll create a single counter reducer and then use them among components using useContext hook
// lets create a reducer function and use useReducer function in this container component
let initialState = 0;
let reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

// creating context for components
export let CountContext = React.createContext();

export function ContextContainer() {
  let [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>Container has Component A, B, C</p>
      {/* we dont want count to be dispatched from context level components not root level component */}
      {/* and for that reason we will use useContext so that it can be done so with a Provider */}
      <h4>Rendering Count: {count}</h4>
      {/* we'll be passing both count and dispatch as a value for Provider within an object notation */}
      <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider>
    </div>
  );
}