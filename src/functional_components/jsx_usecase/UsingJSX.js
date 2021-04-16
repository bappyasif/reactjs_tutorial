import React from 'react';

export let UsingJSX = () => {
    // JSX differences
    // class -> className
    // for -> htmlFor
    // camelCase property naming convention
    return(
        <div id='using' className='jsx'>
            <h4>Hello Using JSX Syntax</h4>
        </div>
    )
}

// export let UsingJSX = () => <h4>Hello Using JSX Syntax</h4>