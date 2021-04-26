import React, {useState, useEffect} from 'react'
import { useCreateDocTitle } from './example_hooks/useCreateDocTitle';

export function DocTitle() {
    let [count, setCount] = useState(0);
    // withoutr using custom hook
    // useEffect(()=>{
    //     document.title = 'count: '+count;
    // }, [count])

    // with using cutom hook
    useCreateDocTitle(count);
    
    return (
        <div>
            <p>updating document title and counter increment demo</p>
            <button onClick={() => setCount(count + 1)}>Count :: {count}</button>
        </div>
    )
}
