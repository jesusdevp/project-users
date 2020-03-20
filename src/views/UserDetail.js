import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getUserById } from "../actions";
import UserDetailCover from "../components/UserDetailCover";
import UserDetailBody from "../components/UserDetailBody";

class UserDetail extends Component {
  componentWillMount() {
    this.props.getUserById(this.props.match.params.userId);
  }
  render() {
    console.log(this.props.userDetail);
    return (
      <div>
        <UserDetailCover />
        <UserDetailBody />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userDetail: state.getUserById
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getUserById
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
