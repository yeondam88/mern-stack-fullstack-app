import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';

class App extends Component {
    render() {
      return (
        <div className="container main-bg">
          <Navbar />
          <Footer />
        </div>
      );
    }
}

export default App;