import React, { Component } from "react";

export default class Item extends Component {
  render() {
    let { id, account, password } = this.props.user;
    return (
      <tr>
        <td>{id}</td>
        <td>{account}</td>
        <td>{password}</td>
        <td>
          <button className="btn btn-warning">Delete</button>
          <button className="btn btn-primary">Edit</button>
        </td>
      </tr>
    );
  }
}
