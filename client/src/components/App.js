import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Landing from '../components/Layout/Landing';
import Footer from '../components/Layout/Footer';

class App extends Component {
    render() {
      return (
        <section className="hero is-danger is-fullheight is-bold">
  <div className="hero-head">
    <Navbar />
  </div>

  <Landing />

  <Footer />
  
  
</section>
      );
    }
}

export default App;

