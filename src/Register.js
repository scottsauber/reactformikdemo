import React from "react";
import PropTypes from "prop-types";
import InputField from "./common/InputField";
import { Formik } from "formik";
import { validate } from "./registerValidator";

const Register = props => {
  return (
    <>
      <Formik validate={validate}>
        <InputField
          fieldName="firstName"
          labelName="First Name"
          inputType="text"
        />
      </Formik>
    </>
  );
};

Register.propTypes = {};

export default Register;
