import React from 'react';
// import logo from "./logo.svg";
import "./App.css";
import {Greet} from './functional_components/Greet';
import {GreetAnother} from './class_componenets/Greet';
import {UsingJSX} from './functional_components/jsx_usecase/UsingJSX';
import {WithoutJSX} from './functional_components/jsx_usecase/WithoutJSX';
import {Message} from  './class_componenets/Message';
import {Counter} from './class_componenets/Counter';
import {CounterVariant} from './class_componenets/CounterVariant';
import {FunctionClick} from './functional_components/handling_events/FunctionClick';
import {FunctionClickClassComponent} from './class_componenets/FunctionClick';
import {EventBind} from './class_componenets/EventBind';
import {ContainerComponent} from  './class_componenets/ContainerComponent';
import { UserGreeting } from './class_componenets/UserGreeting';
import { NameList } from './functional_components/NameList';
import { StyleSheet } from './functional_components/using_css/StyleSheet';
import { UsingForm } from './class_componenets/UsingForm';
import { LifecycleMethods } from './class_componenets/understandingLifecycles/LifecycleMethods';
import { FragmentDemo } from './functional_components/understanding_fragments/FragmentDemo';
// import { PureComp } from './class_componenets/pureComponents/PureComponent';
import {ContainerComp} from './class_componenets/pureComponents/ContainerComponent';
import { RefsDemo } from './class_componenets/understandingRefs/RefsDemo';
import { RefsDemoWithCallback } from './class_componenets/understandingRefs/RefsDemoWithCallback';
// import { RefsWithClassComponent } from './class_componenets/understandingRefs/RefsWithClassComponent';
import { FocusInput } from './class_componenets/understandingRefs/FocusInput';
import { ForwardRefContainerComponent } from './class_componenets/understandingRefs/ForwardRefContainerComponent';
import { PortalDemo } from './functional_components/PortalDemo';
import { HandlingError } from './class_componenets/understanding_errorBounaries/HandlingError';
// import { ClickCounter } from './class_componenets/understandingHigherOrderComponent/ClickCounter';
// import { HoverCounter } from './class_componenets/understandingHigherOrderComponent/HoverCounter';
import { HigherOrderComponentContainer } from './class_componenets/understandingHigherOrderComponent/HigherOrderComponentContainer';
import { RenderPropsContainerComponent } from './class_componenets/renderProps/RenderPropsContainerComponent';
import { ContextContainer } from './class_componenets/understandingContext/ContextContainer';
import { HttpRequestContainerComponent } from './class_componenets/usingHTTP/HttpRequestContainerComponent';
// import { StateHookCounterExample } from './functional_components/react_hooks/StateHookCounterExample';
// import { HookCounterBasedOnPreviousValue } from './functional_components/react_hooks/using_useState/HookCounterBasedOnPreviousValue';
// import { StateHookWithObject } from './functional_components/react_hooks/StateHookWithObject';
// import { StateHookWithArray } from './functional_components/react_hooks/StateHookWithArray';
import { UseStateHookContainer } from './functional_components/react_hooks/using_useState/UseStateHookContainer';
import { UseEffectHookContainer } from './functional_components/react_hooks/using_useEffect/UseEffectHookContainer';
import { ContainerForUseContext } from './functional_components/react_hooks/using_context/ContainerForUseContext';
import { ContainerForUseReducer } from './functional_components/react_hooks/using_useReducer/ContainerForUseReducer';
import { CallbackHookExampleContainer } from './functional_components/react_hooks/using_useCallback/CallbackHookExampleContainer';
import { ContainerForUseMemo } from './functional_components/react_hooks/using_useMemo/ContainerForUseMemo';
import { ContainerForUseRef } from './functional_components/react_hooks/using_useRef/ContainerForUseRef';
import { ContainerForCustomHooks } from './functional_components/react_hooks/custom_hooks/ContainerForCustomHooks';

class App extends React.Component {
  // Props vs State
  // props get passed to component, where as state is managed within component
  // props can be thought of as a function parameter, whereas state can be thought of as variable in function body
  // props are immuatble, where as state can be changed from components
  // props are accessed by using 'props' in functional components and 'this.props' in class components, where as 'useState' hook is used to access 'state' in Functional components and 'this.state' for class componenets
  render() {
    return (
      // knowing JSX, Javascript XML, extension to Javascript language syntax
      // allows writiing HTML alike code for elements and components
      // JSX tags have a tag name, attributes, and children
      // JSX is not a necessary to write React applications but using JSX makes code much more simpler and elegant
      // JSX ultimately transpiles to puyre Javascript which is understood by browsers

      <div className="App">
        <Greet name='bertie' aka='total sweetheart' />
        <GreetAnother name='Micky'>
          <p>Child Component</p>
        </GreetAnother>
        <hr />
        {/* JSX Usecase */}
        <UsingJSX />
        <WithoutJSX />
        <hr />
        {/* Using state */}
        {/* <Message name='cyndi' aka='baebee' /> */}
        <Message />
        <Counter />
        <CounterVariant value={2} />
        <hr />
        {/* Handling Events */}
        <FunctionClick />
        <FunctionClickClassComponent />
        <hr />
        {/* Event Binding */}
        <EventBind />
        <hr />
        {/* passing methods as props */}
        <ContainerComponent />
        <hr />
        {/* conditional rendering */}
        <UserGreeting />
        <hr />
        {/* list rendering */}
        <NameList />
        <hr />
        {/* styling and css basics */}
        <StyleSheet primary={true} />
        <hr />
        {/* basics of form handling */}
        <UsingForm />
        <hr />
        {/* understanding lifecycle */}
        <LifecycleMethods />
        <hr />
        {/* understanding Fragments */}
        <FragmentDemo />
        <hr />
        {/* Pure Component */}
        {/* <PureComp /> */}
        <ContainerComp />
        <hr />
        {/* using Refs */}
        <RefsDemo />
        <RefsDemoWithCallback />
        <br />
        {/* <RefsWithClassComponent /> */}
        <FocusInput />
        <br />
        <ForwardRefContainerComponent />
        <hr />
        {/* using portals */}
        <PortalDemo />
        <hr />
        {/* App Error handling phase */}
        <HandlingError />
        <hr />
        {/* using higher order component */}
        {/* we can see both of these compoenent are using repeating code for coiunter we counl d lift that count state to container and then pass it as props to child components but if we had a nested stuctures than it would be errorneous so we need to have  use of Higher Order Components so that we can dispatch rather than pass it along children */}
        {/* <ClickCounter />
        <HoverCounter /> */}
        <HigherOrderComponentContainer />
        <hr />
        {/* Rendering Props */}
        {/* <ClickCounterRenderingProps />
        <HoverCounterRenderingProps />
        <UserComponent /> */}
        <RenderPropsContainerComponent />
        <hr />
        {/* Understanding Context, Context API */}
        {/* Context provides a way to pass data through component tree without having to pass props down manually at every level */}
        <ContextContainer />
        <hr />
        {/* Http Requests In React */}
        <HttpRequestContainerComponent />
        <hr />
        <br />

        {/* React Hooks */}
        {/* hooks which allows us to use React features without have to write a class component, such as state of an compoennt, hooks dont work inside class components though, only used in functional components */}
        {/* Reasons for using Hooks */}
        {/* 1> we don't have to worry about 'this' keyword as we wont be nusing class component while using hooks, whichj means no more event handler binding is required as well, class components don't minify quite well, and makes hot reloading often unreliable */}
        {/* 2> class components had no specific way to reuse stateful component logic, HOC and Props rendering patterns is used to address that problem, which makes code harder follow and component restructuring to make it work, so there is a need to share stateful logic in a better way than it is in class components currently */}
        {/* 3> components for datat fetching and evenbt subscribing related code is not organized in one place, different lifecycle methods are responsible for different aspect of them, fetch works in componentDidMount and componentDidUpdate, and event listeners are to componentDidMount and componentWillUnmount, as stateful logic can not break components into smaller ones, hooks helps us to code it in a different related components than in scattered lifecycles within class componenst  */}
        {/* 4> hooks dont replace our existing knowledge of React concepts, instead, hooks provide a more direct API to React concept we already know, to makes our code much more readble in complex scenarios more easily and confidently */}
        
        {/* using useState */}
        <UseStateHookContainer />
        <hr/>
        {/* Using useEffect */}
        <UseEffectHookContainer />
        <hr />
        {/* using context with hooks */}
        <p>using context with hooks</p>
        <ContainerForUseContext />
        <hr />
        {/* using useReducer */}
        <p>using useReducer</p>
        <ContainerForUseReducer />
        <hr />
        
        {/* useCallback hook */}
        <p>using useCallback for optimization</p>
        <CallbackHookExampleContainer />
        <hr />

        {/* useMemo hook */}
        <p>using useMemo for optimization</p>
        <ContainerForUseMemo />
        <hr />

        {/* useRef hook */}
        <p>using useRef for Accessing</p>
        <ContainerForUseRef />
        <hr />

        {/* custom hooks */}
        <p>Custom Hooks</p>
        <ContainerForCustomHooks />
      </div>
    );
  }
}

export default App;

/**
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
 */
