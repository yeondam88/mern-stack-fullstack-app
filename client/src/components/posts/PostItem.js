import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { Link } from "react-router-dom";

class PostItem extends Component {
  render() {
    const { post, auth } = this.props;

    return (
      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <img src={post.avatar} />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{post.name}</strong> <small>@{post.name}</small>{" "}
              <small>{post.date}</small>
              <br />
              {post.text}
            </p>
          </div>
          <nav className="level is-mobile">
            <div className="level-left">
              <a className="level-item">
                <span className="icon is-small">
                  <i className="fas fa-reply" />
                </span>
              </a>
              <a className="level-item">
                <span className="icon is-small">
                  <i className="fas fa-retweet" />
                </span>
              </a>
              <a className="level-item">
                <span className="icon is-small">
                  <i className="fas fa-heart" />
                </span>
              </a>
            </div>
          </nav>
        </div>
        {auth.user.id === post.user ? (
          <div class="media-right">
            <button class="delete" />
          </div>
        ) : null}
      </article>
    );
  }
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PostItem);
