import React from "react";
import { Link } from "react-router-dom";

import "./Styles/Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div>
          <Link to="/" id="menu">
            Users
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
