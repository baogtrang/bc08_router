import { message } from "antd";
import axios from "axios";
import React, { Component } from "react";
import { Navigate } from "react-router-dom";

export default class LoginPage extends Component {
  state = {
    account: "alice",
    password: "",
  };
  handleChangeForm = (e) => {
    let { value, name } = e.target;
    this.setState({ [name]: value });
  };
  handleLogin = () => {
    axios({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: {
        taiKhoan: this.state.account,
        matKhau: this.state.password,
      },
      headers: {
        TokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MSIsIkhldEhhblN0cmluZyI6IjIzLzAyLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwODY0NjQwMDAwMCIsIm5iZiI6MTY4MDM2ODQwMCwiZXhwIjoxNzA4Nzk0MDAwfQ.m054V9MFrBY26j2t-FxqIXGcOVQim2UUk_G-OoewJUY",
      },
    })
      .then((res) => {
        console.log(res);
        message.success("Đăng nhập thành công");
        setTimeout(() => {
          // delay 3s trước khi chuyển trang
          window.location.href = "/";
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        message.error("Đăng nhập thất bại");
      });
  };
  render() {
    return (
      <div>
        <div className="container">
          <div class="form-group">
            <label for="">Account</label>
            <input name="account" onChange={this.handleChangeForm} type="text" class="form-control" value={this.state.account} placeholder="" />
          </div>
          <div class="form-group">
            <label for="">Password</label>
            <input name="password" onChange={this.handleChangeForm} type="text" class="form-control" value={this.state.password} placeholder="" />
          </div>
          <button onClick={this.handleLogin} className="btn btn-warning">
            Login
          </button>
        </div>
      </div>
    );
  }
}

var user = {
  name: "alice",
  age: 2,
};

let key = "name";
user[key] = "bob";

// message antd

// antd npm
