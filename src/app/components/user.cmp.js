import React, {Component} from "react";
import {App} from "../containers/App";

// export class User extends Component {
//   render() {
//     return (
//       <div className="container">
//         <p>User Name: {this.props.username}</p>
//       </div>
//     );
//   }
// }

export const User = props => {
  return (
    <div className="container">
      <h1>user component</h1>
      <p>User Name: {props.username}</p>
      <p>User Email: {props.useremail}</p>
    </div>
  );
};

//export default User;
