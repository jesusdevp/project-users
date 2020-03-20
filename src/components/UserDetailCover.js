import React, { Component } from "react";
import PropTypes from "prop-types";
import Gravatar from "./Gravatar";
import "./Styles/index.css";

class UserDetailCover extends Component {
  constructor() {
    super();
    this.state = {
      cover:
        "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
    };
  }
  render() {
    const { firstName, lastName } = this.props;
    return (
      <div className="UserDetailCover">
        <Gravatar
          className="UserDetailCover-img"
          name={this.props.firstName}
          alt="avatar"
        />
        <div>
          <h2 className="UserDetailCover-name">{firstName + " " + lastName}</h2>
        </div>
      </div>
    );
  }
}

UserDetailCover.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
};

export default UserDetailCover;
