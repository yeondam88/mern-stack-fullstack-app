import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import TextFieldGroup from "../common/TextFieldGroup";

class CreateProfile extends Component {
  state = {
    displaySocialInputs: false,
    handle: "",
    company: "",
    website: "",
    location: "",
    status: "",
    skills: "",
    githubusername: "",
    bio: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    instagram: "",
    errors: {}
  };

  render() {
    const {
      displaySocialInputs,
      handle,
      company,
      website,
      location,
      status,
      skills,
      githubusername,
      bio,
      twitter,
      facebook,
      linkedin,
      youtube,
      instagram,
      errors
    } = this.state;
    return (
      <Fragment>
        <section className="hero is-danger is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Create Profile</h1>
              <h2 className="subtitle">
                Let's get some information to make your profile stand out
              </h2>
              <p className="info">*= required fields</p>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <TextFieldGroup
              label="Name"
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={this.handleInput}
              error={errors.name}
            />
            <TextFieldGroup
              label="Name"
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={this.handleInput}
              error={errors.name}
            />
            <TextFieldGroup
              label="Name"
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={this.handleInput}
              error={errors.name}
            />
          </div>
        </section>
      </Fragment>
    );
  }
}

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, {})(CreateProfile);
