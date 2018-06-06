import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class ProfileGithub extends Component {
  state = {
    github: []
  };

  componentDidMount() {
    axios
      .get(
        `https://api.github.com/users/${
          this.props.profile.githubusername
        }/repos?per_page=10`
      )
      .then(res => {
        this.setState({
          github: res.data
        });
      })
      .catch(e => console.log(e));
  }

  render() {
    const { github } = this.state;
    let repo;
    if (github.length > 0) {
      repo = github.map(r => {
        return (
          <div>
            <h3>
              <Link to={r.html_url}>{r.name}</Link>
            </h3>
            <div className="repo-info">
              <div className="field is-grouped is-grouped-multiline">
                <div className="control">
                  <div className="tags has-addons">
                    <span className="tag is-dark">fork</span>
                    <span className="tag is-info">{r.forks}</span>
                  </div>
                </div>

                <div className="control">
                  <div className="tags has-addons">
                    <span className="tag is-dark">star</span>
                    <span className="tag is-success">{r.stargazers_count}</span>
                  </div>
                </div>

                <div className="control">
                  <div className="tags has-addons">
                    <span className="tag is-dark">watchers</span>
                    <span className="tag is-primary">{r.watchers_count}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
    console.log(github);
    return <div className="github-repos card user-profile">{repo}</div>;
  }
}

export default ProfileGithub;
