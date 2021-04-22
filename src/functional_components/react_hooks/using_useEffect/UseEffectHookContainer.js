import React, { Component } from 'react'
import { ConditionalUseEffectExample } from './ConditionalUseEffectExample'
import { CounterExample } from './CounterExample'
import { RunEffectsOnlyOnce } from './RunEffectsOnlyOnce'

export class UseEffectHookContainer extends Component {
    // Why we use useEffect:
    // effect hook lets us perform side effects in functional components without have to write it into a class components and scattering code into different lifecycle methods
    // it's a close replacement for componentDidMount, componentDidUpdate and componentWillUnmount

    render() {
        return (
            <div>
                <h4>Using useEffect</h4>
                <p>Basic usecase of useEffect</p>
                <CounterExample />
                <hr />
                <p>Conditional usecase of useEffect</p>
                <ConditionalUseEffectExample />
                <hr />
                <p>Run useEffect only once</p>
                <RunEffectsOnlyOnce />
            </div>
        )
    }
}
