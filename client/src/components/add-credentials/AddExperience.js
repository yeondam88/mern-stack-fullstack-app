import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";

import { addExperience } from "../../actions/profileActions";

class AddExperience extends Component {
  state = {
    company: "",
    title: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: "",
    errors: {},
    disabled: false
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

  onCheck = e => {
    this.setState({
      disabled: !this.state.disabled,
      current: !this.state.current
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const expData = {
      company: this.state.company,
      title: this.state.title,
      location: this.state.location,
      from: this.state.from,
      to: this.state.to,
      current: this.state.current,
      description: this.state.description
    };

    this.props.addExperience(expData, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="columns">
        <div className="column" />
        <div className="column is-5">
          <Link to="/dashboard" className="button has-text-grey">
            Go Back
          </Link>
          <h1 className="title">Add Experience</h1>
          <p>
            Add any job or position that you have had in the past or current
          </p>
          <small>* = required fields</small>
          <form onSubmit={this.onSubmit} className="box profile-form">
            <TextFieldGroup
              placeholder="* Company"
              name="company"
              value={this.state.company}
              onChange={this.onChange}
              error={errors.company}
            />
            <TextFieldGroup
              placeholder="* Job Title"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
              error={errors.title}
            />
            <TextFieldGroup
              placeholder="Location"
              name="location"
              value={this.state.location}
              onChange={this.onChange}
              error={errors.location}
            />
            <TextFieldGroup
              name="from"
              label="From Date"
              type="date"
              value={this.state.from}
              onChange={this.onChange}
              error={errors.from}
            />
            <TextFieldGroup
              name="to"
              label="To Date"
              type="date"
              value={this.state.to}
              onChange={this.onChange}
              error={errors.to}
              disabled={this.state.disabled ? "disabled" : ""}
            />
            <label htmlFor="current" className="checkbox">
              <input
                type="checkbox"
                name="current"
                value={this.state.current}
                checked={this.state.current}
                onChange={this.onCheck}
                id="current"
                style={{ marginRight: "5px", marginBottom: "5px" }}
              />
              Current Job
            </label>
            <TextAreaFieldGroup
              name="description"
              placeholder="Job Description"
              value={this.state.description}
              onChange={this.onChange}
              error={errors.description}
              info="Tell us about the position"
            />
            <input
              type="submit"
              value="Submit"
              className="button is-primary"
              style={{ width: "100%" }}
            />
          </form>
        </div>
        <div className="column" />
      </div>
    );
  }
}

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, { addExperience })(
  withRouter(AddExperience)
);
