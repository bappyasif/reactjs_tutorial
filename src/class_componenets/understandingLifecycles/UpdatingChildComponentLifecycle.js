import React, { Component } from "react";

export class UpdatingChildComponentLifecycle extends Component {
  // order of execution 01
  constructor(props) {
    super(props);

    this.state = {
      name: "bretta",
    };
    console.log("Updating constructor");
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
    console.log("Updating shouldComponentUpdate");
    return true;
  }

  // order of execution 04
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Updating getSnapshotBeforeUpdate");
  }

  // order of execution 05
  componentDidUpdate() {
    console.log("Updating componentDidUpdate");
  }

  // order of execution 03
  render() {
    return (
      <div>
        <p>UpdatingChildComponentLifecycle</p>
      </div>
    );
  }
}
