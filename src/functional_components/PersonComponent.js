import React from "react";

// With destructuring
export function PersonComponent({ person }) {
  return (
    <h4>
      {person.name}, of age: {person.age}, has skill of: {person.skill}
    </h4>
  );
}

// Without destructuring
// export function PersonComponent(props) {
//   return (
//     <h4>
//       {/* {props.name}, of age: {person.age}, has skill of: {person.skill} */}
//       {props.person.name}, of age: {props.person.age}, has skill of: {props.person.skill}
//     </h4>
//   );
// }
