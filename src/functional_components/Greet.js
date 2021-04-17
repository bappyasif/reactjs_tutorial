// import React from 'react';

// functional components accept props but no state and recomended to use as simple functions
// choose Functional over Class due to performance
// functional components doesn't have use of 'this' keyword
// it's super useful when usage of state is not required
// mainly responsible for UI
// also know as stateless components/presentational componennts
// but using 'hooks' we can have accessibility of 'state' as we do in class components
// 'lifecycles' are also available with 'Hooks'
// even 'this' binding is also availble with 'Hooks'
// we rather choose to call functional components rather than 'stateless'
// name export, without destructing
// export let Greet = (props) => {
//     console.log(props);
//     // without using {} means it's just any other string
//     return <h4>Hello {props.name}, and is a {props.aka}</h4>;
// }

// name export, with destructing in arguments
// export let Greet = ({name, aka}) => {
//     console.log(name, aka);
//     // without using {} means it's just any other string
//     return <h4>Hello {name}, and is a {aka}</h4>;
// }

// name export, with destructing in function body itself
export let Greet = (props) => {
    let {name, aka} = props;
    console.log(name, aka);
    // without using {} means it's just any other string
    return <h4>Hello {name}, and is a {aka}</h4>;
}

// as they these functional statelss componennt we can use arrow functions
// export function Greet(props) {
//     return <h4>Hello {props.name}</h4>
//     // return <h4>Hello Gillian</h4>
// }

// default export can be imported with whatever name we desire
