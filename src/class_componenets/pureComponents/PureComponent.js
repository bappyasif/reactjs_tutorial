import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
    render() {
        console.log('****Pure Component****');
        return (
            <div>
                <h4>Pure Component <span>{this.props.name}</span></h4>
            </div>
        )
    }
}
