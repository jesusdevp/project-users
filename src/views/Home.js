import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getUsers } from "../actions";

import UserItem from "../components/UserItem";

import "./index.css";
import "materialize-css/dist/css/materialize.min.css";

export class Home extends Component {
  constructor() {
    super();
  }
  componentWillMount() {
    this.props.getUsers();
  }
  render() {
    let users = [];
    if (this.props.users.data) {
      users = this.props.users.data.map((currentValue, index, array) => {
        return (
          <UserItem
            key={index}
            name={currentValue.name}
            lastName={currentValue.last_name}
            facebook={currentValue.facebook}
            id={currentValue.id}
          />
        );
      });
    }
    return <div className="Home">{users}</div>;
  }
}

//Esta funcion convierte el valor de la store que yo quiero
// en propiedades para el componente

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
