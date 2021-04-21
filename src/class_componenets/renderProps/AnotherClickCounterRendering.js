import React, { Component } from 'react'

export class AnotherClickCounterRendering extends Component {
    render() {
        let {count, incrementCount} = this.props;
        return (
            <div>
                <button onClick={incrementCount}>clicked {count} times</button>               
            </div>
        )
    }
}
