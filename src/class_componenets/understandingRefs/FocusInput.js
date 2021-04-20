import React, { Component } from 'react'
import { RefsWithClassComponent } from './RefsWithClassComponent'

export class FocusInput extends Component {
    // 1> create ref
    constructor(props) {
        super(props)
    
        this.componentRef = React.createRef();
    }

    clickHandler= () => this.componentRef.current.focusInput();
    
    render() {
        return (
            <div>
                {/* 2> referencing ref */}
                <RefsWithClassComponent ref={this.componentRef} />
                {/* 3> create an event handler and use our child component focusInput method */}
                <button onClick={this.clickHandler}>Focus Input</button>                
            </div>
        )
    }
}
