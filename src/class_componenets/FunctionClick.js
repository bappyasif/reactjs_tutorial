import React, { Component } from 'react'

export class FunctionClickClassComponent extends Component {
    clickHandler(evt) {
        console.log(evt.target, 'button clicked');
    }
    render() {
        return (
            <div>
                {/* we can pass it within arrow function providing evt as parameter in this use case */}
                {/* <button onClick={(evt)=>this.clickHandler(evt)}>Click Here!!</button> */}
                
                {/* or we can just simply give function refeence to it and evt argument will be delegated by deafulkt */}
                <button onClick={this.clickHandler}>Click Here!!</button>
            </div>
        )
    }
}