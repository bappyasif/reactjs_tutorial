import React from 'react'

// using rfce for functional componenet snippet
export function FunctionClick() {
    function clickHandler(evt) {
        console.log(evt.target, 'button clicked');
    }
    return (
        <div>
            {/* click hanlder implemented within functional compoennt */}
            <button onClick={clickHandler}>Click Here</button>
            {/* never use () for event handling function, then it becomes a function call than a reference to it */}
            {/* <button onClick={clickHandler()}>Click Here</button> */}
        </div>
    )
}
