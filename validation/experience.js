const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateExperienceInput(data) {
  let errors = {};

  // Make sure name is empty string
  data.title = !isEmpty(data.title) ? data.title : "";
  data.from = !isEmpty(data.from) ? data.from : "";
  data.to = !isEmpty(data.to) ? data.to : "";

  if (Validator.isEmpty(data.title)) {
    errors.title = "Job title field is inValid";
  }

  if (Validator.isEmpty(data.company)) {
    errors.company = "company field is inValid";
  }

  if (Validator.isEmpty(data.from)) {
    errors.from = "From date field is inValid";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};