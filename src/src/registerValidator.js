export const validate = values => {
  let errors = {};

  if (!values.firstName) {
    errors.firstName = "Required.";
  }

  return errors;
};
