import React, { Component } from "react";
import { Link } from "react-router-dom";
import defaultImage from "../../images/default-user.png";
import isEmpty from "../../validations/is-empty";

class ProfileSideBar extends Component {
  render() {
    const { profile } = this.props;
    return (
      <div className="card user-profile">
        <div className="hero">
          <div className="hero-body">
            <div className="inner-container" />
            <img
              className="image is-rounded profile-img"
              src={(profile.user && profile.user.avatar) || defaultImage}
              alt={profile.user && profile.user.name}
            />
            <h1 className="title is-4">{profile.user && profile.user.name}</h1>
            <p className="is-size-6">
              {profile.status} at{" "}
              {isEmpty(profile.company) ? null : profile.company}
            </p>
            <p className="is-size-6">
              {isEmpty(profile.location) ? null : profile.location}
            </p>
            {isEmpty(profile.website) ? null : <a className="" href={profile.website} target="_blank"><i className="fas fa-globe fa-2x"></i></a>
            {isEmpty(profile.social && profile.social.twitter) ? null : (<a href={profile.social.twitter} target="_blank"><i className="fas fa-globe fa-2x"></i></a>)}
            <h2 className="subtitle is-6">
              {isEmpty(profile.bio) ? null : profile.bio}
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileSideBar;
