import React, { Component } from 'react'
import { UpdatingLifecycleExecutionOrder } from './UpdatingLifecycleExecutionOrder'

export class UpdatingLifecycle extends Component {
    // updating lifecycle methods intricacies

    // static getDerivedStateFromProps(props, state)
    // method is called every time a component is re rendered
    // sets component state
    // we should not cause any side3 effects in this method, such as HTTP requests and as such
    // one of most rarely used method in updating phase

    // shouldComponentUpdate(nextProps, nextState)
    // dictates if component should re render on DOM or not
    // using nextProps/State we can change default behavior, and thus used for Performance Optimization
    // we should not cause any side effects such as HTTP requests, as well in this method

    // render()
    // only required method by class component
    // read props and state and return JSX, it should be a Pure Function
    // we should also should not change any state or interact with DOM or make any HTTP requests fro this method as well

    // getSnapshotBeforeUpdate(prevProps, prevState)
    // called right before changes from virtual DOM are to be reflected upon DOM
    // capture some information from DOM
    // return method will either return null or a value, returned value will be passed on to componentDidUpdate method as 3rd parameter
    // another rarely used lifecycle method in practice

    // componentDidUpdate(prevProps, prevSatate, snapshot)
    // called right after render is finished in re render cycle
    // causes side effects, which means we can decide by comparing any state or props cahnge prior to any re/rendering

    render() {
        return (
            <div>
                <h4>Updating Lifecycle</h4>
                <UpdatingLifecycleExecutionOrder />
            </div>
        )
    }
}
