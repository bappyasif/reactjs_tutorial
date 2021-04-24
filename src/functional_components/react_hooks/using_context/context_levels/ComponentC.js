import React from 'react'
import { ComponentE } from './ComponentE'

export function ComponentC() {
    return (
        <div>
            <p>C contains E Component</p>
            <ComponentE />
        </div>
    )
}


