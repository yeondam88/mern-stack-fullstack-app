import React, { Component } from "react";
import { Link } from "react-router-dom";

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
              src={profile.user.avatar}
              alt={profile.user.name}
            />
            <h1 className="title is-4">{profile.user.name}</h1>
            <h2 className="subtitle is-6">{profile.bio}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileSideBar;
