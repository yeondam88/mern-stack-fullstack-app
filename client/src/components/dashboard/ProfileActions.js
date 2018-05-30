import React from "react";
import { Link } from "react-router-dom";

const ProfileActions = () => (
  <div className="field is-grouped">
    <div className="control">
      <Link to="/edit-profile" className="buttons">
        <div className="button is-text">
          <span className="icon">
            <i className="fas fa-user-circle" />
          </span>
          <span>Edit Profile</span>
        </div>
      </Link>
    </div>
    <div className="control">
      <Link to="/add-experience" className="buttons">
        <div className="button is-text">
          <span className="icon">
            <i className="fab fa-black-tie" />
          </span>
          <span>Add Experience</span>
        </div>
      </Link>
    </div>
    <div className="control">
      <Link to="/add-education" className="buttons">
        <div className="button is-text">
          <span className="icon">
            <i className="fas fa-graduation-cap" />
          </span>
          <span>Add Education</span>
        </div>
      </Link>
    </div>
  </div>
);

export default ProfileActions;
