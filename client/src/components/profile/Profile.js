import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import ProfileAbout from "./ProfileAbout";
import ProfileSideBar from "./ProfileSideBar";
import ProfileCreds from "./ProfileCreds";
import ProfileGithub from "./ProfileGithub";
import Spinner from "../common/Spinner";

import { getProfileByHandle } from "../../actions/profileActions";

class Profile extends Component {
  componentDidMount() {
    if (this.props.match.params.handle) {
      this.props.getProfileByHandle(this.props.match.params.handle);
    }
  }

  render() {
    const { profile, loading } = this.props.profile;
    let profileContent;

    if (profile === null || loading) {
      profileContent = <Spinner />;
    } else {
      profileContent = (
        <div className="section">
          <div className="container">
            <Link to="/developers" className="">
              Go Back{" "}
            </Link>{" "}
            <div className="columns is-multiline">
              <div className="column is-4">
                <ProfileSideBar profile={profile} />
                <div />{" "}
              </div>{" "}
              <div className="column is-8">
                <ProfileAbout profile={profile} />
              </div>
              <div className="column is-6">
                <ProfileCreds profile={profile} />
              </div>
              <div className="column is-6">
                <ProfileGithub profile={profile} />
              </div>
            </div>
          </div>
        </div>
      );
    }
    return <Fragment>{profileContent}</Fragment>;
  }
}

Profile.propTypes = {
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, {
  getProfileByHandle
})(Profile);
