import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { GET_ERRORS } from "../../actions/actionTypes";

const InputGroup = ({
  name,
  placeholder,
  value,
  error,
  icon,
  type,
  onChange
}) => {
  return (
    <div className="field has-addons">
      <p className="control">
        <a className="button">
          <i className={icon} />
        </a>
      </p>
      <p className="control is-expanded">
        <input
          className={classnames("input", {
            "is-danger": error
          })}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />{" "}
        {error && (
          <p className="animated shake help has-text-danger"> {error} </p>
        )}{" "}
      </p>
    </div>
  );
};

InputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

InputGroup.defaultProps = {
  type: "text"
};

export default InputGroup;
