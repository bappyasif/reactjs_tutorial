import React from 'react'

let headingStyle = {
    fontSize: 'x-large',
    color: 'maroon'
}

export function InLineStylingCss() {
    return (
        <div>
            {/* for inline styling we will use 'style' and mention our style object within JS tags properties */}
            <h2 style={headingStyle}>Inline Styling</h2>
        </div>
    );
}
