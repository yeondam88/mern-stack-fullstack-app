import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { GET_ERRORS } from "../../actions/actionTypes";

const TextAreaFieldGroup = ({
  name,
  placeholder,
  value,
  error,
  info,
  onChange
}) => {
  return (
    <div className="field">
      <div className="control">
        <textarea
          className={classnames("textarea", {
            "is-danger": error
          })}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />{" "}
        {info && <small> {info} </small>}{" "}
        {error && (
          <p className="animated shake help has-text-danger"> {error} </p>
        )}{" "}
      </div>{" "}
    </div>
  );
};

TextAreaFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default TextAreaFieldGroup;
