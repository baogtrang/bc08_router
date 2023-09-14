import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <NavLink className="btn btn-info mx-5" to="/">
          {" "}
          Home
        </NavLink>
        <NavLink className="btn btn-info mx-5" to="/login">
          {" "}
          Login
        </NavLink>
      </div>
    );
  }
}
