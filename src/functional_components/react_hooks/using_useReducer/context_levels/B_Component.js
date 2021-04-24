import React from 'react'
import {ComponentD} from './D_Component';

export function ComponentB() {
    return (
        <div>
            <p>Component B contains D</p>
            <ComponentD />
        </div>
    )
}