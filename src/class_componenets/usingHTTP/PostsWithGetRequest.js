import React, { Component } from "react";
import axios from "axios";

export class PostsWithGetRequest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMsg: "",
    };
  }

  // it runs once in lifecycle methods and perfect place to nmake HTTP requests which causes side effects
  componentDidMount() {
    // let url = "https://jsonplaceholder.typicode.com/posts1234";
    let url = "https://jsonplaceholder.typicode.com/posts";
    // invoking axios get method
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        // updating state property value
        this.setState({ posts: res.data });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ errorMsg: 'somethings wrong' });
      });
  }

  render() {
    let { posts, errorMsg } = this.state;
    let postsLogic = posts.map((post, idx) => idx < 4 ? <p key={post.id}>{post.title}</p> : false);
    // console.log(postsLogic);
    return (
      <div>
        <p>showing posts using http get request</p>
        {/* {posts.length
          ? posts.map((post) => <p key={post.id}>{post.title}</p>)
          : null} */}
          {posts.length
          ? postsLogic
          : null}
        {errorMsg ? <p>{errorMsg}</p> : null}
      </div>
    );
  }
}
