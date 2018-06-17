import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { deletePost, addLike, removeLike } from "../../actions/postActions";

class PostItem extends Component {
  onDeleteClick = postId => {
    this.props.deletePost(postId);
  };

  onLikeClick = id => {
    this.props.addLike(id);
  };

  onUnLikeClick = id => {
    this.props.removeLike(id);
  };

  findUserLike = likes => {
    const { auth } = this.props;
    if (likes.filter(like => like.user === auth.user.id).length > 0) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    const { post, auth } = this.props;

    return (
      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <img src={post.avatar} />{" "}
          </p>{" "}
        </figure>{" "}
        <div className="media-content">
          <div className="content">
            <p>
              <strong> {post.name} </strong> <small>@{post.name}</small>{" "}
              <small> {post.date} </small> <br /> {post.text}{" "}
            </p>{" "}
          </div>{" "}
          <nav className="level is-mobile">
            <div className="level-left">
              <a className="level-item">
                <span className="icon is-small">
                  <i className="fas fa-reply" />
                </span>{" "}
              </a>{" "}
              <a className="level-item">
                <span className="icon is-small">
                  <i className="fas fa-retweet" />
                </span>{" "}
              </a>{" "}
              <a className="level-item">
                <span
                  onClick={this.onLikeClick.bind(this, post._id)}
                  className="icon is-small"
                >
                  <i
                    className={classnames("fas fa-thumbs-up", {
                      "has-text-success": this.findUserLike(post.likes)
                    })}
                  />{" "}
                  {post.likes.length}
                </span>
              </a>
              <a className="level-item">
                <span
                  onClick={this.onUnLikeClick.bind(this, post._id)}
                  className="icon is-small"
                >
                  <i className="fas fa-thumbs-down" />
                </span>
              </a>
            </div>{" "}
          </nav>{" "}
        </div>{" "}
        {auth.user.id === post.user ? (
          <div class="media-right">
            <button
              type="button"
              onClick={this.onDeleteClick.bind(this, post._id)}
              class="delete"
            />
          </div>
        ) : null}{" "}
      </article>
    );
  }
}

PostItem.propTypes = {
  deletePost: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {
  deletePost,
  addLike,
  removeLike
})(PostItem);
