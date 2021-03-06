import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCurrentProfile, deleteAccount } from "../../actions/profileActions";

import Spinner from "../common/Spinner";
import ProfileActions from "./ProfileActions";
import Experience from "./Experience";
import Education from "./Education";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onDeleteClick = e => {
    this.props.deleteAccount();
  };

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = (
        <div className="columns">
          <div className="column" />
          <div
            className="column is-8"
            style={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            <Spinner />
          </div>{" "}
          <div className="column" />
        </div>
      );
    } else {
      // Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <div className="columns">
            <div className="column" />
            <div className="column is-8">
              <div>
                <p className="title">
                  Welcome{" "}
                  <Link to={`/profile/${profile.handle}`}> {user.name} </Link>{" "}
                </p>{" "}
                <ProfileActions />
                <Experience experience={profile.experience} />{" "}
                <Education education={profile.education} />{" "}
                <div
                  style={{
                    marginBottom: "60px"
                  }}
                >
                  <button
                    onClick={this.onDeleteClick}
                    className="button is-danger is-mt-20"
                  >
                    Delete My Account{" "}
                  </button>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="column" />
          </div>
        );
      } else {
        // User is logged in but has no profile
        dashboardContent = (
          <div>
            <p className="title"> Welcome {user.name} </p>{" "}
            <p> You have not yet setup a profile, please add some info </p>{" "}
            <Link to="/create-profile" className="button">
              Create Profile{" "}
            </Link>{" "}
          </div>
        );
      }
    }
    return <section className="section"> {dashboardContent} </section>;
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, {
  getCurrentProfile,
  deleteAccount
})(Dashboard);
