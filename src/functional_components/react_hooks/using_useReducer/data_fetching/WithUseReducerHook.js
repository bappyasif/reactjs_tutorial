// making a fetch request using useReducer and useEffect, it requires 4 steps
// 1> import neecessary hooks and httmp library modules
// 2> define an initial State and a reducer function

import React, { useReducer, useEffect } from "react";
import axios from "axios";

let initState = {
  loading: true,
  error: "",
  // post: {},
  post: []
};

// let reducer = (state, action) => {
//   switch (action.type) {
//     case "FETCH_SUCCESS":
//       return [{
//         loading: false,
//         error: "",
//         post: action.payload,
//       }];
//     case "FETCH_FAILURE":
//       return [{
//         loading: false,
//         error: "",
//         post: action.payload,
//       }];
//     default:
//       return state;
//   }
// };

let reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        error: "",
        post: action.payload,
      };
    case "FETCH_FAILURE":
      return {
        loading: false,
        error: "",
        post: action.payload,
      };
    default:
      return state;
  }
};

export function WithUseReducerHook() {
  // 3> useReducer hook to get new / current state value and dispatch method, by passing in reducer and inittial state into it
  let [currState, dispatch] = useReducer(reducer, initState);
  //   let [anotherState, anotherdispatch] = useReducer(reducer, initState);

  // 4> useEffects hooks will be responsible for making Http request and as such
  useEffect(() => {
    // let url = "https://jsonplaceholder.typicode.com/posts/1";
    let url = "https://jsonplaceholder.typicode.com/posts";
    axios
      .get(url)
      .then((res) => {
        console.log('response',res.data);
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "FETCH_FAILURE" });
      });
  }, []);
    // let renderPosts = currState.post.map((post) => <p key={post.id}>{post.title}</p>);
  // let renderPosts = dispatch.payload.map((post, idx) => idx < 4 ? <p key={post.id}>{post.title}</p> : false);
  // let renderPosts = initState.post.map((post, idx) =>
  //   idx < 4 ? <p key={post.id}>{post.title}</p> : false
  // );
//   let renderPosts = currState.post.map((post, idx) =>
//   idx < 4 ? <p key={post.id}>{post.title}</p> : false
// );

  let renderPosts = Array.from(currState.post).map((post, idx) =>
  idx < 4 ? <p key={post.id}>{post.title}</p> : false
);
  return (
    <div>
      {/* {console.log("initState:",initState.post, "currState:",currState.post, "singlePost:",currState.post[0].title, "typeof:",typeof(currState.post))} */}
      {console.log("initState:",initState.post, "currState:",currState.post, "singlePost:", "typeof:",typeof(currState.post), 'map:', currState.post.hasOwnProperty('map'))}
      <h4>{currState.loading ? "loading" : renderPosts}</h4>
      <h4>{currState.error ? currState.error : ""}</h4>

      {/* <h4>{currState.loading ? 'loading data' : currState.post.title}</h4>
      <h4>{currState.error ? currState.error : ''}</h4> */}

      {/* <h4>{initState.loading ? 'loading' : post}</h4>
      <h4>{initState.error ? initState.error : ''}</h4> */}
    </div>
  );
}
