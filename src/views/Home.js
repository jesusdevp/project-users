import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getUsers } from "../actions";

export class Home extends Component {
  componentWillMount() {
    this.props.getUsers();
  }
  render() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.getUsers
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getUsers
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
