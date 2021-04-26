import React, { useState } from "react";
import { useCounter } from "./example_hooks/useCounter";

export function CounterOne() {
  // using custom hook useCounter
  // without passing any initial count state value
  // let [count, incrementCount, decrementCount, reset] = useCounter();
  // with passing initial count state value
  let [count, incrementCount, decrementCount, reset] = useCounter(5);

  // moved repeatable logic into a custom hook
  // let [count, setCount] = useState(0);

  // let incrementCount = () => setCount(count+1);
  // let decrementCount = () => setCount(count-1);
  // let reset = () => setCount(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={incrementCount}>Increment Count</button>
      <button onClick={decrementCount}>Decrement Count</button>
      <button onClick={reset}>Reset Count</button>
    </div>
  );
}
