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
