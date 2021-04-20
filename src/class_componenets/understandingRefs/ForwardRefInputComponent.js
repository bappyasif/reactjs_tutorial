// import React, { Component } from "react";
import React from "react";

// we'll be using functional component within React.forwardRef method to recieve refs from container method
// functional components recieves props from container compoenent, but when used with refs, it also gets proprty called 'ref' as well
export let ForwardRefInputComponent = React.forwardRef((props, ref) => {
  return (
    <div>
      <label>using ForwardRefInputComponent</label>
      {/* 3> attaches refs passed on from container element */}
      <input type="text" ref={ref} />
    </div>
  );
});

// export class ForwardRefInputComponent extends Component {
//     render() {
//         return (
//             <div>
//                 <label>using ForwardRefInputComponent</label>
//                 <input type='text' />
//             </div>
//         )
//     }
// }
