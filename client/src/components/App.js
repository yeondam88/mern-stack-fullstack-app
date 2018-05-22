import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../components/Layout/Navbar";
import Landing from "../components/Layout/Landing";
import Footer from "../components/Layout/Footer";
import Register from "./Auth/Register";
import Login from "./Auth/Login";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/signin" component={Login} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
