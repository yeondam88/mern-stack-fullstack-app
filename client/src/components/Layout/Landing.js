import React, { Component, Fragment } from "react";
import CodeImg from "../../images/lighthouse.jpg";
import icon1 from "../../images/offices.svg";
import icon2 from "../../images/process.svg";
import icon3 from "../../images/coding.svg";

class Landing extends Component {
  render() {
    return (
      <Fragment>
        <section className="is-hero section">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-6 is-5-fullhd is-offset-1-fullhd">
                <div className="section-header">
                  <h1 className="title is-spaced">Devconnector</h1>
                  <h2 className="subtitle is-3">
                    Socail Network for Developer
                  </h2>
                  <div className="field is-grouped">
                    <div className="control">
                      <a className="button is-primary is-medium">
                        Register
                      </a>
                    </div>
                    <div className="control">
                      <a className="button is-primary is-medium">
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
        </section>
        <section className="is-medium has-background is-usp">
          <div className="container">
            <div className="columns">
              <div className="column is-4">
                <div className="card is-usp">
                  <div style={{ textAlign: "center" }}>
                    <img src={icon1} alt="logo" width="50px" />
                  </div>

                  <hr className="spacer is-1" />
                  <h3 className="title is-4 is-spaced">Connection</h3>
                  <p className="subtitle is-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    dicta quaerat est? Dolore, recusandae voluptatum ad nihil
                    quod nesciunt nulla quidem magni dignissimos laudantium
                    alias error dolorum obcaecati est eius.
                  </p>
                </div>
              </div>
              <div className="column is-4">
                <div className="card is-usp">
                  <div style={{ textAlign: "center" }}>
                    <img src={icon2} alt="logo" width="50px" />
                  </div>
                  <hr className="spacer is-1" />
                  <h3 className="title is-4 is-spaced">Connection</h3>
                  <p className="subtitle is-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    dicta quaerat est? Dolore, recusandae voluptatum ad nihil
                    quod nesciunt nulla quidem magni dignissimos laudantium
                    alias error dolorum obcaecati est eius.
                  </p>
                </div>
              </div>
              <div className="column is-4">
                <div className="card is-usp">
                  <div style={{ textAlign: "center" }}>
                    <img src={icon3} alt="logo" width="50px" />
                  </div>
                  <hr className="spacer is-1" />
                  <h3 className="title is-4 is-spaced">Connection</h3>
                  <p className="subtitle is-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    dicta quaerat est? Dolore, recusandae voluptatum ad nihil
                    quod nesciunt nulla quidem magni dignissimos laudantium
                    alias error dolorum obcaecati est eius.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Landing;
