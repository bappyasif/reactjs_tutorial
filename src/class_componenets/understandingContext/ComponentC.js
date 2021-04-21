import React, { Component } from 'react'
import { ComponentE } from './ComponentE'

export class ComponentC extends Component {
    render() {
        return (
            <div>
                <p>component C contains E</p>
                <ComponentE />
            </div>
        )
    }
}
