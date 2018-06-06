import React, { Component } from "react";
import Moment from "react-moment";

class ProfileCreds extends Component {
  render() {
    const { education, experience } = this.props.profile;
    let educationTable;
    let experienceTable;
    let credTable;
    if (education.length > 0 && experience.length > 0) {
      educationTable = education.map(exp => (
        <tr key={exp._id}>
          <td>
            <abbr title="Company" />
            {exp.school}
          </td>
          <td>
            <abbr title="Title" />
            {exp.degree}
          </td>
          <td>
            <abbr title="To" />
            <Moment format="YYYY/MM/DD">{exp.from}</Moment> -{" "}
            {exp.to === null ? (
              "Now"
            ) : (
              <Moment format="YYYY/MM/DD">{exp.to}</Moment>
            )}
          </td>
        </tr>
      ));
      experienceTable = experience.map(exp => (
        <tr key={exp._id}>
          <td>
            <abbr title="Company" />
            {exp.company}
          </td>
          <td>
            <abbr title="Title" />
            {exp.title}
          </td>
          <td>
            <abbr title="To" />
            <Moment format="YYYY/MM/DD">{exp.from}</Moment> -{" "}
            {exp.to === null ? (
              "Now"
            ) : (
              <Moment format="YYYY/MM/DD">{exp.to}</Moment>
            )}
          </td>
        </tr>
      ));
    }

    return (
      <div className="card user-profile">
        <div className="edu">
          <h4 className="title">Education</h4>
          {education.length > 0 ? (
            <div>
              <table className="table is-fullwidth is-striped">
                <thead>
                  <tr>
                    <th>School</th>
                    <th>Degree</th>
                    <th>Years</th>
                    <th />
                  </tr>
                  {educationTable}
                </thead>
              </table>
            </div>
          ) : (
            <p>No education listed</p>
          )}
        </div>
        <div className="exp">
          <h4 className="title">Experience</h4>
          {experience.length > 0 ? (
            <div>
              <table className="table is-fullwidth is-striped">
                <thead>
                  <tr>
                    <th>Company</th>
                    <th>Status</th>
                    <th>Years</th>
                    <th />
                  </tr>
                  {experienceTable}
                </thead>
              </table>
            </div>
          ) : (
            <p>No Experience listed</p>
          )}
        </div>
      </div>
    );
  }
}

export default ProfileCreds;
