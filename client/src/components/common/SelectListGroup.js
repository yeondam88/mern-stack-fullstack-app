import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { GET_ERRORS } from "../../actions/actionTypes";

const SelectListGroup = ({
  name,
  value,
  error,
  info,
  onChange,
  options,
  label
}) => {
  const selectOptions = options.map(option => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ));
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <div
          className={classnames("select", {
            "is-danger": error
          })}
          style={{ width: "100%" }}
        >
          <select
            name={name}
            value={value}
            onChange={onChange}
            style={{ width: "100%" }}
          >
            {selectOptions}
          </select>
        </div>
        {info && <small className="info"> {info} </small>}{" "}
        {error && (
          <p className="animated shake help has-text-danger"> {error} </p>
        )}{" "}
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
