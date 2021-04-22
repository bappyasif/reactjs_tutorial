import React, { Component } from "react";
import { HookCounterBasedOnPreviousValue } from "../using_useState/HookCounterBasedOnPreviousValue";
import { StateHookCounterExample } from "../using_useState/StateHookCounterExample"
import { StateHookWithArray } from "../using_useState/StateHookWithArray";
import { StateHookWithObject } from "../using_useState/StateHookWithObject";

export class UseStateHookContainer extends Component {
  // useState notes:
  // allows us to add state to functional componenets
  // in classes 'state' is always object with useState hook it can be of any data types not just a object
  // useState hook returns an array with two elements, first being current value of state variable, and next is state setter function
  // when new state variable value is dependent on its previous value then we'll have to pass our setter funtion an function to it
  // when dealing with objects and arrays, always have to spread oiur state variable to keep its condition persistent, and then call setter funtion to bring any necessary changes to state variable, otherwise we'll encounter unexpected behavior

  render() {
    return (
      <div>
        <h4>::Examples Of useState Hooks::</h4>
        <br />
        <p>Counter Example</p>
        <StateHookCounterExample />
        <hr />
        {/* Counter with porevious count */}
        <p>Counter With Previous Value</p>
        <HookCounterBasedOnPreviousValue />
        <hr />
        {/* Using an object for state variable */}
        <p>State Variable With Object</p>
        <StateHookWithObject />
        <hr />
        {/* using an array for state variable */}
        <p>State Variable With Array</p>
        <StateHookWithArray />
      </div>
    );
  }
}
