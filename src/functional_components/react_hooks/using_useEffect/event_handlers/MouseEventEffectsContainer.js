import React, {useState} from 'react'
// import { RunEffectsOnlyOnce } from './RunEffectsOnlyOnce';
import { UsingEffectToCleanup } from './UsingEffectToCleanup';

export function MouseEventEffectsContainer() {
    let [display, setDisplay] = useState(false);
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle Mouse Event Display</button>
            {display && <UsingEffectToCleanup />}
            {/* {display && <RunEffectsOnlyOnce />} */}
        </div>
    )
}
