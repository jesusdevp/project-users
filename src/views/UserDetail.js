import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getUserById } from "../actions";

class UserDetail extends Component {
  componentWillMount() {
    this.props.getUserById(this.props.match.params.userId);
  }
  render() {
    console.log(this.props.userDetail);
    return (
      <div>
        <h2>Hola</h2>
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
