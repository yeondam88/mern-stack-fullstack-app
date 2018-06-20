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
    const { post, auth, showActions } = this.props;

    return (
      <div className="post-container">
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
            {showActions ? (
              <nav className="level is-mobile">
                <div className="level-left">
                  <div className="level-item">
                    <span className="icon is-small">
                      <Link to={`/post/${post._id}`}>
                        <i className="fas fa-reply" />
                      </Link>{" "}
                    </span>{" "}
                  </div>{" "}
                  <a className="level-item">
                    <span
                      onClick={this.onLikeClick.bind(this, post._id)}
                      className="icon is-small"
                    >
                      <i
                        className={classnames("fas fa-thumbs-up", {
                          "has-text-success": this.findUserLike(post.likes)
                        })}
                      />
                      {post.likes.length}
                    </span>
                  </a>{" "}
                  <a className="level-item">
                    <span
                      onClick={this.onUnLikeClick.bind(this, post._id)}
                      className="icon is-small"
                    >
                      <i className="fas fa-thumbs-down" />
                    </span>{" "}
                  </a>{" "}
                </div>{" "}
              </nav>
            ) : null}{" "}
          </div>{" "}
          {post.user === auth.user.id ? (
            <span
              onClick={this.onDeleteClick.bind(this, post._id)}
              className="icon is-small"
            >
              <i className="fas fa-times" />
            </span>
          ) : null}{" "}
        </article>
      </div>
    );
  }
}

PostItem.defaultProps = {
  showActions: true
};

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
