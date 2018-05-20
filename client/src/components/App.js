import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Landing from '../components/Layout/Landing';
import Footer from '../components/Layout/Footer';

class App extends Component {
    render() {
      return (
        <div className="container main-bg">
          <Navbar />
          <div>
            <Landing />
          </div>
          <Footer />
        </div>
      );
    }
}

export default App;