import React, { Component } from "react";

export class HoverCounterRenderingProps extends Component {
  render() {
    let { count, incrementCount } = this.props;
    return (
      <div>
        <h4 onMouseOver={incrementCount}>Hovered '{count}' times</h4>
      </div>
    );
  }
}

/**
 * 
 * 
 export class HoverCounterRenderingProps extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    incrementCount = () => {
        this.setState(prevState => {
            return {
                count: prevState.count+1
            }
        });
    }
    
    render() {
        let {count} = this.state;
        return (
            <div>
                <h4 onMouseOver={this.incrementCount}>Hovered '{count}' times</h4>               
            </div>
        )
    }
}
 */
