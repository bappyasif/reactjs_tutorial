import React, { Component } from 'react'
import { ComponentF } from './ComponentF'
import UserContext from './userContext'

// ComponentE.contextType = UserContext;

export class ComponentE extends Component {
    // we can also use static contextType for accessing context
    static contextType = UserContext;

    // there are limitation of using context using contextType rather than consumer context
    // 1> usable in class components
    // 2> and can be subscribed to a single context only
    render() {
        return (
            <div>
                <p>component E contains F</p>
                <p>also using user context without using consumner</p>
                <span>context:{this.context}</span>
                <ComponentF />
            </div>
        )
    }
}

// we can specefically define context before using it in component
// ComponentE.contextType = UserContext;