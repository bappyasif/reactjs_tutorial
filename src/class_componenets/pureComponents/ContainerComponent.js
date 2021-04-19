import React, { Component, PureComponent } from "react";
// import { MemoComp } from "./MemoComp";
import  MemoComp  from "./MemoComp";
import { PureComp } from "./PureComponent";
import { RegularComponent } from "./RegularComponent";

// if we use PureComponent instead of Component we'll see there is no more re rendering after initial rendering
// because PureComponent looks shallow comparison between object reference, and as it points to same object in each interval it does not re render

// Pure Components only works with Class Components for Functional we'll have to use React.Memo

// export class ContainerComp extends Component {
export class ContainerComp extends PureComponent {
  // we want containing component to be state changeable
  constructor(props) {
    super(props);

    this.state = {
      name: "bretta",
    };

    setInterval(() => {
      // when dealing with Pure Components always return a new Object, not just mutate state, other wise Pure Component will not see any difference even there is as it is pointing to same reference not value change
      this.setState({
        name: "mickey",
      });
    }, 2000);
  }

  // Pure Component improves performance over time by reduycing unnecessary DOM re rendering for list of items and as such when there is none required
  // its always a good idea to ensure that all children components are also Pure to avoid any unexpected behavior
  render() {
    console.log("****Container Component****");
    return (
      <div>
        <p>Container Component</p>
        {/* Pure Vs Regular Component */}

        {/* Regular Component does not implement shouldComponentUpdate method, it always returns true by default */}
        {/* as regular component does not implement this shouldComponentUpdate method and also does not implement that shallow check, nad thus will re render each time interval to DOM */}
        <RegularComponent name={this.state.name} />

        {/* Pure Component on other hand implements shouldComponentUpdate with a shallow props and state comparisons */}
        {/* as shallow comparisons returns true as its checking primitive types here and sees no difference and thus does not re render */}
        <PureComp name={this.state.name} />

        {/* shallow comparison */}
        {/* there are two types of shallow comparisons
        Primitive Types: a(SC)b returns true if a and b have same value and type (e.g. 'abcd' (SC) 'abcd' returns true)
        Complex Types: a (SC) b returns true if a and b reference exact same object
        e.g:
        let a = [1,2] || {1,2};
        let b = [1,2] || {1,2};
        let c = a;
        a === b // false, refers to two different object
        a === c // true, refers to same object
         */}

         {/* React.Memo For Functional Component */}
         <MemoComp name={this.state.name} />
      </div>
    );
  }
}
