import React from 'react'
import {ComponentE} from './E_Component';

export function ComponentC() {
    return (
        <div>
            <p>Component C contains E</p>
            <ComponentE />
        </div>
    )
}