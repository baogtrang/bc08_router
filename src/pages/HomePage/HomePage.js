import axios from "axios";
import React, { Component } from "react";
import { configHeaders } from "../../api/config";
import CardUser from "./CardUser";
import { PacmanLoader } from "react-spinners";
export default class HomePage extends Component {
  // render ra danh sách người dùng dựa vào api https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP00
  state = {
    userArr: [],
    isLoading: false,
  };
  componentDidMount() {
    this.setState({
      isLoading: true,
    });
    axios({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP00",
      method: "GET",
      headers: configHeaders(),
    })
      .then((res) => {
        console.log(res);
        this.setState({ userArr: res.data.content, isLoading: false });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  renderUserList = () => {
    return this.state.userArr.map((item, index) => {
      return <CardUser user={item} key={index} />;
    });
  };
  // xoá user
  render() {
    return (
      <div>
        {this.state.isLoading && <PacmanLoader size={200} color="#d90429" speedMultiplier={2} />}
        <div className="row p-5">{this.renderUserList()}</div>
      </div>
    );
  }
}
