import React, { Component } from 'react'
import {ChildComponent} from '../functional_components/ChildComponent';

export class ContainerComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             containerName: 'Container',
             text: ''
        }

        this.greetContainer = this.greetContainer.bind(this);
        this.handlingGreetFromChild = this.handlingGreetFromChild.bind(this);
    }

    greetContainer() {
        console.log(`Hello ${this.state.containerName}, from child component`)
        // return(<p>`Hello ${this.state.containerName}, from child component`</p>)
    }

    handlingGreetFromChild(fromWho) {
        console.log(`Hello ${this.state.containerName}, from ${fromWho} component`);
        this.setState({
            text: `Hello ${this.state.containerName}, from ${fromWho} component`
        });
    }
    
    render() {
        return (
            <div>
                {/* <ChildComponent greetHandler={this.greetContainer} name={this.state.containerName} /> */}
                
                {/* <ChildComponent greetHandler={this.greetContainer} handlingGreet={this.handlingGreetFromChild} /> */}

                <ChildComponent greetHandler={this.greetContainer} handlingGreet={this.handlingGreetFromChild} greetText={this.state.text} />
            </div>
        )
    }
}
