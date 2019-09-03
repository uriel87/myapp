import React from "react";
import { Link } from "react-router-dom";

export const User = props => {
  return (
    <div className="container">
      <h1>Users list</h1>
      {props.userList.map(user => (
        <div key={user.id}>
          <p>user id: {user.id}</p>
          <p>user name: {user.name}</p>
          <p>user email: {user.email}</p>
          <p>user tel: {user.tel}</p>
          <hr />
        </div>
      ))
      }
    </div>
  );
};
