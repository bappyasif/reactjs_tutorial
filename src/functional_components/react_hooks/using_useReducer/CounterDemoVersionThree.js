import React, { useReducer } from "react";

// using multiple properties into intial state triggering two two different sets of action in reducer method resulting different counts to display on DOM
// by using multiple state variable into insitial state we can have multiple controlled state value vehaviors, now these are all locally defined state variables, there is an tnother way for handling multiple state variable using mutiple useReducer methods

let initialState = {
  firstCounter: 0,
  secondCounter: 20,
};

let reducer = (state, action) => {
  switch (action.type) {
    // using spread operator onto state object, we're ensuring object previous value persistency
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return {
        firstCounter: initialState.firstCounter,
        secondCounter: initialState.secondCounter,
      };
    default:
      return state;
  }
};

export function CounterDemoVersionThree() {
  let [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>
        using multiuple property into initialState object with useReducer
        counter demo
      </p>

      <fieldset>
        <h4>firstCounter count is : {count.firstCounter}</h4>
        <h4>secondCounter count is : {count.secondCounter}</h4>
        <button onClick={() => dispatch({ type: "increment", value: 1 })}>
          increment firstCounter by 1
        </button>
        <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
          increment secondCounter by 1
        </button>
        <button onClick={() => dispatch({ type: "increment", value: 5 })}>
          increment firstCounter by 5
        </button>
        <button onClick={() => dispatch({ type: "increment2", value: 5 })}>
          increment secondCounter by 5
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
          decrement firstCounter by 1
        </button>
        <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
          decrement secondCounter by 1
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
          decrement firstCounter by 5
        </button>
        <button onClick={() => dispatch({ type: "decrement2", value: 5 })}>
          decrement secondCounter by 5
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>reset count</button>
      </fieldset>
    </div>
  );
}
