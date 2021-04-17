import React from "react";

export function ChildComponent(props) {
  return (
    <div>
      {/* <p>{props.greetHandler()}</p> */}
      <p>{props.greetText}</p>
      
      {/* this works just fine but has constraints in accessing any patameters though */}
      {/* <button onClick={props.greetHandler}>Greet Container</button> */}

      {/* lets use arrow function to overcome that parameter and provinding paramaters from child compoennt to parent compoenent */}
      <button onClick={() => props.handlingGreet('children')}>Greet Container</button>
    </div>
  );
}
