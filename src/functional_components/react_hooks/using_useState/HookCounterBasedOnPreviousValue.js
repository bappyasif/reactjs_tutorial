import React, {useState} from 'react'

export function HookCounterBasedOnPreviousValue() {
    // counter value changes based on Previous value of count state
    let initialCount = 0;
    let [count, setCount] = useState(initialCount);

    let testIncrementByFive = () => {
        for(let i=0; i<5; i++) {
            // setCount with state value, unreliable outcome
            setCount(count+1);
        }
    }

    // setCount with function argument, reliable outcome
    let countIncrementByFive = () => {
        for(let i=0; i<5; i++) {
            setCount(prevCount => prevCount+1);
        }
    }

    return (
        <div>
            {/* <h4>Counter With Previous Count </h4> */}
            <p>Current Count: {count}</p>
            <button onClick={()=>setCount(count + 1)}>Increment Count</button>
            <button onClick={()=>setCount(count - 1)}>Decrement Count</button>
            <button onClick={()=>setCount(initialCount)}>Reset Count</button>
            <button onClick={testIncrementByFive}>Test Increment By 5</button>
            <button onClick={countIncrementByFive}>Count Increment By 5</button>
            <button onClick={()=>setCount(prevCount=>prevCount+1)}>Reliable Counter Increment Count</button>
            <button onClick={()=>setCount(prevCount=>prevCount+1)}>Reliable Counter Decrement Count</button>
            {/* <button onClick={()=>setCount(prevCount=>prevCount+1)}>Reliable Counter Increment Count:{count}</button>
            <button onClick={()=>setCount(prevCount=>prevCount+1)}>Reliable Counter Decrement Count:{count}</button> */}
        </div>
    )
}
