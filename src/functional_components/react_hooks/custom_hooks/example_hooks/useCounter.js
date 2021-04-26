import React, { useState } from "react";

export function useCounter(initialCount = 0) {
//   let [count, setCount] = useState(0);
let [count, setCount] = useState(initialCount);

  // using user defined values
  let incrementCount = () => setCount(count + initialCount);
  let decrementCount = () => setCount(count - initialCount);
  let reset = () => setCount(initialCount);

  // calculating using default values
  //   let incrementCount = () => setCount(count + 1);
  //   let decrementCount = () => setCount(count - 1);
  //   let reset = () => setCount(0);

  // instead of returning JSX, it should return an array of values so that component that will use this hook can have access to these values and methods to be used
  return [count, incrementCount, decrementCount, reset];
}
