import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             text: 'Awaiting Click'
        }

        // binding click handler within constructor method before using it in render method
        // as it happens just once, thus more performance favored
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        this.setState({
            text: 'Button Clicked'
        });
        console.log(this);
    }

    // using arrow function as class property for evenbt handler method, which will be used in render method
    handlingClick = () => {
        this.setState({
            text: 'Button Clicked'
        });
        console.log(this);
    }
    
    render() {
        return (
            <div>
                <p>{this.state.text}</p>
                {/* 1> event binding using 'bind' but could impact performance for large or nested compoenents as it's / 'this' binding, rendered each time DOM repaints, mostly avoided dye to its performance high cost measures */}
                {/* <button onClick={this.clickHandler.bind(this)}>Event Binding, Click Here</button> */}

                {/* 2> using arrow function, and calling that eventHandler and returning value and has some performance issues for larger components, even though its very simpler to use unless there is no nesting involved this is quite useful */}
                {/* <button onClick={() => this.clickHandler()}>Event Binding, Click Here</button> */}

                {/* 3> after binding 'this' within constructor, just referencing would do and recommended method by React */}
                {/* <button onClick={this.clickHandler}>Event Binding, Click Here</button> */}

                {/* 4> using arrow function for defining event handler within class component and thgen use it onClick reference as usual and React also allows this  as an option viable */}
                <button onClick={this.handlingClick}>Event Binding, Click Here</button>
            </div>
        )
    }
}