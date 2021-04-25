import React, { useCallback, useState } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

export function CallbackHookExampleContainer() {
  // lets define some state for our container component to use
  let [age, setAge] = useState(22);
  let [salary, setSalary] = useState(59000);

  //   using useCallback
  let incrementAge = useCallback(() => setAge(age + 1), [age]);
  let incrementSalary = useCallback(() => setSalary(salary + 1000), [salary]);

  //   without using useCallback hook, for further rendering optimization
  //   let incrementAge = () => setAge(age + 1);
  //   let incrementSalary = () => setSalary(salary + 1000);

  return (
    <div>
      {/* container for other components */}

      {/* this has an optimization issue that we should concern about, each of these elemnt gets rendered upon any button click */}
      {/* optimization should be when Increment Age button is clicked only that should be rendered leaivng rest unchanged and thus unrendered */}

      {/* and we can do so by using Memo, which ensures rendering for those compoennts which has a change in state variable or props leaving rest unchanged and as it is, thus optimizing performance */}
      {/* useMemo is not a hook it's an higher order component, it has nothing to do with hooks */}

      {/* using React.memo() solves pretty much a lot of it in this scenario but still has bottleneck as it happens to consider change in prop to be a trigger for rendering */}
      {/* event though both of them two different state variable but shares same props, which indicates React to enforce rendering for both of those button element instead for individually */}

      {/* to solve that rerendering issue of creating a new function for both of those button element is useCallback hook */}
      {/* what is useCallback hook: it's a hook that will return a memoized version of callback function that only changes if one of dependecies has changes */}
      {/* why we use useCallback: it useful when passing callbacks to optimize child components that solely replies on reference equality to prevent unnecessary renders thus improving rendering performance */}
      {/* how we do this: we have to import it from React and use it within our callback functions, which takes in two arguments, first is callback function itself and second argument is dependency confirming to listen for which state variable changes and renders thus accordingly */}

      <Title />
      {/* passing state variables for 'age' as props into count component along with click handler */}
      <Count text="Age" count={age} />
      <Button clickHandler={incrementAge}>increment age</Button>
      {/* passing state variable for 'salary' as props into count component along with click handler */}
      <Count text="Salary" count={salary} />
      <Button clickHandler={incrementSalary}>increment salary</Button>
    </div>
  );
}
