// we'll use useContext for simplicity of context consumption
import React, { useContext } from "react";
// importing context to use
import { CountContext } from "./ContextContainer";

export function ComponentD() {
  // lets get values from context provider using useContext hook so that we can simply render it in JSX without have to use Context Consumer notations
  let countValueFromContext = useContext(CountContext);
  return (
    <div>
      <p>Component D</p>
      <fieldset>
      <h6>Context:D:Count:{countValueFromContext.countState}</h6>
      <button
          onClick={() =>
            countValueFromContext.countDispatch({ type: "increment", value: 1 })
          }
        >
          increment count by 1
        </button>
        <button
          onClick={() =>
            countValueFromContext.countDispatch({ type: "increment", value: 5 })
          }
        >
          increment count by 5
        </button>
        <button
          onClick={() =>
            countValueFromContext.countDispatch({ type: "decrement", value: 1 })
          }
        >
          decrement count by 1
        </button>
        <button
          onClick={() =>
            countValueFromContext.countDispatch({ type: "decrement", value: 5 })
          }
        >
          decrement count by 5
        </button>
        <button
          onClick={() => countValueFromContext.countDispatch({ type: "reset" })}
        >
          reset count
        </button>
      </fieldset>
    </div>
  );
}
