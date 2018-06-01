import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import { setCurrentUser, logoutUser } from "../actions/authActions";
import { clearCurrentProfile } from "../actions/profileActions";

import Navbar from "../components/Layout/Navbar";
import Landing from "../components/Layout/Landing";
import Footer from "../components/Layout/Footer";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import Dashboard from "./dashboard/Dashboard";
import CreateProfile from "./create-profile/CreateProfile";
import EditProfile from "./edit-profile/EditProfile";
import AddExperience from "./add-credentials/AddExperience";
import AddEducation from "./add-credentials/AddEducation";
import Profiles from "./profiles/Profiles";
import PrivateRoute from "../components/common/PrivateRoute";
import store from "../store";

// Check for token
if (localStorage.jwtToken) {
  // set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  // check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Navbar />
            <main className="app-content">
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route paht="/developers" component={Profiles} />
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <PrivateRoute
                  path="/create-profile"
                  component={CreateProfile}
                />
                <PrivateRoute path="/edit-profile" component={EditProfile} />
                <PrivateRoute
                  path="/add-experience"
                  component={AddExperience}
                />
                <PrivateRoute path="/add-education" component={AddEducation} />
              </Switch>
            </main>
            <Footer />
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
