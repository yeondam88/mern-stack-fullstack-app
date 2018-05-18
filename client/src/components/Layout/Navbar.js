import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <header className="navbar pd-20">
        <section className="navbar-section">
          <p>DevConnector</p>
        </section>
        <section className="navbar-section">
          <a className="btn btn-link">Log In</a>
          <a className="btn btn-link">Sign Up</a>
        </section>
      </header>
    );
  }
}

export default Navbar;