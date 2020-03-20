import React, { Component } from "react";
import "./index.css";

class UserDetailCover extends Component {
  constructor() {
    super();
    this.state = {
      cover:
        "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
    };
  }
  render() {
    return (
      <div className="UserDetailCover">
        <img src={this.state.cover} className="UserDetailCover-img" />
      </div>
    );
  }
}

export default UserDetailCover;
