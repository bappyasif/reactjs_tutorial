import React, { Component } from "react";
import { withCounterAsComponent } from "./withCounterAsComponent";

class ClickCounter extends Component {
  render() {
    let { name, count, incrementCounter } = this.props;
    
    return (
      <div>
        <button onClick={incrementCounter}>
          {name} clicked '{count}' times
        </button>
        {/* props aew sent to HOC but not to Counter */}
        {this.props.anotherName}
      </div>
    );
  }
}

// with passisng parameter to HOC function
export default withCounterAsComponent(ClickCounter, 10);

// without passing any parameter to HOC function
// export default withCounterAsComponent(ClickCounter);

/**
 * 
 * 
 class ClickCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  countHandler = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.countHandler}>
          {this.props.name} clicked '{this.state.count}' times
        </button>
      </div>
    );
  }
}
 */
