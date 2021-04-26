import React from "react";
import { useCounterAnother } from "./example_hooks/useCounterAnother";

export function DemoCounterTwo() {
  let [count, incrementCount, decrementCount, resetCount] = useCounterAnother(
    10,
    10
  );
  return (
    <div>
      <p>Count :: {count}</p>
      <button onClick={incrementCount}>Increment Count</button>
      <button onClick={decrementCount}>Decrement Count</button>
      <button onClick={resetCount}>Reset Count</button>
    </div>
  );
}
