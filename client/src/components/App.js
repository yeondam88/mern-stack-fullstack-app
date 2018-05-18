import React, { Component } from 'react';
import logo from '../images/spectre-logo.svg';

class App extends Component {
    render() {
      return (
        <div>
          <header className="navbar">
            <section className="navbar-section">
              <a href="#" className="btn btn-link">Docs</a>
              <a href="#" className="btn btn-link">Examples</a>
            </section>
            <section className="navbar-center">
              <img src={logo} />
            </section>
            <section className="navbar-section">
              <a href="#" className="btn btn-link">Twitter</a>
              <a href="#" className="btn btn-link">GitHub</a>
            </section>
          </header>
        </div>
      );
    }
}

export default App;