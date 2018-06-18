import React, { Component } from "react";
import PropTypes from "prop-types";
import { connet } from "react-redux";
import { deleteComment } from "../../actions/postActions";

class CommentItem extends Component {
  render() {
    const { comment, postId, auth } = this.props;

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
                    {post.likes.length}{" "}
                  </span>{" "}
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
          ) : null}
        </div>{" "}
        <div className="media-right">
          {post.user === auth.user.id ? (
            <span
              onClick={this.onDeleteClick.bind(this, post._id)}
              className="icon is-small"
            >
              <i className="fas fa-times" />
            </span>
          ) : null}
        </div>
      </article>
    );
  }
}

CommentItem.propTypes = {
  auth: PropTypes.object.isRequired,
  comment: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  deleteComment: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
