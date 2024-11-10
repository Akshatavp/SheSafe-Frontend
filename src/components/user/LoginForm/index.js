import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Joi from "joi-browser";

// Joi schema for login validation
const schema = Joi.object({
  email: Joi.string().email().required().label("Email"),
  password: Joi.string().min(6).required().label("Password"),
});

// Helper function to validate form values using Joi
const validate = (values) => {
  const { error } = schema.validate(values, { abortEarly: false });
  if (!error) return {};

  const errors = {};
  error.details.forEach((item) => {
    errors[item.path[0]] = item.message;
  });
  return errors;
};

const LoginForm = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validate={validate}
      onSubmit={(values) => {
        console.log("Login Data:", values);
      }}
    >
      {() => (
        <Form>
          <div className="form-group mb-3">
            <label>Email</label>
            <Field name="email" type="email" className="form-control" />
            <ErrorMessage
              name="email"
              component="div"
              className="text-danger"
            />
          </div>

          <div className="form-group mb-3">
            <label>Password</label>
            <Field name="password" type="password" className="form-control" />
            <ErrorMessage
              name="password"
              component="div"
              className="text-danger"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
