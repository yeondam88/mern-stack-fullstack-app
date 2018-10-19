import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import icon1 from "../../images/social_banner_4.svg";
import icon2 from "../../images/social_banner_2.svg";
import icon3 from "../../images/social_banner_3.svg";
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
          style={{ marginTop: "13rem" }}
        >
          <div className="container">
            <div className="columns">
              <div className="column is-4">
                <Fade bottom delay={1200}>
                  <div className="card is-usp user-profile landing-card">
                    <div
                      style={{
                        textAlign: "center",
                        minHeight: "300px"
                      }}
                    >
                      <img src={icon1} alt="logo" />
                    </div>{" "}
                    <h2 className="title is-3 is-spaced">
                      {" "}
                      Awesome dashboard{" "}
                    </h2>{" "}
                    <p className="subtitle is-5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam egestas vel mi quis euismod. Donec blandit
                      porttitor turpis. Curabitur vestibulum dignissim diam, id
                      varius neque vulputate vitae.
                    </p>{" "}
                  </div>{" "}
                </Fade>
              </div>{" "}
              <div className="column is-4">
                <Fade bottom delay={1400}>
                  <div className="card is-usp user-profile landing-card">
                    <div
                      style={{
                        textAlign: "center",
                        minHeight: "300px"
                      }}
                    >
                      <img src={icon2} alt="logo" />
                    </div>{" "}
                    <h2 className="title is-3 is-spaced">
                      {" "}
                      Connect With Developers{" "}
                    </h2>{" "}
                    <p className="subtitle is-5">
                      Aliquam luctus enim ac ex maximus congue. Nullam quis
                      massa nec diam eleifend volutpat. Sed tempus tristique
                      risus eget dapibus. Vivamus finibus sed dui at pretium.
                      Donec et egestas libero.
                    </p>{" "}
                  </div>{" "}
                </Fade>
              </div>{" "}
              <div className="column is-4">
                <Fade bottom delay={1600}>
                  <div className="card is-usp user-profile landing-card">
                    <div
                      style={{
                        textAlign: "center",
                        maxHeight: "300px"
                      }}
                    >
                      <img src={icon3} alt="logo" />
                    </div>{" "}
                    <h2 className="title is-3 is-spaced">
                      {" "}
                      Building applications{" "}
                    </h2>{" "}
                    <p className="subtitle is-5">
                      Proin pulvinar tincidunt varius. Morbi tempus sem sapien,
                      vel blandit diam convallis vel. Aliquam erat volutpat.
                      Praesent luctus, justo non mollis vulputate, eros massa
                      convallis leo.
                    </p>{" "}
                  </div>{" "}
                </Fade>
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>
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
        <section
          className="is-medium has-background is-usp"
          style={{ marginTop: "13rem" }}
        >
          <h2 className="title is-2 is-spaced" style={{ textAlign: "center" }}>
            Find an Events
          </h2>
          <div className="container" style={{ paddingBottom: "6rem" }}>
            <div className="columns">
              <div className="column is-3">
                <Fade bottom delay={1200}>
                  <div
                    className="card is-usp user-profile landing-card"
                    style={{ padding: "0" }}
                  >
                    <div
                      className="card-bg"
                      style={{
                        textAlign: "center",
                        minHeight: "300px",
                        position: "relative",
                        background:
                          "url(https://source.unsplash.com/600x400/?event)"
                      }}
                    />{" "}
                    <div className="card-content">
                      <h2 className="title is-3 is-spaced"> Local Event </h2>{" "}
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. A eligendi soluta nulla asperiores velit ullam
                        saepe corrupti vel.
                      </p>
                    </div>
                  </div>{" "}
                </Fade>
              </div>{" "}
              <div className="column is-3">
                <Fade bottom delay={1400}>
                  <div
                    className="card is-usp user-profile landing-card"
                    style={{ padding: "0" }}
                  >
                    <div
                      style={{
                        textAlign: "center",
                        minHeight: "300px"
                      }}
                    >
                      <div
                        className="card-bg"
                        style={{
                          textAlign: "center",
                          minHeight: "300px",
                          position: "relative",
                          background:
                            "url(https://source.unsplash.com/600x400/?beach)"
                        }}
                      />
                    </div>{" "}
                    <div className="card-content">
                      <h2 className="title is-3 is-spaced"> Conferences</h2>{" "}
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. A eligendi soluta nulla asperiores velit ullam
                        saepe corrupti vel.
                      </p>
                    </div>
                  </div>{" "}
                </Fade>
              </div>{" "}
              <div className="column is-3">
                <Fade bottom delay={1600}>
                  <div
                    className="card is-usp user-profile landing-card"
                    style={{ padding: "0" }}
                  >
                    <div
                      style={{
                        textAlign: "center",
                        maxHeight: "300px"
                      }}
                    >
                      <div
                        className="card-bg"
                        style={{
                          textAlign: "center",
                          minHeight: "300px",
                          position: "relative",
                          background:
                            "url(https://source.unsplash.com/600x400/?car)"
                        }}
                      />
                    </div>{" "}
                    <div className="card-content">
                      <h2 className="title is-3 is-spaced"> Hakcerthon</h2>{" "}
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. A eligendi soluta nulla asperiores velit ullam
                        saepe corrupti vel.
                      </p>
                    </div>
                  </div>{" "}
                </Fade>
              </div>{" "}
              <div className="column is-3">
                <Fade bottom delay={1600}>
                  <div
                    className="card is-usp user-profile landing-card"
                    style={{ padding: "0" }}
                  >
                    <div
                      style={{
                        textAlign: "center",
                        maxHeight: "300px"
                      }}
                    >
                      <div
                        className="card-bg"
                        style={{
                          textAlign: "center",
                          minHeight: "300px",
                          position: "relative",
                          background:
                            "url(https://source.unsplash.com/600x400/?music)"
                        }}
                      />
                    </div>{" "}
                    <div className="card-content">
                      <h2 className="title is-3 is-spaced"> Career Event</h2>{" "}
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. A eligendi soluta nulla asperiores velit ullam
                        saepe corrupti vel.
                      </p>
                    </div>
                  </div>{" "}
                </Fade>
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>
        <section className="container connect" style={{ marginTop: "13rem" }}>
          <Fade bottom>
            <h2>Connect</h2>
            <div className="social-container">
              <a
                href="https://www.facebook.com/yeondam.park"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="social-item">
                  <i className="fab fa-facebook-f" />
                </div>
              </a>
              <a
                href="https://www.twitter.com/lloydpark88"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="social-item">
                  <i className="fab fa-twitter" />
                </div>
              </a>
              <a
                href="https://www.github.com/yeondam88"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="social-item">
                  <i className="fab fa-github" />
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
