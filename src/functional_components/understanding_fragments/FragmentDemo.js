import React from 'react'
import { TableFragment } from './TableFragment'

export function FragmentDemo() {
    // fragment will treat this node as separated from parent div and show as another node not nested within that
    return (
        <React.Fragment>
            <h4>Fragment Demo</h4>
            <p>This Describes Fragment Demo</p>
            <br />
            <p>Table Fragment</p>
            <p>Collumns Fragment</p>
            <TableFragment />
        </React.Fragment>
    )
}
