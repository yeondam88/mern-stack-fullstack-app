import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";
import Logo from "../../images/logo_transparent.png";

class Navbar extends Component {
  logout = () => {
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      <div className="navbar-end">
        <Link to="/feed" className="navbar-item">
          Post Feed{" "}
        </Link>{" "}
        <Link to="/dashboard" className="navbar-item">
          Dashboard{" "}
        </Link>{" "}
        <a className="navbar-item" onClick={this.logout}>
          <img
            style={{
              marginRight: "5px",
              width: "25px",
              borderRadius: "50%"
            }}
            src={user.avatar}
            alt={user.name}
            title="You must have a gravatar connected to your email to display an image"
          />{" "}
          Log out{" "}
        </a>{" "}
      </div>
    );

    const notAuthLinks = (
      <div className="navbar-end">
        <Link to="/" className="navbar-item is-active">
          Home{" "}
        </Link>{" "}
        <Link to="/register" className="navbar-item">
          Register{" "}
        </Link>{" "}
        <Link to="/login" className="navbar-item">
          Sign In{" "}
        </Link>{" "}
      </div>
    );

    return (
      <header className="app-header">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <Link className="navbar-item" to="/">
                <img
                  src={Logo}
                  alt="logo"
                  style={{
                    maxHeight: "4.75rem"
                  }}
                />{" "}
              </Link>{" "}
              <Link to="/developers" className="navbar-item">
                Developers{" "}
              </Link>{" "}
            </div>{" "}
            <div className="navbar-menu">
              {" "}
              {isAuthenticated ? authLinks : notAuthLinks}{" "}
            </div>{" "}
          </div>{" "}
        </nav>{" "}
      </header>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  user: state.user
});

export default connect(
  mapStateToProps,
  {
    logoutUser,
    clearCurrentProfile
  }
)(Navbar);
