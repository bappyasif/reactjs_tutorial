import React from "react";
// accessing context via importing
import { UserContext, GreetContext } from "../ContainerForUseContext";

// a mutiple context consumer
export function ComponentF() {
  return (
    <div>
      <p>Component F</p>
      {/* it becomes too verbose, requires so much nesting and this where context hook will come to play and make life a lot easier */}
      {/* ComponentE will have demnostration of using context hook and usecase of it */}
      
      <UserContext.Consumer>
        {(user) => {
          return (
            <GreetContext.Consumer>
              {(greet) => {
                return (
                  <p>
                    showing context username: {user}, {greet}
                  </p>
                );
              }}
            </GreetContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}

// export function ComponentF() {
//   return (
//     <div>
//       <p>Component F</p>
//       <UserContext.Consumer>
//         <GreetContext.Consumer>
//           {(username, greet) => {
//             return <p>showing context username: {username}, {greet}</p>;
//           }}
//         </GreetContext.Consumer>
//       </UserContext.Consumer>
//     </div>
//   );
// }

// a single context consumer
// export function ComponentF() {
//     return (
//         <div>
//             <p>Component F</p>
//             <UserContext.Consumer>
//                 {/* <p>username: {UserContext.username}</p> */}
//                 {
//                     username => {
//                         return <p>showing context username: {username}</p>
//                     }
//                 }
//             </UserContext.Consumer>
//         </div>
//     )
// }
