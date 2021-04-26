import React, {useState, useEffect} from 'react'
import { useCreateDocTitle } from './example_hooks/useCreateDocTitle';

export function DocTitleTwo() {
    let [count, setCount] = useState(0);
    // without using custom hook
    // useEffect(()=>document.title=count, [count])

    // with using cutom hook
    useCreateDocTitle(count);
    return (
        <div>
            <button onClick={() => setCount(count+1)}>Count : {count}</button>
        </div>
    )
}
