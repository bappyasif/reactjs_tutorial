import React from "react";

// Example of a HOC
// naming convention is name export should be as file name and returning  class Component should also be same as filename but in Pascal Casing

export let withCounterAsComponent = (WrappedComponent, incrementBy=1) => {
  class WithCounterAsComponent extends React.Component {
    // including our Counter implementation
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCounter = () => {
      this.setState((prevState) => {
        return {
          count: prevState.count + incrementBy,
        };
      });
    };

    render() {
        // now it shows up as props passing down from Container component of counters
        // to solve that issue of props not passing to intended component we can simple use spread operators and pass it onto targetted cmponent 
        console.log(this.props.anotherName);
      return (
        <WrappedComponent
          name="bree"
          count={this.state.count}
          incrementCounter={this.incrementCounter}
        //   using spread operator so that rest of props are also passed down to enhanced compoenent passing down from container component
        {...this.props}
        />
      );
    }
  }
  return WithCounterAsComponent;
};
