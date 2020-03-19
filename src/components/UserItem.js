import React, { Component } from "react";
import PropTypes from "prop-types";
import "materialize-css";

class UserItem extends Component {
  render() {
    const { name, lastName, id, facebook } = this.props;
    return (
      <div className="card">
        <div className="card-content">
          <div className="UserItem-leftBox">
            <img
              className="UserItem-image"
              src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
              alt="profile"
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
