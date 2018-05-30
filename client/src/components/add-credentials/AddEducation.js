import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";

import { addEducation } from "../../actions/profileActions";

class AddEducation extends Component {
  state = {
    school: "",
    degree: "",
    fieldofstudy: "",
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
    const eduData = {
      school: this.state.school,
      degree: this.state.degree,
      fieldofstudy: this.state.fieldofstudy,
      from: this.state.from,
      to: this.state.to,
      current: this.state.current,
      description: this.state.description
    };

    this.props.addEducation(eduData, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="columns">
        <div className="column" />
        <div className="column is-5">
          <Link to="/dashboard" className="button has-text-grey">
            Go Back{" "}
          </Link>{" "}
          <h1 className="title"> Add Education </h1>{" "}
          <p>Add any school, bootcamp, etc that you have attended</p>{" "}
          <small> * = required fields </small>{" "}
          <form onSubmit={this.onSubmit} className="box profile-form">
            <TextFieldGroup
              placeholder="* School"
              name="school"
              value={this.state.school}
              onChange={this.onChange}
              error={errors.school}
            />{" "}
            <TextFieldGroup
              placeholder="* Degree"
              name="degree"
              value={this.state.degree}
              onChange={this.onChange}
              error={errors.degree}
            />{" "}
            <TextFieldGroup
              placeholder="* Field of Study"
              name="fieldofstudy"
              value={this.state.fieldofstudy}
              onChange={this.onChange}
              error={errors.fieldofstudy}
            />{" "}
            <TextFieldGroup
              name="from"
              label="From Date"
              type="date"
              value={this.state.from}
              onChange={this.onChange}
              error={errors.from}
            />{" "}
            <TextFieldGroup
              name="to"
              label="To Date"
              type="date"
              value={this.state.to}
              onChange={this.onChange}
              error={errors.to}
              disabled={this.state.disabled ? "disabled" : ""}
            />{" "}
            <label htmlFor="current" className="checkbox">
              <input
                type="checkbox"
                name="current"
                value={this.state.current}
                checked={this.state.current}
                onChange={this.onCheck}
                id="current"
                style={{
                  marginRight: "5px",
                  marginBottom: "5px"
                }}
              />
              Current School{" "}
            </label>{" "}
            <TextAreaFieldGroup
              name="description"
              placeholder="Program Description"
              value={this.state.description}
              onChange={this.onChange}
              error={errors.description}
              info="Tell us about the program that you were in"
            />
            <input
              type="submit"
              value="Submit"
              className="button is-primary"
              style={{
                width: "100%"
              }}
            />{" "}
          </form>{" "}
        </div>{" "}
        <div className="column" />
      </div>
    );
  }
}

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, {
  addEducation
})(withRouter(AddEducation));
