import React from "react";
import { Link } from "react-router-dom";
import defaultImage from "../../images/default-user.png";

const keywords = [
  "music",
  "sports",
  "car",
  "landscape",
  "skyline",
  "flower",
  "beach",
  "festival"
];

class ProfileItem extends React.Component {
  render() {
    const { profile, index } = this.props;
    return (
      <div className="column is-4 is-flex">
        <div className="card user-profile">
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                src={`https://source.unsplash.com/featured/?${keywords[index]}
                }`}
                alt="profile card"
              />
            </figure>{" "}
          </div>{" "}
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img
                    className="is-rounded"
                    src={(profile.user && profile.user.avatar) || defaultImage}
                    alt="User Avatar"
                  />
                </figure>{" "}
              </div>{" "}
              <div className="media-content">
                <p className="is-4"> {profile.user && profile.user.name} </p>{" "}
                <p className="subtitle is-6"> @ {profile.handle} </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="content">
              <p className="is-6 mb-5">
                {" "}
                {profile.status} at {profile.company}{" "}
              </p>{" "}
              <div className="tags">
                <span className="tag is-info"> Skill Sets </span>{" "}
                {profile.skills &&
                  profile.skills.map(skill => {
                    return <span className="tag"> {skill} </span>;
                  })}{" "}
              </div>
              <Link
                className="button is-small is-warning"
                to={`/profile/${profile.handle}`}
              >
                View Profile{" "}
              </Link>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}
export default ProfileItem;
