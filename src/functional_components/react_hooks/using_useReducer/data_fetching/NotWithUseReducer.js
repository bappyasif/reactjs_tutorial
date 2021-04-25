import React, { useState, useEffect } from "react";
import axios from "axios";

export function NotWithUseReducer() {
  // creating state variables for lodaing, error mesg and if successful posts
  let [loading, setLoading] = useState(true);
  let [error, setMsg] = useState("");
  let [post, setPost] = useState({});

  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/posts/1";
    axios
      .get(url)
      .then((res) => {
        console.log(res, res.data);
        setLoading(false);
        setMsg("");
        setPost(res.data);
        console.log(post);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setPost({});
        setMsg("something's wrong!!");
      });
    // passing in an empty array to run just once and mimicking componentDidMount fucntionality
  }, []);

//   let postsRenedering = posts.map((post, idx) =>
//     idx < 4 ? <li key={post.id}>{post.title}</li> : false
//   );
  return (
    <div>
      {/* <ul>{postsRenedering}</ul> */}
      <h4>{loading ? 'loading' : post.title}</h4>
      <h4>{error ? error : ''}</h4>
    </div>
  );
}
