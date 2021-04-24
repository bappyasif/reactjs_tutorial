// we'll use useContext for simplicity of context consumption
import React, { useContext } from "react";

// importing context to use
import { CountContext } from "./ContextContainer";

export function ComponentA() {
  // lets get values from context provider using useContext hook so that we can simply render it in JSX without have to use Context Consumer notations
  let countValueFromContext = useContext(CountContext);
  return (
    <div>
      <p>Component A</p>
      <fieldset>
        <h6>Context:A:Count:{countValueFromContext.countState}</h6>
        <button onClick={() => countValueFromContext.countDispatch("increment")}>
          increment count
        </button>
        <button onClick={() => countValueFromContext.countDispatch("decrement")}>
          decrement count
        </button>
        <button onClick={() => countValueFromContext.countDispatch("reset")}>
          reset count
        </button>
      </fieldset>
    </div>
  );
}
