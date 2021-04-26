// import React from "react";
import { ClassTimer } from "./ClassTimer";
import { FocusInput } from "./FocusInput";
import { HookTimer } from "./HookTimer";

export function ContainerForUseRef() {
  return (
    <div>
      {/* it lets us to use or access DOM nodes directly into functional components */}
      {/* lets look at a common scenario of form, upon load it'll automatically focus at username field */}
      <FocusInput />

      {/* another usecase of useRef with a timer demo */}
      <ClassTimer />
      <HookTimer />
    </div>
  );
}
