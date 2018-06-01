import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../common/Spinner";
import ProfileItem from "./ProfileItem";
import { getProfiles } from "../../actions/profileActions";

class Profiles extends Component {
  componentDidMount() {
    this.props.getProfiles();
  }
  render() {
    const { profiles, loading } = this.props.profile;
    let profileItems;

    if (profiles === null || loading) {
      profileItems = <Spinner />;
    } else {
      if (profiles.length > 0) {
        <ProfileItem profiles={profiles} />;
      } else {
        profileItems = <h4>No profiles found...</h4>;
      }
    }
    return (
      <div className="columns">
        <div className="column" />
        <div className="column is-5">
          <h1 className="title">Developers Profiles</h1>
          <p className="subtitle">Browse and connect with developers</p>
          {profileItems}
        </div>
        <div className="column" />
      </div>
    );
  }
}

Profiles.propTypes = {
  profile: PropTypes.object.isRequired,
  getProfiles: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
