import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

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

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
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
    return (
      <Fragment>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column" />
              <div className="column is-5">
                <h1 className="title">Create Profile</h1>
                <h2 className="subtitle">
                  Let's get some information to make your profile stand out
                </h2>
                <p className="info">*= required fields</p>
                <form onSubmit={this.onSubmit} className="box profile-form">
                  <TextFieldGroup
                    label="Name"
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
                    label="Skills"
                    type="text"
                    placeholder="* Skills"
                    name="skills"
                    value={skills}
                    onChange={this.onChange}
                    error={errors.skills}
                    info="Please use comma separated values (eg. HTML, JavaScript, CSS, Python)"
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
                </form>
              </div>
              <div className="column" />
            </div>
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
