import React from 'react'
import reactDom from 'react-dom'
// by using React.renderPortal method we can render our compoennt into that  instead of 'root' node

export function PortalDemo() {
    // using createPortal() from 'react-dom' we can render our components into our desired node in index.html other than 'root' node 
    return reactDom.createPortal(
        // first parameter, can be of any type of element or component that rect can render
        <div>
            <h4>Portals Demo</h4>
        </div>,
        // second parameter is our intended portal node reference to render
        document.querySelector('#portal-root')
    );

    // return (
    //     <div>
    //         <h4>Portals Demo</h4>
    //     </div>
    // )
}
