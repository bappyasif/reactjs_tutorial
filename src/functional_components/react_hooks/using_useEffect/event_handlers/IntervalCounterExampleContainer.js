import React, { useState } from "react";
import { CounterWithIntervalExample } from "./CounterWithIntervalExample";

export function IntervalCounterExampleContainer() {
  let [display, setDisplay] = useState(false);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>
        {display?'':'un'}Pause Ticking {display}
      </button>
      {display && <CounterWithIntervalExample />}
    </div>
  );
}
