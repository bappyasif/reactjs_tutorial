import React, { Component } from "react";
import axios from "axios";

export class PostForm extends Component {
  // using state lets wire them within state propeties
  constructor(props) {
    super(props);

    this.state = {
      userId: null,
      title: null,
      body: null,
    };

    this.changehandler = this.changehandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changehandler = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  submitHandler(evt) {
    evt.preventDefault();
    console.log(this.state);
    let url = "https://jsonplaceholder.typicode.com/posts";
    let put_delete = "https://jsonplaceholder.typicode.com/posts/1";
    axios
      .post(url, this.state)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    // using Put
    axios
      .put(put_delete, this.state)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    // using delete
    axios
      .delete(put_delete, this.state)
      .then((res) => console.log(res))
      .catch((err) => console.llog(err));
  }

  render() {
    let { userId, title, body } = this.state;
    return (
      <div>
        <h4>Post Form, uses Post Put and Delete methods</h4>
        <form onSubmit={this.submitHandler}>
          <fieldset>
            <label>userID:</label>
            <input
              type="number"
              name="userId"
              value={userId}
              onChange={this.changehandler}
            />
          </fieldset>
          <fieldset>
            <label>title:</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.changehandler}
            />
          </fieldset>
          <fieldset>
            <label>body:</label>
            <input
              type="text"
              name="body"
              value={body}
              onChange={this.changehandler}
            />
          </fieldset>
          <fieldset>
            <button type="submit">submit</button>
          </fieldset>
        </form>
      </div>
    );
  }
}
