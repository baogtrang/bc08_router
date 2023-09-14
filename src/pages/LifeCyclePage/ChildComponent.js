import React, { Component, PureComponent } from "react";

export default class ChildComponent extends PureComponent {
  constructor() {
    super();
    this.myCountDown = null;
  }
  componentDidMount() {
    console.log("Thôi nôi component con");
    let timmer = 30;
    this.myCountDown = setInterval(() => {
      timmer--;
      //   console.log("timmer", timmer);
    }, 100);
  }
  componentWillUnmount() {
    //
    clearInterval(this.myCountDown);
    console.log("Đăng xuất component con");
  }
  render() {
    console.log("Component con render");
    return <div className="p-5 bg-warning">ChildComponent</div>;
  }
}
