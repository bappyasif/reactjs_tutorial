import React from 'react'
import { NotWithUseReducer } from './NotWithUseReducer'
import { WithUseReducerHook } from './WithUseReducerHook'

export function ContainerForDataFetching() {
    // when to use useState vs useReducer hooks
    // scenarios:
    // <> Type of state: if it/they are just primitive values (e.g. number, string) using useState is better, but when dealing with Array or Object it always better to use useReducer hook
    // <> Number of State transitions: if one or two the useState is enough, but when state transitions are too many then using useReducer is far better option
    // <> Related state transitions: useState state transitions are not related or grouped for mutiple state variables, where as useReducer state transitions are grouped together and related
    // <> Business logic: useState hook 0offers no business logic, where as useReducer offers complex / business logic which we can get hold of by using dispatch method
    // <> Local vs global: when delaing state variables locally useState is better option, but when dealing with Global aspect of any state variable within component tree, using useReducer is far better option along with context hook
    return (
        <div>
            <p>data fetching using useState and useEffect</p>
            <NotWithUseReducer />
            <p>data fetching using useReducer and useEffect</p>
            <WithUseReducerHook />
        </div>
    )
}
