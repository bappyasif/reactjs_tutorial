import React from 'react';
import logo from "./logo.svg";
import "./App.css";
import {Greet} from './functional_components/Greet';
import {GreetAnother} from './class_componenets/Greet';
import {UsingJSX} from './functional_components/jsx_usecase/UsingJSX';
import {WithoutJSX} from './functional_components/jsx_usecase/WithoutJSX';

class App extends React.Component {
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
        {/* JSX Usecase */}
        <UsingJSX />
        <WithoutJSX />
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
