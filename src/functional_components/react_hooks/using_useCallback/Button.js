import React, { memo } from 'react'

function Button({clickHandler, children}) {
    console.log('rendering button for - ', children);
    return (
        <div>
            <p>Using Button onClick method from container component</p>
            <button onClick={clickHandler}>{children}</button>
        </div>
    )
}

export default memo(Button);


//  without using memo for rendering optimizations
// export function Button({clickHandler, children}) {
//     console.log('rendering button for - ', children);
//     return (
//         <div>
//             <p>Using Button onClick method from container component</p>
//             <button onClick={clickHandler}>{children}</button>
//         </div>
//     )
// }
