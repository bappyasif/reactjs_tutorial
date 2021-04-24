import React, { useContext } from "react";
import { ComponentF } from "./ComponentF";
// importing contexts
import { UserContext, GreetContext } from "../ContainerForUseContext";

// context Hook remains same for usual context creation steps 1 to 3
// it only makes consumption of them much easier and readable, with using useContext hook
export function ComponentE() {
  // we just need to pass in contexts into useContext hook and save them into variables, so that we can use them while rendering JSX in render or return scope
  let user = useContext(UserContext);
  let greet = useContext(GreetContext);

  return (
    <div>
      <p>Consuming contexts from Container</p>
      {user} : {greet}
      
      <p>E contains F Component</p>
      <ComponentF />
    </div>
  );
}
