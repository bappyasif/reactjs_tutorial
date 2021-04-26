import React from 'react'
import { CounterOne } from './CounterOne';
import { CounterTwo } from './CounterTwo';
import { DemoCounterOne } from './DemoCounterOne';
import { DemoCounterTwo } from './DemoCounterTwo';
import {DocTitle} from './DocTitle';
import { DocTitleTwo } from './DocTitleTwo';
import { UserForm } from './UserForm';

export function ContainerForCustomHooks() {
    // a custom hook is basically a Javascript function that starts with 'use'
    // a custom hook can also use other hooks if required
    
    return (
        <div>
            <p>an alternative to HOC and Render Props pattern</p>
            <DocTitle />
            <DocTitleTwo />
            {/* as both of these two component are using same code we can create a custom hook that both or others with same requirement can use withouit have to repeating code  */}
            {/* we'll create a custom hook namely useCreateDocumentTitle */}

            {/* another custom hook example */}
            <p>another demo with counter</p>
            <CounterOne />
            <CounterTwo />

            <p>another demo with counter that takes two parameters, initial state and byValue</p>
            <DemoCounterOne />
            <DemoCounterTwo />

            <p>another demo using form</p>
            <UserForm />
        </div>
    )
}
