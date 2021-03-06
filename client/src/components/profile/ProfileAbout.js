import React, { Component } from "react";
import defaultImage from "../../images/default-user.png";
import isEmpty from "../../validations/is-empty";

class ProfileAbout extends Component {
  render() {
    const { profile } = this.props;
    const firstName = profile.user ? profile.user.name.split(" ")[0] : null;
    const skills = profile.skills.map((skill, index) => {
      return (
        <span className="tag" key={index}>
          <i className="fa fa-check" /> {skill}{" "}
        </span>
      );
    });
    return (
      <div className="card featured-banner profile-about">
        <div className="columns is-centered is-margin-auto">
          <div className="column is-12 is-10-fullhd">
            <img
              className="image is-rounded profile-about-img"
              src={(profile.user && profile.user.avatar) || defaultImage}
              alt={profile.user && profile.user.name}
            />{" "}
          </div>{" "}
        </div>{" "}
        <div className="columns">
          <div className="column is-offset-2 is-10">
            <h1>
              {" "}
              {firstName}
              's Bio
            </h1>{" "}
            <p> {isEmpty(profile.bio) ? null : profile.bio} </p>{" "}
            <h3> Skill Set </h3> <div className="tags"> {skills} </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default ProfileAbout;
