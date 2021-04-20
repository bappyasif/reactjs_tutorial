import React, { Component } from 'react'

export class RefsDemoWithCallback extends Component {
    constructor(props) {
        super(props)
    
        // to use CbRef we'll have to achieve that by creating a Ref and setCbRef in constructor, and then referencing it in render element along with a event handler and componentDidMount method
        // 1> create a ref property and initialize to null
        this.cbRef = null;
        // 2> create a method to set a node element directly to DOM so that element is accessed directly without have to use 'current'
        this.setCbRef = node => this.cbRef = node;
        
        this.clickHandler = this.clickHandler.bind(this);
    }

    // 4> when cbRef is not null this function gets executed and does we reuired it
    componentDidMount() {
        // on page load input element will have a focus 
        // dom node is passed on directly to setCbRef so we dont have to use .current to get access of focus()
        if(this.cbRef) {
            this.cbRef.focus();
        }
        console.log(this.inputRef);
    }

    // we're accessong 'value' property from input element using Refs.current.value
    clickHandler = () => alert(this.inputRef.current.value);
    
    render() {
        return (
            <div>
                <label>do query</label>
                {/* 3> refer to setCbRef which accepts this node as element argument to be passed on to set to cbRef so that step 4 can be taken shape */}
                <input type='text' ref={this.setCbRef} />
                <button onClick={this.clickHandler}>click here</button>
            </div>
        )
    }
}
