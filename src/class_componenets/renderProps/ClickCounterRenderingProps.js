import React, { Component } from "react";

export class ClickCounterRenderingProps extends Component {
  render() {
    let { count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>Clicked '{count}' times</button>
      </div>
    );
  }
}

/**
 * 
 * 
 export class ClickCounterRenderingProps extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    incrementCount = () => {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        });
    }
    
    render() {
        let {count} = this.state;
        return (
            <div>
                <button onClick={this.incrementCount}>Clicked '{count}' times</button>
            </div>
        )
    }
}

 */
