import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import { addPost } from "../../actions/postActions";

class PostForm extends Component {
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
    const newPost = {
      text: this.state.text,
      name: user.name,
      avatar: user.avatar
    };

    this.props.addPost(newPost);

    this.setState({
      text: "",
      submitted: true
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
    return (
      <div>
        {submitted && (
          <div className="notification is-success">Post submitted..</div>
        )}
        <div className="message is-info">
          <p className="message-header">Say Something...</p>
          <div className="message-body">
            <form onSubmit={this.onSubmit}>
              <TextAreaFieldGroup
                placeholder="Create a post"
                name="text"
                value={text}
                onChange={this.onChange}
                error={errors.text}
              />
              <button type="submit" className="button is-info is-rounded">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { addPost })(PostForm);
