import React, { memo } from 'react'

function Count({text, count}) {
    console.log(text, count)
    return (
        <div>
            <p>Rendering Props From Container</p>
            <div>{text} -- {count}</div>
        </div>
    )
}

export default memo(Count);

// without using memo for optimization in rendering method
// export function Count({text, count}) {
//     console.log(text, count)
//     return (
//         <div>
//             <p>Rendering Props From Container</p>
//             <div>{text} -- {count}</div>
//         </div>
//     )
// }
