// context provides a way to pass data through component tree without having to pass props down manually at every level
import { ComponentC } from "./context_levels/ComponentC";
import React from "react";

// to use any context, it has 3 required steps
// 1> create context
// multiple context
let UserContext = React.createContext();
let GreetContext = React.createContext();

export function ContainerForUseContext() {
  return (
    <div>
      <p>Container has Component C</p>
      {/* 2> we need to provide context with a 'value' as a provider for child components to access throughout that component tree */}
      <UserContext.Provider value={"bertie"}>
        <GreetContext.Provider value={'total sweetheart'}>
          <ComponentC />
        </GreetContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

// 3> consume context in intended component, so we'll have to export it so that targetted component can have access to this context to consume value passed down by step2 to component tree
export { UserContext, GreetContext };

// single context
// to use context, there are 3 steps to do so
// 1> create context
// let UserContext = React.createContext();

// export function ContainerForUseContext() {
//   return (
//     <div>
//       <p>Container has Component C</p>
//       {/* 2> we need to provide context with a 'value' as a provider for child components to access throughout that component tree */}
//       <UserContext.Provider value={'bertie'}>
//         <ComponentC />
//       </UserContext.Provider>
//     </div>
//   );
// }
