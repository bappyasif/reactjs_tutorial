import React from 'react'

function MemoComp({name}) {
    console.log('Rendering From Memo Component');
    return (
        <div>
            <p>Memo Component: {name}</p>
        </div>
    )
}

// React.memo is a higher order component, which takes in a component and enhances it to improve performance by ensuring not to re render when shallow comparison returns true
export default React.memo(MemoComp)