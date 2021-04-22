import React, { useState } from "react";

export function StateHookWithArray() {
  // using array as initial value for state variable
  let [items, setItem] = useState([]);

  let addItemIntoList = () => {
    // as we have seen with objects that state variable doesnt automatically merges nand updates, we'll have to do it manually using spread operator
    // we're dealing with an array of objects here, we'er simply copying previous values by spread operator and appending a new object at end of it thus not overwriting existing array rather updating it with new value
    setItem([...items, {
        id: items.length,
        value: Math.round(Math.random()*10)
    }]);
  };

  return (
    <div>
      <button onClick={addItemIntoList}>Add Number Into List</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}
