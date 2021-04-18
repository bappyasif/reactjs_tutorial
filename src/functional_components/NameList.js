import React from "react";
import { PersonComponent } from "./PersonComponent";

export function NameList() {
  let names = ["brittney", "mickey", "loren", "lexi"];
  let nameList = names.map((name, id) => <h4 key={id}>{name}</h4>);
  let persons = [
    {
      id: 11,
      name: "bretta",
      age: 22,
      skill: "React",
    },
    {
      id: 22,
      name: "mickey",
      age: 23,
      skill: "Angular",
    },
    {
      id: 33,
      name: "loren",
      age: 24,
      skill: "Vue",
    },
    {
      id: 44,
      name: "lexi",
      age: 25,
      skill: "RubyOnRails",
    },
  ];
  let listPerson = persons.map((person) => (
    <h2 key={person.name}>
      {person.name}, of age: {person.age}, has skill of: {person.skill}
    </h2>

    // <div>
    //   <h2>{person.name}</h2>
    //   <h4>{person.age}</h4>
    //   <h4>{person.skill}</h4>
    // </div>
  ));

  // each person is generating their individual rendering text without have to knowing what s goes in it, thus separation of concerns
  let personsList = persons.map((person) => (
    //   'key' prop is reserved, so if we need to pass it into other child compoennets we'll have to pass it with a different props name other than 'key'
    <PersonComponent key={person.id} person={person} />
  ));

  return (
    <div>
      {/* using array map method */}
      {names.map((name, id) => (
        <h4 key={id}>{name}</h4>
      ))}

      {/* rendering using element variable */}
      {nameList}
      {listPerson}

      {/* recommended to use component for complicated Logic separately */}
      {/* now rendering componenet is just rendering each person where as Person component generating what to be rendered as Person text */}
      {personsList}

      {/* 'key' helps React to generate list much more effeciently and accurately on DOM */}
      {/* consider situation when new items are added on top, without 'key' React DOM would have re render all of them whereas it could keep previous list intact and insert new addition at top */}
      {/* React uses 'key' to identify list items, whenever a new item is added it just added new addition at top and keep rest as it is without have to rerendering  */}
      {/* thus having 'key' React DOM runs more effeciently than without it */}
      {/* 'key' needs to be uniques, having a duplicate would be resulted in error or warning  */}
      
      {/* precaution about using 'index' of any array as key for list items, when either of these conditions fails we should refrain from using it in list as key */}
      {/* 1> lsit item do not have their own unique ID */}
      {/* 2> list is a static list and will not change */}
      {/* 3> lsit will never be reordered or filtered */}



      {/* brute force, crude way */}
      {/* <div>{names[0]}</div>
            <div>{names[1]}</div>
            <div>{names[2]}</div>
            <div>{names[3]}</div> */}
    </div>
  );
}
