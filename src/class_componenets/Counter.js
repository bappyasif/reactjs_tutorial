import React, { Component } from 'react'
// use rce for class compoenent snippet, which comes with ES7/React/Redux/React-native extension
export class Counter extends Component {
    // use rconst for constructor and state snippet
    constructor(props) {
        super(props)
    
        this.state = {
            count: 0
        }
    }
    
    // setState() is an aynchronous call, which means in console we will have different values than we see it in DOM unless taken precautions
    // which means state object is called before setState() is completed updating its value
    // to avoid such complications we can pass in a callback function, as a second parametger to setState()

    onIncrement() {
        // directly changing state object value without using setState wont be reflected on DOM
        // this.state.count = this.state.count+1;

        // whenever we need to mutate state object value we'll have to use setState()
        // this.setState({
        //     count: this.state.count + 1
        // });
        // with callback as parameter
        this.setState({
            count: this.state.count + 1
        }, ()=>{
            // asynchronous state object value
            console.log('callback value',this.state.count);
        });
        // synchronous state object value
        console.log(this.state.count);
    }
    onDecrement() {
        // never modifies state object dorectly, rather using setState() method to do so
        // this.setState({
        //     count: this.state.count - 1
        // });
        // console.log(this.state.count);
        // with callback as parameter
        this.setState({
            count: this.state.count - 1
        }, ()=>{
            // asynchronous state object value
            console.log('callback value',this.state.count);
        });
        // synchronous state object value
        console.log(this.state.count);
    }
    render() {
        return (
            <div>
                <h4>Count : {this.state.count}</h4>
                <button onClick={()=>this.onIncrement()}>Increment</button><button onClick={()=>this.onDecrement()}>Decrement</button>
            </div>
        )
    }
}