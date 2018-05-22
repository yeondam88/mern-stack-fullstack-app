import React, { Component } from "react";
import CodeIcon from "../../images/code-icon.png";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: "",
    errros: {}
  };

  render() {
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
              <div className="column is-6 is-offset-3">
                <h2 className="title">Register</h2>
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Text input"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Text input"
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
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Text input"
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
                    />
                  </div>
                </div>
                <button className="button button-success">Register</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Register;
