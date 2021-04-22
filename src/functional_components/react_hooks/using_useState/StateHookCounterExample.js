import React, { useState } from "react";

export function StateHookCounterExample() {
  // will be using state hook to get similar functionality as we do for 'state' variable in any clkass components
  // hooks are just function which takes in a parameter which is initial value to that state variable, returns current value and a method to update that value in turns

  // here count is a state variable which is initilizes with a value of 0 using useState(0) call, setCount is that method which will ensure how our counter behaves on each event trigger
  let [count, setCount] = useState(0);

  // Rules of using hooks
  // 1> always call hooks at Top Level, never call hooks inside loops, conditions or nested functions
  // 2> always call hooks from React Functions, call them from within Functional Components only and not just any regular Javascript functions

  return (
    <div>
      <h4>Hook Counter</h4>
      <button onClick={() => setCount(count + 1)}>Count : {count}</button>
      {/* <button onClick={() => setCount(count - 1)}>Count: {count}</button> */}
    </div>
  );
}
