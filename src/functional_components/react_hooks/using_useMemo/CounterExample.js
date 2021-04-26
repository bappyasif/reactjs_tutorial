import React, { useState, useMemo } from "react";

export function CounterExample() {
  let [count, setCount] = useState(0);
  let [count2, setCount2] = useState(0);

  let incrementOne = () => setCount(count + 1);

  let incrementTwo = () => setCount2(count2 + 1);

  // let isEven = () => count % 2 === 0;
  // lets induce longer time
  // let isEven = () => {
  //     let i = 0;
  //     while(i < 200000000) {
  //         i++;
  //     }
  //     return count % 2 === 0;
  // }

  // to use useMemo hook, we need to import it from React and include element which needs optimization by passing it into hooks first argument along dependecy list provided in it to render only when there is a change in dependecy list state variable otherwise use cached value from earlier or none
  let isEven = useMemo(() => {
    let i = 0;
    while (i < 200000000) {
      i++;
    }
    return count % 2 === 0;
  }, [count]);

  return (
    <div>
      <button onClick={incrementOne}>
        {/* Counter One: {count} is <span>{isEven() ? "even" : "odd"}</span> */}
        {/* isEven is no longer a function it holds a value from memoization */}
        Counter One: {count} is <span>{isEven ? "even" : "odd"}</span>
      </button>

      {/* when there is a change of state variable whole component re render which also includes isEven() function, causing performance optimization bottleneck to take care of */}

      {/* so, we need a way to tell React to stop rerendering when there is no change in state variable for other unrelated change causing rerender */}
      {/* this is where useMemo hook comes into play, it will only recompute from cached memoization when there is a change in dependency list */}

      <button onClick={incrementTwo}>Counter Two: {count2}</button>

      {/* useMemo and useCallbackn they both are similar in usage in component, but they differ how they store or instantiate value for any element regarding optimization overhead */}
      {/* useCallback caches result by (instantiating) provided function instance, where as useMemo caches its stored value or result by invoking provided function */}
    </div>
  );
}
