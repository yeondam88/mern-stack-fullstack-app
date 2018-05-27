import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { loginUser } from "../../actions/authActions";
import { connect } from "react-redux";
import classnames from "classnames";
import TextFieldGroup from "../common/TextFieldGroup";

class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(user);
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { email, password, errors } = this.state;
    return (
      <div className="app-content">
        <div className="hero is-primary is-bold">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-vcentered">
                <div className="column is-two-thirds">
                  <h1 className="title">Devconnector</h1>
                  <h2 className="subtitle">Welcome Back.</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="section has-background is-medium">
          <div className="container">
            <div className="columns">
              <form
                onSubmit={this.handleSubmit}
                className="column is-6 is-offset-3"
              >
                <h2 className="title">Sign in</h2>
                <TextFieldGroup
                  label="Email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={this.handleInput}
                  placeholder="Email"
                  error={errors.email}
                />

                <TextFieldGroup
                  label="Password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={this.handleInput}
                  placeholder="Password"
                  error={errors.password}
                />
                <button type="submit" className="button button-success">
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(withRouter(Login));
