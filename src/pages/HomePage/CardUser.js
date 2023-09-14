import React, { Component } from "react";

export default class CardUser extends Component {
  render() {
    let { hoTen, maLoaiNguoiDung } = this.props.user;
    return (
      <div className="col-2 p-1 py-3">
        <span className={maLoaiNguoiDung == "KhachHang" ? "text-dark" : "text-danger"}>{hoTen.length > 10 ? hoTen.slice(0, 10) + "..." : hoTen}</span>
      </div>
    );
  }
}
