import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/dev.svg";

class Navbar extends Component {
  render() {
    return (
      <header className="app-header">
        <nav className="navbar is-fixed-top">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item">
                <img
                  src={Logo}
                  alt="logo"
                  style={{ "max-height": "4.75rem", width: "100%" }}
                />
              </a>
            </div>
            <div className="navbar-menu">
              <div className="navbar-end">
                <a href="/" className="navbar-item is-active">
                  Home
                </a>
                <a href="/" className="navbar-item">
                  Register
                </a>
                <a href="/" className="navbar-item">
                  Sign in
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
