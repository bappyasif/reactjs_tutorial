import React, { Component } from "react";

export class MountingLifecycleChildComponent extends Component {
  // order of execution 01
  constructor(props) {
    super(props);

    this.state = {
      name: "bretta",
    };
    console.log("Child constructor");
  }

  // without sattic keyword this method will be ignored
  // order of execution 02
  static getDerivedStateFromProps(props, state) {
    console.log("Child getDerivedStateFromProps");
    return null;
  }

  // order of execution 04
  componentDidMount() {
    console.log("Child componentDidMount");
  }

  // order of execution 03
  render() {
    console.log("MountingLifecycleChildComponent");
    return (
      <div>
        <p>MountingLifecycleChildComponent</p>
      </div>
    );
  }
}
