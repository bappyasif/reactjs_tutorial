// using useEffects and useState
import React, {useState, useEffect} from 'react';

export function RunEffectsOnlyOnce() {
    let [x, setX] = useState(0);
    let [y, setY] = useState(0);

    // useEffect will take care of any side effects such as event listener, fetch and so on
    useEffect(() => {
        console.log('useEffect called');
        window.addEventListener('mousemove', logMouseCurrentPosition);

        // to unmount a component and it's event listener
        // return () => {
        //     console.log('runs once unmounting component');
        //     window.removeEventListener('mousemove', logMouseCurrentPosition);
        // }

        // passing in an empty array means just run once
    }, []);

    let logMouseCurrentPosition = (evt) => {
        // {x: evt.clientX, y: evt.clientY}
        console.log('mouse coordinate')
        // setX({x: evt.clientX})
        // setY({y: evt.clientY})
        setX(evt.clientX)
        setY(evt.clientY)
    }

    // without using conditional rendering
    // useEffect(() => {
    //     console.log('useEffect called');
    //     window.addEventListener('mousemove', logMouseCurrentPosition);
    // })

    return (
        <div>
            <h6>X : {x} and Y : {y}</h6>
        </div>
    )
}




// using a class component to understand topic at hand
// import React, { Component } from 'react'

// export class RunEffectsOnlyOnce extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//               x: 0,
//               y: 0
//         }
//     }

//     logMouseCurrentPosition = evt => this.setState({x: evt.clientX, y: evt.clientY});

//     componentDidMount() {
//         window.addEventListener('mousemove', this.logMouseCurrentPosition);
//     }
    
//     render() {
//         return (
//             <div>
//                 <h6> X : {this.state.x} and  Y : {this.state.y}</h6>
//             </div>
//         )
//     }
// }
