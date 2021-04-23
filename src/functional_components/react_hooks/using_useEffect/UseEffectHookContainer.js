import React, { Component } from 'react'
import { ConditionalUseEffectExample } from './ConditionalUseEffectExample'
import { CounterExample } from './CounterExample'
import { CounterWithIntervalExample } from '../using_useEffect/event_handlers/CounterWithIntervalExample'
import { IntervalCounterExampleContainer } from '../using_useEffect/event_handlers/IntervalCounterExampleContainer'
import { MouseEventEffectsContainer } from '../using_useEffect/event_handlers/MouseEventEffectsContainer'
import { RunEffectsOnlyOnce } from './RunEffectsOnlyOnce'
import { UsingEffectToCleanup } from './event_handlers/UsingEffectToCleanup'
import { FetchingData } from './data_fetching/FetchingData'

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
                {/* mimicking componentDidMount, also causes memory leaks unless used cleanup */}
                <p>Run useEffect only once</p>
                {/* <RunEffectsOnlyOnce /> */}
                <hr />
                {/* mimicking componentWillUnmount */}
                <p>Using useEffect To Cleanup</p>
                {/* <UsingEffectToCleanup /> */}
                <MouseEventEffectsContainer />
                <hr />
                {/* useEffect with incorrect dependecy */}
                <p>useEffect incorrect dependency exmaple</p>
                {/* <CounterWithIntervalExample /> */}
                <IntervalCounterExampleContainer />
                <hr />
                {/* fetching data with useEffect */}
                <p>Fetching Data From API</p>
                <FetchingData />
            </div>
        )
    }
}
