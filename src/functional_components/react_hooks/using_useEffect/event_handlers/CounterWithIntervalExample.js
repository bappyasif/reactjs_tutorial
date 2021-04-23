// counter example with hooks
import React, {useState, useEffect} from 'react';

export function CounterWithIntervalExample() {
    let [count, setCount] = useState(0);
    // let [ival, setIval] = useState(true);

    useEffect(() => {
        console.log('interval counter');
        // ival = setInterval(tick, 1001);
        let interval = setInterval(tick, 1001);
        
        // for cleanup we clearInterval
        return () => {
            clearInterval(interval)
            // setIval(clearInterval(ival))
        }
        // to run once pass in an empty array [] as a depenedency list, 
        // to watch for any changes pass in that state variable to rerender when there is a change [count]
        // another way to work around it withan empty array is to in setState functionality use a function and change value based on its previous value
        // whenever we use anyfunction in turn it works with any variable, and it's responsible for rendering, we should always be aware of putting it in dependecy list [someProp]
    }, []);

    // does not depend on previous value
    // let tick = () => setCount(count+1);

    // does depend on its previous value
    let tick = () => setCount(prevCount => prevCount+1);

    return (
        <div>
            <h4>Ticking : {count}</h4>
        </div>
    )
}





// lets see implementation of it using class component
// import React, { Component } from "react";

// export class CounterWithIntervalExample extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//     };
//   }

//   tick = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   componentDidMount() {
//     this.interval = setInterval(this.tick, 1001);
//   }

//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }

//   render() {
//     return (
//       <div>
//         <h4>Ticking: {this.state.count}</h4>
//       </div>
//     );
//   }
// }
