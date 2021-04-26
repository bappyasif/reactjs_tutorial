import React from "react";
import { useInput } from "./example_hooks/useInput";

// with using custom hook
export function UserForm() {
    let [firstName, resetFirstName, bindFirstName] = useInput('');
    let [lastName, resetLastName, bindLastName] = useInput('');

  
    let submitHandler = (evt) => {
      evt.preventDefault();
      console.log(firstName, lastName);
      resetFirstName();
      resetLastName();
    };
  
    return (
      <div>
        <fieldset>
          <form onSubmit={submitHandler}>
            <fieldset>
              <label>first name:</label>
              <input
                type="text"
                {...bindFirstName}
              />
            </fieldset>
            <fieldset>
              <label>last name:</label>
              <input
                type="text"
                {...bindLastName}
              />
            </fieldset>
            <button type="submit">submit</button>
          </form>
        </fieldset>
      </div>
    );
  }



// without using custom hook
// export function UserForm() {
//   let [firstName, setFirstName] = useState("");
//   let [lastName, setLastName] = useState("");

//   let submitHandler = (evt) => {
//     evt.preventDefault();

//     console.log(firstName, lastName);
//   };

//   return (
//     <div>
//       <fieldset>
//         <form onSubmit={submitHandler}>
//           <fieldset>
//             <label>first name:</label>
//             <input
//               type="text"
//               value={firstName}
//               onChange={(evt) => setFirstName(evt.target.value)}
//             />
//           </fieldset>
//           <fieldset>
//             <label>last name:</label>
//             <input
//               type="text"
//               value={lastName}
//               onChange={(evt) => setLastName(evt.target.value)}
//             />
//           </fieldset>
//           <button type="submit">submit</button>
//         </form>
//       </fieldset>
//     </div>
//   );
// }
