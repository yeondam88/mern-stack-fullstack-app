import React, { Component } from "react";
import defaultImage from "../../images/default-user.png";
import isEmpty from "../../validations/is-empty";

class ProfileSideBar extends Component {
  render() {
    const { profile } = this.props;
    return (
      <div className="card featured-banner">
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
            <div className="social-group">
              <p>connecting with</p>
              {isEmpty(profile.website) ? null : (
                <a className="" href={profile.website} target="_blank">
                  <i className="far fa-browser" />
                </a>
              )}
              {isEmpty(profile.social && profile.social.twitter) ? null : (
                <a href={profile.social.twitter} target="_blank">
                  <i className="fab fa-twitter" />
                </a>
              )}
              {isEmpty(profile.social && profile.social.facebook) ? null : (
                <a href={profile.social.facebook} target="_blank">
                  <i className="fab fa-facebook" />
                </a>
              )}
              {isEmpty(profile.social && profile.social.linkedin) ? null : (
                <a href={profile.social.linkedin} target="_blank">
                  <i className="fab fa-linkedin" />
                </a>
              )}
              {isEmpty(profile.social && profile.social.youtube) ? null : (
                <a href={profile.social.youtube} target="_blank">
                  <i className="fab fa-youtube" />
                </a>
              )}
              {isEmpty(profile.social && profile.social.instagram) ? null : (
                <a href={profile.social.instagram} target="_blank">
                  <i className="fab fa-instagram" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileSideBar;
