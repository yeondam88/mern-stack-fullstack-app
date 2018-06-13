import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PostForm from "./PostForm";
import Spinner from "../common/Spinner";

class Posts extends Component {
  render() {
    return (
      <div className="feed">
        <div className="section">
          <div className="container">
            <div className="columns">
              <div className="column" />
              <div className="column is-8">
                <PostForm />
              </div>
              <div className="column" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Posts;
