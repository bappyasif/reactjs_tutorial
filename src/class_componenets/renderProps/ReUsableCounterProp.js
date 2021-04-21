import React, { Component } from 'react'

export class ReUsableCounterProp extends Component {
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
        return (
            <div>
                {/* we'll pass it on to our rendering props function and let thgem do however the're intended to be used for */}
                {this.props.rendering(this.state.count, this.incrementCount)}
            </div>
        )
    }
}
