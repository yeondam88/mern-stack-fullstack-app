import React, { Component } from "react";

class ProfileHeader extends Component {
  render() {
    const { profile } = this.props;
    return (
      <div>
        <h1>PRofile Header</h1>
        <p>Hello, {profile.user.name}</p>
      </div>
    );
  }
}

export default ProfileHeader;
