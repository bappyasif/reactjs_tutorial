import React, { useState, useEffect, useRef, useDebugValue } from "react";

export function HookTimer() {
  let [timer, setTimer] = useState(0);
  let intervalRef = useRef();

//   let [isOnline, setIsOnline] = useState(null);
//   //   setIsOnline(true);
//   let check;
//   check = useDebugValue(() => {
//     setIsOnline(true);
//     return isOnline ? "online" : "offline";
//   });
  // let check = useDebugValue(isOnline ? 'online' : 'offline');
  // console.log('outside:',isOnline, check)

  // useEffect(()=>setIsOnline(!isOnline), []);
  // useDebugValue(setIsOnline(isOnline ? 'online' : 'offline'));

  //   with using useRef hook
  // to implement a timer we need to mimick componentDidMount and componentWillUnmount using useEffect hook
  useEffect(() => {
    intervalRef.current = setInterval(
      () => setTimer((prevTimer) => prevTimer + 1),
      1000
    );
    // setIsOnline(true);
    // check = useDebugValue(isOnline ? 'online' : 'offline');
    // console.log("?!", isOnline, check);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  // without using useRef hook
  //   // to implement a timer we need to mimick componentDidMount and componentWillUnmount using useEffect hook
  //   useEffect(() => {
  //     let interval = setInterval(
  //       () => setTimer((prevTimer) => prevTimer + 1),
  //       1000
  //     );
  //     return () => {
  //       clearInterval(interval);
  //     };
  //   }, []);
  return (
    <div>
      Hook Timer :: {timer}
      {/* as interval is scoped within useEffect, this is where useRef will come to rescue */}
      {/* useRef can also be used to hold any mutable value through out any rerender process, along with ref reference to a DOM node */}
      {/* <button onClick={() => clearInterval(interval)}>clear interval</button> */}
      <button onClick={() => clearInterval(intervalRef.current)}>
        clear interval
      </button>
      {/* <p>user :: {check}</p> */}
      {/* <p>user :: {isOnline}</p> */}
    </div>
  );
}
