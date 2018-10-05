import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import { addComment } from "../../actions/postActions";

class CommentForm extends Component {
  state = {
    text: "",
    errors: {},
    submitted: false
  };

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({
        errors: newProps.errors,
        submitted: false
      });
    }
  }

  onSubmit = e => {
    e.preventDefault();
    console.log("Submitted..");
    const { user } = this.props.auth;
    const { postId } = this.props;

    const newComment = {
      text: this.state.text,
      name: user.name,
      avatar: user.avatar
    };

    this.props.addComment(postId, newComment);

    this.setState({
      text: "",
      submitted: true,
      errors: {}
    });

    this.removeMessage();
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  removeMessage = () => {
    setTimeout(() => {
      this.setState({
        submitted: false
      });
    }, 3000);
  };

  render() {
    const { text, errors, submitted } = this.state;
    const { user } = this.props.auth;
    let notification;
    if (submitted) {
      if (errors) {
        notification = null;
      } else {
        notification = (
          <div className="notification is-success"> Post submitted.. </div>
        );
      }
    }

    return (
      <div className="comment-form">
        {" "}
        {notification}{" "}
        <form onSubmit={this.onSubmit} className="media">
          <figure className="media-left">
            <p className="image is-64x64">
              <img src={user.avatar} alt="avatar" />
            </p>
          </figure>
          <div className="media-content">
            <div className="field">
              <TextAreaFieldGroup
                placeholder="Reply to Post"
                name="text"
                value={text}
                onChange={this.onChange}
                error={errors.text}
              />
            </div>
            <nav className="level">
              <div className="level-left">
                <div className="level-item">
                  <button type="submit" className="button is-info">
                    Submit
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </form>
      </div>
    );
  }
}

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  {
    addComment
  }
)(CommentForm);
