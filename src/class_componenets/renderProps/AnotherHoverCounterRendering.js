import React, { Component } from 'react'

export class AnotherHoverCounterRendering extends Component {
    render() {
        let {count, incrementCount} = this.props;
        return (
            <div>
                <h4 onMouseOver={incrementCount}>Hovered {count} times</h4>               
            </div>
        )
    }
}
