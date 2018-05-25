import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Logo from "../../images/dev.svg";

class Navbar extends Component {
  logout = () => {
    this.props.logoutUser();
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      <div className="navbar-end">
        <Link to="/dashboard" className="navbar-item">
          Dashboard
        </Link>
        <a className="navbar-item" onClick={this.logout}>
        <img style={{ 'marginRight': '5px', 'width': "25px", borderRadius: '50%'}} src={user.avatar} alt={user.name} title="You must have a gravatar connected to your email to display an image" />Log out
        </a>
      </div>
    );

    const notAuthLinks = (
      <div className="navbar-end">
        <Link to="/" className="navbar-item is-active">
          Home
        </Link>
        <Link to="/register" className="navbar-item">
          Register
        </Link>
        <Link to="/login" className="navbar-item">
          Sign In
        </Link>
      </div>
    );

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
              <Link to="/developer" className="navbar-item">
                Developer
              </Link>
            </div>
            <div className="navbar-menu">
              {isAuthenticated ? authLinks : notAuthLinks}
            </div>
          </div>
        </nav>
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

export default connect(mapStateToProps, { logoutUser })(Navbar);
