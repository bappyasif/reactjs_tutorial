import React, { Component } from 'react'

export class UserComponent extends Component {
    render() {
        return (
            <div>
                {/* <h4>{this.props.name} and {this.props.nameFunc(true)}</h4> */}
                <h4>{this.props.name} and {this.props.rendering(true)}</h4>
            </div>
        )
    }
}
