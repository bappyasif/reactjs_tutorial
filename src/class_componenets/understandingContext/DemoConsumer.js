import React, { Component } from "react";
import { DemoComponent } from "./DemoComponent";
import { ContextConsumer } from "./demoContext";
import UserContext from "./userContext";

export class DemoConsumer extends Component {
  render() {
    return (
      <div>
        <p>Multiple Context</p>
        <ContextConsumer>
          {(greet) => (
            <UserContext>
              {(user) => <DemoComponent user={user} greet={greet} />}
            </UserContext>
          )}
        </ContextConsumer>
      </div>
    );
  }
}
