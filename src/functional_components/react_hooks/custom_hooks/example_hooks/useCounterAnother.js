import { useState } from "react";

export function useCounterAnother(initialCount, value) {
  let [count, setCount] = useState(initialCount);
  let incrementCount = () => setCount((prevCount) => prevCount + value);
  let decrementCount = () => setCount((prevCount) => prevCount - value);
  let resetCount = () => setCount(initialCount);
  return [count, incrementCount, decrementCount, resetCount];
}
