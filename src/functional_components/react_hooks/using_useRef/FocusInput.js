import React, { useEffect, useRef } from "react";

export function FocusInput() {
  let submitHandler = (evt) => {};
  // to focus an elemnt on page load, we'll have to mimick componentDidMount behavior using useEffect, with an empty dependencyt list
  // and within that useEffect first argument we'll define what we want to do in it, focus an input element on page load

  let inputRef = useRef(null);

  useEffect(() => {
    // focus an input element, using useRef
    // react will send 'current' corresponding ref node to focus
    inputRef.current.focus();
    //  we can do so by taking these 3 steps:
    // 1> import useRef
    // 2> initialize with a value(null) and store it in a variable to used for further use in JSX tag
    // 3.a> attach it to JSX tag, as in input tag with reserved keyword of 'ref'
    // 3.b> finally within useEffect, we simply call focus on our inputRef
  }, []);

  return (
    <div>
      <p>Accessing DOM nodes directly</p>
      <fieldset>
        <form onSubmit={submitHandler}>
          <fieldset>
            <label>username:</label>
            <input ref={inputRef} />
          </fieldset>
          <fieldset>
            <label>password:</label>
            <input />
          </fieldset>
          <button type="submit">submit</button>
        </form>
      </fieldset>
    </div>
  );
}
