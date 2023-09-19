import React, { Component } from "react";
import { BASE_URL_DSSV } from "./utils";
import { message } from "antd";
import axios from "axios";
import { connect } from "react-redux";
import { SET_USERS } from "./redux/userReducer";

class Form extends Component {
  state = {
    id: "",
    account: "",
    password: "",
  };
  handleChangeForm = (e) => {
    var { name, value } = e.target;
    this.setState({ [name]: value });
  };

  fetchUserList = () => {
    axios
      .get(BASE_URL_DSSV)
      .then((res) => {
        console.log(res);
        // đẩy data lên redux
        this.props.handleSetUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  handleCreate = () => {
    console.log("create", this.state);
    axios
      .post(BASE_URL_DSSV, this.state)
      .then((res) => {
        this.fetchUserList();
        message.success("Thêm thành công");
      })
      .catch((err) => {
        message.error("Đã có lỗi xảy ra");
      });
  };
  render() {
    return (
      <div>
        <form className="">
          <div class="form-group">
            <label for="">ID</label>
            <input
              onChange={this.handleChangeForm}
              type="text"
              class="form-control"
              name="id"
              value={this.state.id}
              placeholder=""
            />
          </div>
          <div class="form-group">
            <label for="">Account</label>
            <input
              onChange={this.handleChangeForm}
              type="text"
              class="form-control"
              name="account"
              value={this.state.account}
              placeholder=""
            />
          </div>
          <div class="form-group">
            <label for="">ID</label>
            <input
              onChange={this.handleChangeForm}
              type="text"
              class="form-control"
              name="password"
              value={this.state.password}
              placeholder=""
            />
          </div>
          <button
            type="button"
            onClick={this.handleCreate}
            className="btn btn-dark "
          >
            Thêm
          </button>
        </form>
      </div>
    );
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    handleSetUsers: (users) => {
      dispatch({
        type: SET_USERS,
        payload: users,
      });
    },
  };
};
export default connect(null, mapDispatchToProps)(Form);
