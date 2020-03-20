import React, { Component } from "react";

class UserDetail extends Component {
  componentWillMount() {
    console.log(this.props.match.params.id);
  }
  render() {
    return (
      <div>
        <h2>Hola</h2>
      </div>
    );
  }
}

export default UserDetail;
