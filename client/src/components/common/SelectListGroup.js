import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { GET_ERRORS } from "../../actions/actionTypes";

const SelectListGroup = ({ name, value, error, info, onChange, options }) => {
  const selectOptions = options.map(option => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ));
  return (
    <div className="field">
      <div className="control">
        <div
          className={classnames("select", {
            "is-danger": error
          })}
        >
          <select name={name} value={value} onChange={onChange}>
            {selectOptions}
          </select>
          {info && <small> {info} </small>}{" "}
          {error && (
            <p className="animated shake help has-text-danger"> {error} </p>
          )}{" "}
        </div>
      </div>{" "}
    </div>
  );
};

SelectListGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
};

export default SelectListGroup;
