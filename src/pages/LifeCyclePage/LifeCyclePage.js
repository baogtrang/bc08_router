import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class LifeCyclePage extends Component {
  state = {
    number: 1,
  };
  componentDidMount() {
    // dùng để gọi api khi user load trang
    console.log("did mount");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("nextState", nextState);
    if (nextState.number == 5) {
      return false;
      //   retunr flase => ko reder lại
    }
    return true;
    // default là return true
  }
  handleIncrease = () => this.setState({ number: this.state.number + 1 });
  handleDecrease = () => this.setState({ number: this.state.number - 1 });
  render() {
    console.log("render");
    return (
      <div className="text-center">
        <h2 className="display-4 text-danger">LifeCyclePage</h2>
        <button onClick={this.handleDecrease} className="btn btn-dark">
          -
        </button>
        <strong className="mx-5">{this.state.number}</strong>
        <button onClick={this.handleIncrease} className="btn btn-dark">
          +
        </button>

        <ChildComponent />
      </div>
    );
  }
  componentDidUpdate() {
    console.log("Chạy sau khi render thành công");
  }
}
