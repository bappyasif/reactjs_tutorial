import React, { Component } from "react";

export class UsingForm extends Component {
  // to hgave Controlled componenet, we'll have to use state and a event handler such as onchange
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "react",
    };

    this.inputHandler = this.inputHandler.bind(this);
    this.textareaHandler = this.textareaHandler.bind(this);
    this.selectHandler = this.selectHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  inputHandler(evt) {
    this.setState({
      username: evt.target.value,
    });
  }

  textareaHandler(evt) {
    this.setState({
      comments: evt.target.value,
    });
  }

  selectHandler(evt) {
    this.setState({
      topic: evt.target.value,
    });
  }

  submitHandler(evt) {
    evt.preventDefault();
    alert(
      `${this.state.username}, ${this.state.comments}, ${this.state.topic}`
    );
  }

  render() {
    let { username, comments, topic } = this.state;
    return (
      <div>
        <h2>Form Component</h2>
        {/* regular component not a controlled component */}
        {/* <form>
            <label>username</label>
            <input />
        </form> */}

        {/* controlled component */}
        {/* 1> create html for each */}
        {/* 2> create a event handler */}
        {/* 3> use state and setState to access and render on DOM */}
        <form onSubmit={this.submitHandler}>
          <div>
            <label>username</label>
            <input
              type="text"
              // with this 'value' we are showing it on DOM after setState does it state update using onChange method
              //   value={this.state.username}
              value={username}
              // onChange={(evt) => this.inputHandler(evt)}
              onChange={this.inputHandler}
            />
          </div>

          {/* teaxtarea component */}
          <div>
            <label>comments</label>
            <textarea
              //   value={this.state.comments}
              value={comments}
              onChange={this.textareaHandler}
            />
          </div>

          {/* select tag */}
          <div>
            <label>Topics</label>
            <select
              /*value={this.state.topic}*/ 
              value={topic}
              onChange={this.selectHandler}
            >
              <option value="react">React</option>
              <option value="redux">React-Redux</option>
              <option value="angular">Angular</option>
              <option value="vue">Vue</option>
            </select>
          </div>
          <button type="submit">submit</button>
          {/* we could also use same experience with simply button element and onClick handler */}
        </form>
      </div>
    );
  }
}
