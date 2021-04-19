import React, { Component } from 'react'
import { MountingLifecycleChildComponent } from './MountingLifecycleChildComponent';

export class MountingLifecycle extends Component {
    // constructor(props) intricacies
    // a special function that will get called whenever a new component is created
    // initialize state and binding event handlers
    // do not cause any side effects such as making HTTP requests
    // always have to use super(props) and directly overwrite this.state

    // getDerivedStateFromProps(props, state) intricacies
    // when state of compoenent depends on changes in props over time, this function is called
    // set state
    // also do not make use of HTTP request alike side effects of any kind

    // render() intricacies
    // only required method by any class component
    // pure function, read props and state and return JSX
    // we should not change state or interact with DOM or make HTTP requests from there
    // if there is any child componenet nested within this class component, the ntheir lifecycle methods are also executed

    // componentDidMount() intricacies
    // invoked immediately after a componenet and all its children components have been rendered to DOM
    // right place to cause side effects, which means interacting with DOM or HTTP requests to load data should go in this method within a class component

    // order of execution 01
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'bretta'
        }
        console.log("Mounting constructor");
    }

    // without sattic keyword this method will be ignored
    // order of execution 02
    static getDerivedStateFromProps(props, state) {
        console.log("Mounting getDerivedStateFromProps");
        return null
    }
    
    // order of execution 04
    componentDidMount() {
        console.log('Mounting componentDidMount');
    }

    // order of execution 03
    render() {
        console.log('MountingLifecycle render');
        return (
            <div>
               <p>MountingLifecycle render</p>
               {/* all child compoenent mounting phases will be exectuted before parent component completes componentDidMount method */}
               <MountingLifecycleChildComponent />
            </div>
        )
    }
}
