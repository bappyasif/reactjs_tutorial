import React, { Component } from 'react'
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'


// a pattern where a function takes a component as an argument and returns a new component
// e.g. let newComp = higherOrderComp(orignalComp)

export class HigherOrderComponentContainer extends Component {
    render() {
        return (
            <div>
                <ClickCounter anotherName='allison' />
                <HoverCounter />                
            </div>
        )
    }
}
