import React from 'react';
import logo from "./logo.svg";
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
