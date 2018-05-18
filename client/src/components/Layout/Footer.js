import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer pd-20">
      <section className="navbar-section">
      <p>DevConnector</p>
    </section>
    <section className="navbar-section">
      <a>About</a>
      <a>Contact us</a>
    </section>
      </footer>
    );
  }
}

export default Footer;