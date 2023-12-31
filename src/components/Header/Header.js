import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  routes = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/login",
      name: "Login",
    },
    {
      path: "/life-cycle",
      name: "Life Cycle",
    },
    {
      path: "/dssv",
      name: "DSSV",
    },
    {
      path: "/hook",
      name: "Hook",
    },
    {
      path: "/tai-xiu",
      name: "Tài Xỉu",
    },
  ];
  render() {
    return (
      <div>
        {this.routes.map(({ path, name }, index) => {
          return (
            <NavLink to={path} className="mx-3 btn btn-info" key={index}>
              {name}
            </NavLink>
          );
        })}
      </div>
    );
  }
}
