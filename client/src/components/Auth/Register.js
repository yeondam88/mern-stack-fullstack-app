import React, { Component } from "react";
import CodeIcon from "../../images/code-icon.png";
import axios from "axios";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: "",
    errors: {}
  };

  register = user => {
    axios
      .post("/api/users/register", user)
      .then(res => console.log(res.data))
      .catch(err => this.setState({ errors: err.response.data }));
  };

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

    this.register(newUser);
  };

  render() {
    const { name, email, password, password2, avatar, errors } = this.state;
    return (
      <div className="app-content">
        <div className="hero is-primary is-bold">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-vcentered">
                <div className="column is-two-thirds">
                  <h1 className="title">Devconnector</h1>
                  <h2 className="subtitle">Register today.</h2>
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
                <h2 className="title">Register</h2>
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Name"
                      name="name"
                      value={name}
                      onChange={this.handleInput}
                    />
                    {errors.name && (
                      <p className="has-text-danger">{errors.name}</p>
                    )}
                  </div>
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      className="input"
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={email}
                      onChange={this.handleInput}
                    />
                    {errors.email && (
                      <p className="has-text-danger">{errors.email}</p>
                    )}
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input
                      className="input"
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={this.handleInput}
                    />
                    {errors.password && (
                      <p className="has-text-danger">{errors.password}</p>
                    )}
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password Confirm</label>
                  <div className="control">
                    <input
                      className="input"
                      type="password"
                      placeholder="Confirm Password"
                      name="password2"
                      value={password2}
                      onChange={this.handleInput}
                    />
                    {errors.password2 && (
                      <p className="has-text-danger">{errors.password2}</p>
                    )}
                  </div>
                </div>
                <button type="submit" className="button button-success">
                  Register
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Register;
