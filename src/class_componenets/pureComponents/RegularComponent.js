import React, { Component } from 'react'

export class RegularComponent extends Component {
    render() {
        console.log('****Regular Component****');
        return (
            <div>
                <p>Regular Component <span>{this.props.name}</span></p>           
            </div>
        )
    }
}
