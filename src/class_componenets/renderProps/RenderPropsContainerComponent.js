import React, { Component } from "react";
import { AnotherClickCounterRendering } from "./AnotherClickCounterRendering";
import { AnotherHoverCounterRendering } from "./AnotherHoverCounterRendering";
import { AnotherReusableCounterComponent } from "./AnotherReusableCounterComponent";
import { ClickCounterRenderingProps } from "./ClickCounterRenderingProps";
import { HoverCounterRenderingProps } from "./HoverCounterRenderingProps";
import { ReUsableCounterProp } from "./ReUsableCounterProp";
import { UserComponent } from "./UserComponent";

// render prop means a technique for "sharing code" between React Components using a prop whose "value is a function"
export class RenderPropsContainerComponent extends Component {
  render() {
    return (
      <div>
        <h2>Rendering Props</h2>
        <div>
          {/* <ClickCounterRenderingProps />
                    <HoverCounterRenderingProps /> */}
          {/* <UserComponent name='Bretie' nameFunc={(isUserLoggedIn)=> isUserLoggedIn ? 'Mickey' : 'Guest'} /> */}
          <UserComponent
            name="Bretie"
            rendering={(isUserLoggedIn) =>
              isUserLoggedIn ? "Mickey" : "Guest"
            }
          />

          {/* we'll use our counter props so that it can be reused by both Click and Hover Counter */}
          <ReUsableCounterProp
            rendering={(count, incrementCount) => (
              <ClickCounterRenderingProps
                count={count}
                incrementCount={incrementCount}
              />
            )}
          />
          <ReUsableCounterProp
            rendering={(count, incrementCount) => (
              <HoverCounterRenderingProps
                count={count}
                incrementCount={incrementCount}
              />
            )}
          />

          {/* we can also use this reusable props component from children nodes as well */}
          <AnotherReusableCounterComponent>
            {(count, incrementCount) => (
              <AnotherClickCounterRendering
                count={count}
                incrementCount={incrementCount}
              />
            )}
          </AnotherReusableCounterComponent>

          <AnotherReusableCounterComponent>
            {(count, incrementCount) => (
              <AnotherHoverCounterRendering
                count={count}
                incrementCount={incrementCount}
              />
            )}
          </AnotherReusableCounterComponent>
        </div>
      </div>
    );
  }
}
