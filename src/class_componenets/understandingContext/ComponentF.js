import React, { Component } from "react";
import { UserConsumer } from "./userContext";

export class ComponentF extends Component {
  render() {
    return (
      <div>
        <p>Component F</p>
        {/* // step 3 of Context, consuming UserProvider provide3d 'value' */}
        {/* // for that we need to import Consumer (e.g. UserConsumer) into this component */}
        <UserConsumer>
          {(username) => {
            return (
              <div>
                <p>Hello {username}</p>
              </div>
            );
            // <p>Hello {username}</p>;
          }}
        </UserConsumer>
      </div>
    );
  }
}

/**
 * 
 * 
 export class ComponentF extends Component {
  render() {
    return (
      //   <div>
    //   { <p>Component F</p> }
      // {/* step 3 of Context, consuming UserProvider provide3d 'value' }
      // {/* for that we need to import Consumer (e.g. UserConsumer) into this component }
      <UserConsumer>
        {(username) => {
          return (
            <div>
              <p>Component F</p>
              <p>Hello {username}</p>
            </div>
          );
          // <p>Hello {username}</p>;
        }}
      </UserConsumer>
      //   </div>
    );
  }
}
 */
