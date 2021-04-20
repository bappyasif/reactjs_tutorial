import React, { Component } from 'react'

export class RefsWithClassComponent extends Component {
    // refs can not be attached with functional components, only with class components and Regular/callback Refs
    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef();
    }

    // we will use class method to do element interaction in this case 'focus' without have to using componentDidMount methoid
    // this method will be triggered from container component rather than this class compoenjentt and we will acheive it using refs
    focusInput() {
        this.inputRef.current.focus()
    }
    
    render() {
        return (
            <div>
                <label>using RefsWithClassComponent</label>
                <input type='text' ref={this.inputRef} />
            </div>
        )
    }
}
