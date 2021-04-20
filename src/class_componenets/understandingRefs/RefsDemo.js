import React, { Component } from 'react'

export class RefsDemo extends Component {
    // regular way of using Refs in just three steps, create, refer and domponentDidMount / event handler
    constructor(props) {
        super(props)
    
        // to use REef we'll have to achieve thatr by creating a Ref in constructor, and then referencing it in render elkement along with a ev ent handler
        this.inputRef = React.createRef();

        this.clickHandler = this.clickHandler.bind(this);
    }

    componentDidMount() {
        // on page load input element will have a focus 
        this.inputRef.current.focus();
        console.log(this.inputRef);
    }

    // we're accessong 'value' property from input element using Refs.current.value
    clickHandler = () => alert(this.inputRef.current.value);
    
    render() {
        return (
            <div>
                <label>do query</label>
                <input type='text' ref={this.inputRef} />
                <button onClick={this.clickHandler}>click here</button>
            </div>
        )
    }
}
