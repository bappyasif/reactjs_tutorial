import React, { Component } from "react";
import { ComponentC } from "./ComponentC";
import { ComponentE } from "./ComponentE";
import { DemoConsumer } from "./DemoConsumer";
import { ContextProvider } from "./demoContext";
import { UserProvider } from "./userContext";

export class ContextContainer extends Component {
  // Context requires these steps
  // 1> create context (e.g. userContext.js)
  // 2> provide context intended value
  // 3> consume context
  render() {
    return (
      <div>
        <h4>Using Context</h4>
        {/* using context we can pass down props down to nested levels in a component tree  */}
        {/* from step 1 we created UserProvider and UserConsumer */}
        {/* Provider (e.g. UserProvider) is responsible for passing down value down to nested component trees */}
        {/* by using 'value' property from UserProvider we will pass down value to component trees, which is step 2 to setup a Context */}
        <UserProvider value="Gillian">
          {/* this 'value' will be passed onto component C and will be available to any component C is a root element of */}
          <ComponentC />
        </UserProvider>
        {/* by using Context API's default value we can simply use default value from create context and simply pass it on and context consumer will still have acces to that value without having to pass down specific value */}
        {/* default value will be used when there is no matching provider value enclosing component */}
        <ComponentE />
        {/* <ComponentC /> */}

        {/* Using multiple context values */}
        {/* multiple context only works using context provider as enclosing tag around consuming component */}
        <ContextProvider value="sweetheart">
          <UserProvider value="allison">
            <DemoConsumer />
          </UserProvider>
        </ContextProvider>
      </div>
    );
  }
}
