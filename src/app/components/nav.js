import React, {Component} from "react";
import {Link} from "react-router-dom";

export const Nav = props => {
  return (
    <nav>
      <h1>Nav logo</h1>
      <ul>
        <Link to="/about">
          <li>about</li>
        </Link>
        <Link to="/shop">
          <li>shop</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
