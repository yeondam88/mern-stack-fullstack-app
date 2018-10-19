import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Fade from "react-reveal/Fade";

import icon1 from "../../images/social_banner_4.svg";
import icon2 from "../../images/social_banner_2.svg";
import icon3 from "../../images/social_banner_3.svg";
import bg from "../../images/devconnector-bg.jpg";

import section1 from "../../images/section_banner_1.svg";
import section2 from "../../images/section_banner_3.svg";
import social_media from "../../images/social_media_img.svg";

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
          <div className="columns">
            <div className="column is-7">
              <img src={section1} alt="random bg" />
            </div>
            <div className="column is-5">
              <div className="banner-content">
                <h2 className="title is-1">Open Source</h2>
                <p style={{ width: "60%", textAlign: "center" }}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fugiat minima ut at! Nisi placeat temporibus dolorem voluptate
                  architecto, vero possimus cumque? Labore cumque ab dolorum
                  est. Eum soluta sunt neque?
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className="container"
          style={{ marginTop: "10rem", marginBottom: "10rem" }}
        >
          <div className="columns">
            <div className="column is-8">
              <div className="banner-content">
                <h2 className="title is-1">Built for Developers</h2>
                <p style={{ width: "50%", textAlign: "center" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis accusantium aliquid consectetur similique
                  repellendus accusamus minus illo.
                </p>
              </div>
            </div>
            <div className="column is-4">
              <img src={section2} alt="random bg" />
            </div>
          </div>
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
        <section className="container connect" style={{ marginTop: "5rem" }}>
          <img
            src={social_media}
            alt="social media"
            style={{ height: "300px" }}
          />
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
