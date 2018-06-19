import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PostItem from "../posts/PostItem";
import CommentForm from "./CommentForm";
import CommentFeed from "./CommentFeed";
import Spinner from "../common/Spinner";
import { getPost } from "../../actions/postActions";

class Post extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
  }

  render() {
    const { post, loading } = this.props.post;
    let postContent;

    if (post === null || loading || Object.keys(post).length === 0) {
      postContent = <Spinner />;
    } else {
      postContent = (
        <div>
          <PostItem post={post} showActions={false} />{" "}
          <CommentForm postId={post._id} />{" "}
          <CommentFeed postId={post._id} comments={post.comments} />{" "}
        </div>
      );
    }
    return (
      <div className="section">
        <div className="columns">
          <div className="column" />
          <div className="column is-8">
            <Link to="/feed" className="button is-text">
              Back to Feed{" "}
            </Link>{" "}
            {postContent}{" "}
          </div>{" "}
          <div className="column" />
        </div>{" "}
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  getPost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, {
  getPost
})(Post);
