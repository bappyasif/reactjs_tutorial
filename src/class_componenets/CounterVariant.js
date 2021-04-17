import React, { Component } from 'react'
// use rce for class compoenent snippet, which comes with ES7/React/Redux/React-native extension
export class CounterVariant extends Component {
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
    // whenever we need place something which should be run after state object value si updated place it into callback function  instead to be reflected accordingly

    onIncrement() {
        // for mutiple group calls this will direct state object value will be updated just once, to be otherwise we need use function to target state object value chage using setState()
        // this.setState({
        //     count: this.state.count + 1
        // }, ()=>{
        //     // asynchronous state object value
        //     console.log('callback value',this.state.count);
        // });
        // // synchronous state object value
        // console.log(this.state.count);

        // when we have to update state based on its previous value, p[ass in a function as an argument instead of regular state object
        this.setState((prevState)=>({
            count: prevState.count + 1
        }));
    }
    onIncrementByFive() {
        // these multiple calls will be considered as a single group call and thus wont be increased by 5 rather just 1, for performance
        // to acomplish such tasks we need to use a function call to update setState previous value, rather just targeting object directly
        this.onIncrement();
        this.onIncrement();
        this.onIncrement();
        this.onIncrement();
        this.onIncrement();
    }
    onDecrement() {
        // passing in a function will get us access previous state value and thus will allow us to update new state upon each call
        this.setState((prevState)=>({
            count: prevState.count - 1
        }));
    }
    onDecrementByFive() {
        // due to using of functioncal as setState parameter, this group call will be reflected as expected not just rendered for once 
        this.onDecrement();
        this.onDecrement();
        this.onDecrement();
        this.onDecrement();
        this.onDecrement();
    }
    // seconcd parameter to setState function call is props, so we can access that if we want to
    onIncrementByProp() {
        this.setState(((prevState,props) => ({
            count: prevState.count + props.value
        })));
    }
    render() {
        return (
            <div>
                <h4>Count : {this.state.count}</h4>
                <button onClick={()=>this.onIncrement()}>Increment by value 1</button><button onClick={()=>this.onIncrementByFive()}>Increment By value 5</button>
                <button onClick={()=>this.onDecrement()}>Decrement by value 1</button><button onClick={()=>this.onDecrementByFive()}>Decrement By value 5</button>
                <button onClick={()=>this.onIncrementByProp()}>IncrementByPropsValue</button>
            </div>
        )
    }
}
