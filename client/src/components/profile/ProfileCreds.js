import React, { Component } from "react";

class ProfileCreds extends Component {
  render() {
    const { profile } = this.props;
    return <div className="card user-profile">{JSON.stringify(profile)}</div>;
  }
}

export default ProfileCreds;
