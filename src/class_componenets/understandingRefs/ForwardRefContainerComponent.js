import React, { Component } from 'react'
import { ForwardRefInputComponent } from './ForwardRefInputComponent'

export class ForwardRefContainerComponent extends Component {
    // will be forwarding refs to child component instead
    constructor(props) {
        super(props)

        // 1> create ref
        this.fwdRef = React.createRef();
    }
    
    // using ref container component will have access to that node element using .current and focus() will focus into that element
    clickHandler = () => this.fwdRef.current.focus();

    render() {
        return (
            <div>
                {/* 2> attach ref */}
                <ForwardRefInputComponent ref={this.fwdRef} />
                {/* 3> from child component we'll be ref using React.forwardRef method */}
                <button onClick={this.clickHandler}>Click To Focus Input</button>
            </div>
        )
    }
}
