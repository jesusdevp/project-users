import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router";
import Gravatar from "./Gravatar";
import "materialize-css";

class UserItem extends Component {
  constructor() {
    super();
    this.state = {
      isRedirected: false
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick(e) {
    this.setState({ isRedirected: true });
  }
  render() {
    const { name, lastName, id, facebook } = this.props;
    if (this.state.isRedirected) {
      return <Redirect to={"/detail/" + id} />;
    }
    return (
      <div className="card" onClick={this.onClick}>
        <div className="card-content">
          <div className="UserItem-leftBox">
            <Gravatar
              className="UserItem-image"
              name={this.props.name}
              alt="avatar"
            />
          </div>
          <div className="UserItem-rightBox">
            {/* <h3 className="UserItem-id">{id}</h3> */}
            <h2 className="UserItem-name">{name + " " + lastName}</h2>
            <h3 className="UserItem-facebook">{facebook}</h3>
          </div>
        </div>
      </div>
    );
  }
}

UserItem.propTypes = {
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  facebook: PropTypes.string
};

export default UserItem;
