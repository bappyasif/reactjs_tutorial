import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isUserLoggedIn: true,
        }
    }

    render() {
        // 1> rendering using if..else method
        // if(this.state.isUserLoggedIn) {
        //     return(<h2>Welcome Bretta</h2>)
        // } else {
        //     return(<h2>Welcome Guest</h2>)
        // }

        // 2> rendering using element variable
        let text;
        if(this.state.isUserLoggedIn) {
            text = 'Welcome Bretta';
        } else {
            text = 'Welcome Guest';
        }

        return (
            <div>
                <h4>{text}</h4>
                {/* 3> rendering using ternary operator */}
                <h4>{this.state.isUserLoggedIn ? 'Welcome Brittney' : 'Welcome Guest'}</h4>

                {/* 4> rendering using short circuit */}
                {/* rhs only gets executed when lhs is true, if not nothing gets rendered on DOM */}
                {this.state.isUserLoggedIn && <h4>Welcome Mickey</h4>}
                {/* this.state.isUserLoggedIn && <h4>Welcome Mickey</h4> */}
            </div>
        )
    }
}
