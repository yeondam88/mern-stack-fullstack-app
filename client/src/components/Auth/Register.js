import React, { Component } from "react";
import CodeIcon from "../../images/code-icon.png";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: "",
    avatar: "",
    errros: {}
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { name, email, password, password2, avatar } = this.state;
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
                      placeholder="Text input"
                      name="name"
                      value={name}
                      onChange={this.handleInput}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      className="input"
                      type="email"
                      name="email"
                      placeholder="Text input"
                      value={email}
                      onChange={this.handleInput}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input
                      className="input"
                      type="password"
                      placeholder="Text input"
                      name="password"
                      value={password}
                      onChange={this.handleInput}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password Confirm</label>
                  <div className="control">
                    <input
                      className="input"
                      type="password"
                      placeholder="Text input"
                      name="password2"
                      value={password2}
                      onChange={this.handleInput}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Avatar</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Text input"
                      name="avatar"
                      value={avatar}
                      onChange={this.handleInput}
                    />
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
