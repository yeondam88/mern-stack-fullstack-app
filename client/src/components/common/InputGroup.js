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
    <div className="field">
      <div className="field-label" />
      <div className="field-body">
        <div className="field is-expanded">
          <div className="field has-addons">
            <p className="control">
              <i className={icon} />
            </p>
            <p className="control is-expanded">
              <input
                className={classnames("textarea", {
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
        </div>
      </div>
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
