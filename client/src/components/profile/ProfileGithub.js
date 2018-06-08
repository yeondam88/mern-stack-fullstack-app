import React, { Component } from "react";
import { Link } from "react-router-dom";
import Spinner from "../common/Spinner";
import axios from "axios";

import { clientId, clientSecret } from "../../apiKey";

class ProfileGithub extends Component {
  state = {
    fetching: true,
    clientId: clientId,
    clientSecret: clientSecret,
    count: 5,
    sort: "created: asc",
    repos: []
  };

  componentDidMount() {
    const { username } = this.props;
    const { count, sort, clientId, clientSecret } = this.state;

    fetch(
      `https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          repos: data,
          fetching: false
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { repos, fetching } = this.state;
    let repo;
    if (repos.length > 0) {
      if (fetching) {
        repo = <Spinner />;
      } else {
        repo = repos.map(r => {
          return (
            <div key={r.id} className="repo-item-container">
              <h3>
                <a href={r.html_url}>{r.name}</a>
              </h3>
              <span className="repo-info">
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
                      <span className="tag is-success">
                        {r.stargazers_count}
                      </span>
                    </div>
                  </div>

                  <div className="control">
                    <div className="tags has-addons">
                      <span className="tag is-dark">watchers</span>
                      <span className="tag is-primary">{r.watchers_count}</span>
                    </div>
                  </div>
                </div>
              </span>
            </div>
          );
        });
      }
    } else {
      repo = <p>No repository found</p>;
    }
    console.log(repos);
    return (
      <div
        className="github-repos card user-profile is-fullheight"
        style={{
          height: "100%",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <h2>Latest Github repos</h2>
        {repo}
      </div>
    );
  }
}

export default ProfileGithub;
