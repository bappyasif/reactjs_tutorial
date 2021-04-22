import React, { useState } from "react";

export function StateHookWithObject() {
  // using state variable as an object, it can be of any available Javascript available variable types
  let [name, setName] = useState({ firstName: "", lastName: null });
  return (
    <div>
      <fieldset>
        <input
          type="text"
          placeholder="firstName"
          value={name.firstName}
          // set function does not automatically merge and update object, we'll have to do it manulaly unlike class components which it does automatically
          // onChange={(evt) => setName({ firstName: evt.target.value })}

          // we can update and merge state object by using spread oprator and using appropriate state object properties
          // it can be read as, copy everything from 'name' state object and just overwrites firstName property from that
          onChange={(evt) => setName({ ...name, firstName: evt.target.value })}
        />
        <input
          type="text"
          placeholder="lastName"
          value={name.lastName}
          // set function does not automatically merge and update object, we'll have to do it manulaly unlike class components which it does automatically
          // onChange={(evt) => setName({ lastName: evt.target.value })}

          // we can update and merge state object by using spread oprator and using appropriate state object properties
          // it can be read as, copy everything from 'name' state object and just overwrites lastName property from that
          onChange={(evt) => setName({ ...name, lastName: evt.target.value })}
        />
      </fieldset>
      <fieldset>
        <h4>Your first name is : {name.firstName}</h4>
        <h4>Your last name is : {name.lastName}</h4>
        {/* only object in focus stays and others removed not merged */}
        <p>{JSON.stringify(name)}</p>
      </fieldset>
    </div>
  );
}

/**
 * 
 * 
 export function HookCounterWithObject() {
    // using state variable as an object
    let [count, setCount] = useState({count:0, setCount: ()=>count+1});
    return (
        <div>
            <p>Count : {count}</p>
            <button>Increment</button>
            <button>Decrement</button>
            <button>Reset</button>
        </div>
    )
}
 */
