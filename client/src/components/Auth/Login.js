import React, { Component } from "react";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
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
                onSumbit={this.handleSubmit}
                className="column is-6 is-offset-3"
              >
                <h2 className="title">Sign in</h2>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      className="input"
                      type="email"
                      placeholder="Email"
                      name="email"
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
                      placeholder="Password"
                      name="password"
                      onChange={this.handleInput}
                    />
                  </div>
                </div>
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

export default Login;
