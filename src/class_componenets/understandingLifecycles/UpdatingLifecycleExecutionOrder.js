import React, { Component } from "react";
import { UpdatingChildComponentLifecycle } from "./UpdatingChildComponentLifecycle";

export class UpdatingLifecycleExecutionOrder extends Component {
  // order of execution 01
  constructor(props) {
    super(props);

    this.state = {
      name: "bretta",
    };

    this.stateHandler = this.stateHandler.bind(this);

    console.log("Updating constructor");
  }

  stateHandler() {
      this.setState({
          name: 'mickey'
      });
  }

  // without sattic keyword this method will be ignored
  static getDerivedStateFromProps(props, state) {
    console.log("Updating getDerivedStateFromProps");
    return null;
  }

  
  componentDidMount() {
    console.log("Updating componentDidMount");
  }

  // order of execution 02
  shouldComponentUpdate() {
      console.log('Updating shouldComponentUpdate');
      return true;
  }

  // order of execution 04
  getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log('Updating getSnapshotBeforeUpdate');
      return null;
  }

  // order of execution 05
  componentDidUpdate() {
      console.log('Updating componentDidUpdate');
  }

  // order of execution 03
  render() {
    console.log("UpdatingLifecycleExecutionOrder render");
    return (
      <div>
        <p>UpdatingLifecycleExecutionOrder</p>
        {/* to trigger execution order of Updating all in sequence we need to change styate or props lets do that using a button click event */}
        <button onClick={this.stateHandler}>Change State</button>
        <UpdatingChildComponentLifecycle />
      </div>
    );
  }
}
