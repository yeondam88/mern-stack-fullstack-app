import React, { Component } from "react";
import PropTypes from "prop-types";
import defaultImage from "../../images/default-user.png";
import isEmpty from "../../validations/is-empty";

class ProfileAbout extends Component {
  render() {
    const { profile } = this.props;
    const firstName = profile.user && profile.user.name.trim().split(" ")[0];
    const skills = profile.skills.map((skill, index) => {
      return (
        <span className="tag" key={index}>
          <i className="fa fa-check" /> {skill}
        </span>
      );
    });
    return (
      <div className="card user-profile profile-about">
        <div className="columns is-centered">
          <div className="column is-12 is-10-fullhd">
            <img
              className="image is-rounded profile-about-img"
              src={(profile.user && profile.user.avatar) || defaultImage}
              alt={profile.user && profile.user.name}
            />
            <h1>{firstName}'s Bio</h1>
            <p>{isEmpty(profile.bio) ? null : profile.bio}</p>
            <div className="tags">{skills}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileAbout;
