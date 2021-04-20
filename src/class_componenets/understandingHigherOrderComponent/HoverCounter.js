import React, { Component } from "react";
import { withCounterAsComponent } from "./withCounterAsComponent";

class HoverCounter extends Component {
  render() {
    let {name, count, incrementCounter } = this.props;
    return (
      <div>
        <h4 onMouseOver={incrementCounter}>
          {name} Hovered '{count}' times
        </h4>
      </div>
    );
  }
}

// with passing parameter to HOC function
// export default withCounterAsComponent(HoverCounter, 10);


// without passing any parameter to HOC function
export default withCounterAsComponent(HoverCounter);


/**
 * 
 * 
 class HoverCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCounter = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  render() {
    let { count } = this.state;
    return (
      <div>
        <h4 onMouseOver={this.incrementCounter}>
          {this.props.name} Hovered '{count}' times
        </h4>
      </div>
    );
  }
}
 */