import React, { memo } from 'react'

function Title() {
    console.log('reading title');
    return (
        <div>
            <h4>title: useCallbak hook</h4>
        </div>
    )
}

export default memo(Title);

// without using HOC Memo for render performance optimizations
// export function Title() {
//     console.log('reading title');
//     return (
//         <div>
//             <h4>title: useCallbak hook</h4>
//         </div>
//     )
// }
