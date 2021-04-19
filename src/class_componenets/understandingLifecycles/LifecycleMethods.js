import React, { Component } from 'react'
import { MountingLifecycle } from './MountingLifecycle'
import { UpdatingLifecycle } from './UpdatingLifecycle'

export class LifecycleMethods extends Component {
    // Lifecycle methods can be categorized into 4 types:

    // 1> Mounting, when an instance of a component is being created and inserted into DOM
    // methods: constructor, static getDerivedStateFromProps, render and componentDidMount

    // 2> Updating, when a component is being re rendered as a result of change to either its props or state
    // methods: static getDerivedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate, and componentDidUpdate

    // 3> Unmounting, when a component is being removed from DOM
    // methods: componentWillUnmount
    // intricacies: 
    // method is invoked immediately before a component is unmounted and destroyed, and runs only once
    // this method is used for clean up, such as, cancelling any network requests, removing event handlers, cancelling any subscription and also invalidating any timers
    // we should not call setState method from this method as it only runs once, it wont be executed once been run


    // 4> Error handling, when there is an error during rendering, in a lifecycle method or in constructor of any child component
    // methods: static getDerivedStateFromError and componentDidCatch
    // intricacies:
    // gets called, when there is an error during rendering, in a lifecylce method or in constructor of any child component

    render() {
        return (
            <div>
                <h4>Lifecycle Methods</h4>
                <MountingLifecycle />
                <br />
                <UpdatingLifecycle />
            </div>
        )
    }
}
