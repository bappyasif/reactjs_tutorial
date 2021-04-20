import React, { Component } from "react";
import { ErrorBoundary } from "./ErrorBoundary";
import { HeroName } from "./HeroName";

export class HandlingError extends Component {
  // by default if there is any error than entire appl crashes but having error boundary would save us from that

  // error boundary will falls back into an ui only for those which falls into that leaqving rest unaffected

  render() {
    return (
      <div>
        <h4>Error Boundary</h4>
        {/* wrapping all child components within Error Boundary component to work as fail safe */}
        {/* Error boundary usually catches if there is any error and shows any fallback UI instead App crash */}

        {/* in development mode, Error still pushes whene there is any error to make us correct our error but in production mode this will show directly fail safe UI instead */}
        {/* in development mode we can simple just close error screen from top right and we can still see our App in action where as without it would have failed */}

        {/* even though this works but we want everyother unaffected component to be visible on DOM and just show errorneous component to be fall under Error Boundary we better use it each component within Error Boundary */}
        {/* <ErrorBoundary>
          <HeroName heroName="batman" />
          <HeroName heroName="spiderman" />
          <HeroName heroName="superman" />
          <HeroName heroName="joker" />
        </ErrorBoundary> */}

        <ErrorBoundary>
          <HeroName heroName="batman" />
        </ErrorBoundary>

        <ErrorBoundary>
          <HeroName heroName="spiderman" />
        </ErrorBoundary>

        <ErrorBoundary>
          <HeroName heroName="superman" />
        </ErrorBoundary>

        <ErrorBoundary>
          <HeroName heroName="joker" />
        </ErrorBoundary>
      </div>
    );
  }
}
