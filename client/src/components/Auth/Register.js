import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: "",
    errors: {}
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { name, email, password, password2, errors } = this.state;
    return (
      <div className="app-content">
        <div className="hero is-primary is-bold">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-vcentered">
                <div className="column is-two-thirds">
                  <h1 className="title"> Devconnector </h1>{" "}
                  <h2 className="subtitle"> Register today. </h2>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <section className="section has-background is-medium">
          <div className="container">
            <div className="columns">
              <form
                onSubmit={this.handleSubmit}
                className="column is-6 is-offset-3"
              >
                <h2 className="title"> Register </h2>{" "}
                <TextFieldGroup
                  label="Name"
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={this.handleInput}
                  error={errors.name}
                />{" "}
                <TextFieldGroup
                  label="Email"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={this.handleInput}
                  error={errors.email}
                />{" "}
                <TextFieldGroup
                  label="Password"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={this.handleInput}
                  error={errors.password}
                />{" "}
                <TextFieldGroup
                  label="Password Confirm"
                  type="password"
                  placeholder="Confirm Password"
                  name="password2"
                  value={password2}
                  onChange={this.handleInput}
                  error={errors.password2}
                />{" "}
                <button type="submit" className="button button-success">
                  Register{" "}
                </button>{" "}
              </form>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, {
  registerUser
})(withRouter(Register));
