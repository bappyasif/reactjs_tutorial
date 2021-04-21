import React, { Component } from 'react'

export class DemoComponent extends Component {
    render() {
        let {user, greet} = this.props;
        return (
            <div>
                <p>{greet}, {user}</p>
            </div>
        )
    }
}
