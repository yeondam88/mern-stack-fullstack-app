import React, { Component } from "react";
import CodeImg from "../../images/code-icon.png";

class Landing extends Component {
  render() {
    return (
      <div className="is-hero section">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-6 is-5-fullhd is-offset-1-fullhd">
              <div className="section-header">
                <h1 className="title is-spaced">Devconnector</h1>
                <h2 className="subtitle is-3">Socail Network for Developer</h2>
                <div className="field is-grouped">
                  <div className="control">
                    <a href="#" className="button is-primary is-medium">
                      Register
                    </a>
                  </div>
                  <div className="control">
                    <a href="#" className="button is-primary is-medium">
                      Sign in
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-6">
              <div className="section-media">
                <img src={CodeImg} alt="code" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
