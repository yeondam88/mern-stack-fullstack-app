import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/authActions";
import Logo from "../../images/dev.svg";

class Navbar extends Component {
  render() {
    const { logout } = this.props;
    const { isAuthenticated, user } = this.props.auth;
    return (
      <header className="app-header">
        <nav className="navbar is-fixed-top">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item">
                <img
                  src={Logo}
                  alt="logo"
                  style={{ maxHeight: "4.75rem", width: "100%" }}
                />
              </a>
            </div>
            <div className="navbar-menu">
              <div className="navbar-end">
                <Link to="/" className="navbar-item is-active">
                  Home
                </Link>
                {isAuthenticated ? (
                  <Link to="/dashboard" className="navbar-item">
                    Dashboard
                  </Link>
                ) : (
                  <Link to="/register" className="navbar-item">
                    Register
                  </Link>
                )}
                {isAuthenticated ? (
                  <Link to="/" onClick={logout} className="navbar-item">
                    Log Out
                  </Link>
                ) : (
                  <Link to="/login" className="navbar-item">
                    Log In
                  </Link>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  user: state.user
});

export default connect(mapStateToProps, { logout })(Navbar);
