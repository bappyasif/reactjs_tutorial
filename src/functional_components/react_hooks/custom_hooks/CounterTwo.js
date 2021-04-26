import React, { useState } from "react";
import { useCounter } from "./example_hooks/useCounter";

export function CounterTwo() {
    // using custom hook useCounter
  // without passing any initial count state value
  // let [count, incrementCount, decrementCount, reset] = useCounter();
  // with passing initial count state value, when not passed any by default it will be of value 0
  let [count, incrementCount, decrementCount, reset] = useCounter();

  // repeatable code is now moved to a custom hook so that we can re use code instead of repaeting ourselves
  //   let [count, setCount] = useState(0);

  //   let incrementCount = () => setCount(count + 1);
  //   let decrementCount = () => setCount(count - 1);
  //   let reset = () => setCount(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={incrementCount}>Increment Count</button>
      <button onClick={decrementCount}>Decrement Count</button>
      <button onClick={reset}>Reset Count</button>
    </div>
  );
}
