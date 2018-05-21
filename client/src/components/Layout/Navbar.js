import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <header className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item">
            Devconnector
          </a>
          <span className="navbar-burger burger" data-target="navbarMenuHeroC">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroC" className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item is-active">
              Home
            </a>
            <a className="navbar-item">
              Examples
            </a>
            <span className="navbar-item">
              <a className="button is-inverted">
                <span className="icon">
                  <i className="fab fa-github"></i>
                </span>
                <span>Github</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </header>
    );
  }
}

export default Navbar;