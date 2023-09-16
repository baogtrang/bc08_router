import React, { Component } from "react";
import Item from "./Item";
import axios from "axios";
import { BASE_URL_DSSV } from "./utils";
import { connect } from "react-redux";
import { SET_USERS } from "./redux/userReducer";

class List extends Component {
  componentDidMount() {
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
  }
  renderTbody = () => {
    return this.props.users.map((user, index) => <Item user={user} key={index} />);
  };
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Account</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.renderTbody()}</tbody>
        </table>
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
let mapStateToProps = (state) => {
  return {
    users: state.userReducer.users,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(List);
