import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import icon1 from "../../images/offices.svg";
import icon2 from "../../images/process.svg";
import icon3 from "../../images/coding.svg";
import bg from "../../images/devconnector-bg.jpg";
import devObj from "../../images/devObj.png";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  render() {
    return (
      <Fragment>
        <section className="section">
          <div
            className="main-bg"
            style={{
              background: `url(${bg})`,
              backgroundSize: "cover",
              filter: "grayscale(100%)"
            }}
          />
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-12">
                <Fade bottom delay={1000}>
                  <div className="section-header">
                    <h1
                      className="title is-spaced"
                      style={{
                        width: "320px",
                        backgroundColor: "rgba(0,0,0,0.7)",
                        padding: "10px"
                      }}
                    >
                      {" "}
                      Devconnector{" "}
                    </h1>{" "}
                    <h2
                      className="subtitle is-3"
                      style={{
                        width: "620px",
                        backgroundColor: "rgba(0,0,0,0.7)",
                        padding: "10px"
                      }}
                    >
                      Social Network for Developer{" "}
                    </h2>{" "}
                    <div className="field is-grouped">
                      <div className="control">
                        <Link
                          to="/register"
                          className="button is-primary is-medium"
                        >
                          {" "}
                          Register{" "}
                        </Link>{" "}
                      </div>{" "}
                      <div className="control">
                        <Link
                          to="/login"
                          className="button is-primary is-medium"
                        >
                          {" "}
                          Sign in{" "}
                        </Link>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </Fade>
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section
          className="is-medium has-background is-usp"
          style={{ marginTop: "10rem" }}
        >
          <div className="container">
            <div className="columns">
              <div className="column is-4">
                <Fade bottom delay={1200}>
                  <div className="card is-usp user-profile landing-card">
                    <div
                      style={{
                        textAlign: "center"
                      }}
                    >
                      <img src={icon1} alt="logo" width="50px" />
                    </div>{" "}
                    <hr className="spacer is-1" />
                    <h3 className="title is-4 is-spaced"> Connection </h3>{" "}
                    <p className="subtitle is-5">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.In
                      dicta quaerat est ? Dolore, recusandae voluptatum ad nihil
                      quod nesciunt nulla quidem magni dignissimos laudantium
                      alias error dolorum obcaecati est eius.{" "}
                    </p>{" "}
                  </div>{" "}
                </Fade>
              </div>{" "}
              <div className="column is-4">
                <Fade bottom delay={1400}>
                  <div className="card is-usp user-profile landing-card">
                    <div
                      style={{
                        textAlign: "center"
                      }}
                    >
                      <img src={icon2} alt="logo" width="50px" />
                    </div>{" "}
                    <hr className="spacer is-1" />
                    <h3 className="title is-4 is-spaced"> Connection </h3>{" "}
                    <p className="subtitle is-5">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.In
                      dicta quaerat est ? Dolore, recusandae voluptatum ad nihil
                      quod nesciunt nulla quidem magni dignissimos laudantium
                      alias error dolorum obcaecati est eius.{" "}
                    </p>{" "}
                  </div>{" "}
                </Fade>
              </div>{" "}
              <div className="column is-4">
                <Fade bottom delay={1600}>
                  <div className="card is-usp user-profile landing-card">
                    <div
                      style={{
                        textAlign: "center"
                      }}
                    >
                      <img src={icon3} alt="logo" width="50px" />
                    </div>{" "}
                    <hr className="spacer is-1" />
                    <h3 className="title is-4 is-spaced"> Connection </h3>{" "}
                    <p className="subtitle is-5">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.In
                      dicta quaerat est ? Dolore, recusandae voluptatum ad nihil
                      quod nesciunt nulla quidem magni dignissimos laudantium
                      alias error dolorum obcaecati est eius.{" "}
                    </p>{" "}
                  </div>{" "}
                </Fade>
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section
          className="container"
          style={{ marginTop: "10rem", marginBottom: "10rem" }}
        >
          <Slide left>
            <div className="columns">
              <div className="column is-8">
                <img
                  src="http://source.unsplash.com/random/900x600"
                  alt="random bg"
                />
              </div>
              <div className="column is-4">
                <div className="banner-content">
                  <h1>Devconnector</h1>
                  <p>Help us to connect to the world</p>
                </div>
              </div>
            </div>
          </Slide>
        </section>
        <section
          className="container"
          style={{ marginTop: "10rem", marginBottom: "10rem" }}
        >
          <Slide right>
            <div className="columns">
              <div className="column is-4">
                <div className="banner-content">
                  <h1>Devconnector</h1>
                  <p>Help us to connect to the world</p>
                </div>
              </div>
              <div className="column is-8">
                <img src={devObj} alt="random bg" />
              </div>
            </div>
          </Slide>
        </section>
        <section className="container connect">
          <Fade bottom>
            <h2>Connect</h2>
            <div className="social-container">
              <a
                href="https://www.facebook.com/yeondam.park"
                rel="noopener"
                target="_blank"
              >
                <div className="social-item">
                  <i class="fab fa-facebook-f" />
                </div>
              </a>
              <a
                href="https://www.twitter.com/lloydpark88"
                rel="noopener"
                target="_blank"
              >
                <div className="social-item">
                  <i class="fab fa-twitter" />
                </div>
              </a>
              <a
                href="https://www.github.com/yeondam88"
                rel="noopener"
                target="_blank"
              >
                <div className="social-item">
                  <i class="fab fa-github" />
                </div>
              </a>
            </div>
          </Fade>
        </section>
      </Fragment>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(Landing);
