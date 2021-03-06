import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { createProfile } from "../../actions/profileActions";

import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import InputGroup from "../common/InputGroup";
import SelectListGroup from "../common/SelectListGroup";

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

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const profileData = {
      handle: this.state.handle,
      company: this.state.company,
      website: this.state.website,
      location: this.state.location,
      status: this.state.status,
      skills: this.state.skills,
      githubusername: this.state.githubusername,
      bio: this.state.bio,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      linkedin: this.state.linkedin,
      youtube: this.state.youtube,
      instagram: this.state.instagram
    };
    this.props.createProfile(profileData, this.props.history);
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
    // Select options for status
    const options = [
      {
        label: "* Select Professional Status",
        value: "0"
      },
      {
        label: "Developer",
        value: "Developer"
      },
      {
        label: "Junior Developer",
        value: "Junior Developer"
      },
      {
        label: "Senior Developer",
        value: "Senior Developer"
      },
      {
        label: "Developer Manager",
        value: "Developer Manager"
      },
      {
        label: "Student or Learner",
        value: "Student or Learner"
      },
      {
        label: "Intern",
        value: "Intern"
      },
      {
        label: "Founder",
        value: "Founder"
      },
      {
        label: "Engineering Director",
        value: "Engineering Director"
      },
      {
        label: "Other",
        value: "Other"
      }
    ];

    let socialInputs;

    if (displaySocialInputs) {
      socialInputs = (
        <div className="has-margin-bottom-15">
          <InputGroup
            placeholder="Twitter Profile URL"
            name="twitter"
            icon="fab fa-twitter"
            value={twitter}
            onChange={this.onChange}
            errors={errors.twitter}
          />{" "}
          <InputGroup
            placeholder="Facebook Profile URL"
            name="facebook"
            icon="fab fa-facebook"
            value={facebook}
            onChange={this.onChange}
            errors={errors.facebook}
          />{" "}
          <InputGroup
            placeholder="LinkedIn Profile URL"
            name="linkedin"
            icon="fab fa-linkedin"
            value={linkedin}
            onChange={this.onChange}
            errors={errors.linkedin}
          />{" "}
          <InputGroup
            placeholder="Youtube Profile URL"
            name="youtube"
            icon="fab fa-youtube"
            value={youtube}
            onChange={this.onChange}
            errors={errors.youtube}
          />{" "}
          <InputGroup
            placeholder="Instagram Profile URL"
            name="instagram"
            icon="fab fa-instagram"
            value={instagram}
            onChange={this.onChange}
            errors={errors.instagram}
          />{" "}
        </div>
      );
    }
    return (
      <Fragment>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column" />
              <div className="column is-5">
                <h1 className="title"> Create Profile </h1>{" "}
                <h2 className="subtitle">
                  Let 's get some information to make your profile stand out{" "}
                </h2>{" "}
                <p className="info"> *= required fields </p>{" "}
                <form onSubmit={this.onSubmit} className="box profile-form">
                  <TextFieldGroup
                    label="Handle"
                    type="text"
                    placeholder="* Profile Handle"
                    name="handle"
                    value={handle}
                    onChange={this.onChange}
                    error={errors.handle}
                    info="A unique handle for your profile URL. Your full name, company name, nickname"
                  />
                  <SelectListGroup
                    label="Status"
                    options={options}
                    placeholder="* Status"
                    value={status}
                    name="status"
                    onChange={this.onChange}
                    error={errors.status}
                    info="Give us an idea of where you are at in your career."
                  />
                  <TextFieldGroup
                    label="Company"
                    type="text"
                    placeholder="Company"
                    name="company"
                    value={company}
                    onChange={this.onChange}
                    error={errors.company}
                    info="Could be your own company or one you work for"
                  />
                  <TextFieldGroup
                    label="Location"
                    type="text"
                    placeholder="Location"
                    name="location"
                    value={location}
                    onChange={this.onChange}
                    error={errors.location}
                    info="City or city & state suggested (eg. Los Angeles, CA)"
                  />
                  <TextFieldGroup
                    label="Website"
                    type="text"
                    placeholder="https://www.example.com"
                    name="website"
                    value={website}
                    onChange={this.onChange}
                    error={errors.website}
                    info="Write your Portfolio or personal Website"
                  />
                  <TextFieldGroup
                    label="Skills"
                    type="text"
                    placeholder="* Skills"
                    name="skills"
                    value={skills}
                    onChange={this.onChange}
                    error={errors.skills}
                    info="Please use comma separated values (eg. HTML, JavaScript, CSS, Python)"
                  />
                  <TextFieldGroup
                    label="Github Username"
                    type="text"
                    placeholder="github username"
                    name="githubusername"
                    value={githubusername}
                    onChange={this.onChange}
                    error={errors.githubusername}
                    info="If you have Github account, write your username."
                  />
                  <TextAreaFieldGroup
                    label="Bio"
                    placeholder="Short Bio"
                    name="bio"
                    value={bio}
                    onChange={this.onChange}
                    error={errors.bio}
                    info="Tell us a little about yourself"
                  />
                  <div className="buttons">
                    <a
                      className="button is-rounded"
                      onClick={() => {
                        this.setState(prevState => ({
                          displaySocialInputs: !prevState.displaySocialInputs
                        }));
                      }}
                    >
                      <span className="icon">
                        <i className="far fa-thumbs-up" />
                      </span>{" "}
                      <span> Add Social Network Links </span>{" "}
                    </a>{" "}
                    <sup> Optional </sup>{" "}
                  </div>{" "}
                  {socialInputs}{" "}
                  <input
                    style={{
                      width: "100%"
                    }}
                    type="submit"
                    value="Submit"
                    className="button is-primary"
                  />
                </form>{" "}
              </div>{" "}
              <div className="column" />
            </div>{" "}
          </div>{" "}
        </section>{" "}
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

export default connect(mapStateToProps, {
  createProfile
})(withRouter(CreateProfile));
