import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteComment } from "../../actions/postActions";

class CommentItem extends Component {
  onDeleteComment = id => {
    this.props.deleteComment(id);
  };

  render() {
    const { comment, postId, auth } = this.props;

    return (
      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <img src={comment.avatar} />{" "}
          </p>{" "}
        </figure>{" "}
        <div className="media-content">
          <div className="content">
            <p>
              <strong> {comment.name} </strong> <small>@{comment.name}</small>{" "}
              <small> {comment.date} </small> <br /> {comment.text}{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
        <div className="media-right">
          {comment.user === auth.user.id ? (
            <span
              onClick={this.onDeleteComment.bind(this, comment._id)}
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
