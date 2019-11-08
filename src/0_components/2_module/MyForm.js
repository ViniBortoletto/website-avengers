import React, { Component } from "react";

import Autosuggest from "react-autosuggest";
import axios from "axios";

import { Radio, FormControlLabel } from "@material-ui/core";

import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";

import { MyFormStyle } from "../../2_styles/3_module/MyFormStyle";

import FormError from "./FormError";

const validationSchema = Yup.object().shape({
  superName: Yup.string()
    .min(2, "Must have at least 2 characters")
    .max(255, "Must be shorter than 255")
    .required("Please enter your superhero name"),
  realName: Yup.string()
    .min(2, "Must have at least 2 characters")
    .max(255, "Must be shorter than 255")
    .required("Please enter your real name"),
  superpower: Yup.string()
    .min(2, "Must have at least 2 characters")
    .max(255, "Must be shorter than 255 characters")
    .required("Please enter at least one superpower"),
  country: Yup.string().required("Please choose a country"),
  retiredHuman: Yup.string().required("Please choose an option"),
  email: Yup.string()
    .email("Must be a valid email")
    .max(255, "Must be shorter than 255 characters")
    .required("Please enter your email")
});

const MyRadioButton = ({ label, ...props }) => {
  const [field] = useField(props);
  return <FormControlLabel {...field} control={<Radio />} label={label} />;
};

export default class MyForm extends Component {
  render() {
    return (
      <div>
        <MyFormStyle>
          <Formik
            initialValues={{
              superName: "",
              realName: "",
              superpower: "",
              country: "",
              retiredHuman: "",
              email: ""
            }}
            validationSchema={validationSchema}
            onSubmit={(data, { setSubmitting, resetForm }) => {
              setSubmitting = false;
              alert(JSON.stringify(data, null, 2));

              setSubmitting = true;
              resetForm();
            }}
          >
            {({ values, isSubmitting, errors, touched, message }) => (
              <Form id="myForm">
                {/* SUPERHERO NAME */}
                <div className="input_row">
                  <label className="input_title" htmlFor="superName">
                    What is your superhero name?
                  </label>
                  <Field
                    placeholder="Spider-Man"
                    name="superName"
                    type="input"
                    className={
                      touched.superName && errors.superName
                        ? "input_error"
                        : null
                    }
                  />

                  <div className="error">
                    &nbsp;
                    <ErrorMessage name="superName" />
                  </div>
                </div>

                {/* REALNAME */}
                <div className="input_row">
                  <label className="input_title" htmlFor="realName">
                    What is your real name?
                  </label>
                  <Field
                    placeholder="Peter Parker"
                    name="realName"
                    type="input"
                    className={
                      touched.realName && errors.realName ? "input_error" : null
                    }
                  />

                  <div className="error">
                    &nbsp;
                    <ErrorMessage name="realName" />
                  </div>
                </div>

                {/* SUPERPOWER */}
                <div className="input_row">
                  <label className="input_title" htmlFor="superpower">
                    What are your superpowers?
                  </label>
                  <Field
                    placeholder="Super strength, spider sense, lick own elbow"
                    name="superpower"
                    type="input"
                    className={
                      touched.superpower && errors.superpower
                        ? "input_error"
                        : null
                    }
                  />

                  <div className="error">
                    &nbsp;
                    <ErrorMessage name="superpower" />
                  </div>
                </div>

                {/* COUNTRY */}
                <div className="input_row">
                  <label className="input_title" htmlFor="country">
                    Where do you live?
                  </label>
                  <Field
                    placeholder="United States"
                    name="country"
                    type="input"
                    className={
                      touched.country && errors.country ? "input_error" : null
                    }
                  />

                  <div className="error">
                    &nbsp;
                    <ErrorMessage name="country" />
                  </div>
                </div>

                {/* RETIRED HUMAN */}
                <div className="input_row retiredHuman">
                  <label className="input_title" htmlFor="retiredHuman ">
                    Have you ever retired a human being?
                  </label>

                  <div className="radio_group">
                    {/* <label className="radio_label">
                      <Field name="retiredHuman" type="radio" value="yes" />
                      Yes, my bad
                    </label> */}

                    {/* <label className="radio_label">
                      <Field name="retiredHuman" type="radio" value="no" />
                      No, and I'll never do it again
                    </label> */}

                    <MyRadioButton
                      name="retiredHuman"
                      type="radio"
                      value="yes"
                      label="Yes, my bad"
                      className="radio_button"
                    />

                    <MyRadioButton
                      name="retiredHuman"
                      type="radio"
                      value="no"
                      label="No, and I'll never do it again"
                      className="radio_button"
                    />
                  </div>

                  <div className="error">
                    &nbsp;
                    <ErrorMessage name="retiredHuman" />
                  </div>
                </div>

                {/* EMAIL */}
                <div className="input_row">
                  <label className="input_title" htmlFor="retiredHuman ">
                    What's your email?
                  </label>
                  <Field
                    placeholder="iamnotspidey@example.com"
                    name="email"
                    type="email"
                    className={
                      touched.email && errors.email ? "input_error" : null
                    }
                  />

                  <div className="error">
                    &nbsp;
                    <ErrorMessage name="email" />
                  </div>
                </div>

                {/* SUBMIT BUTTON */}
                <div className="btn_submit-box">
                  <button id="btn_submit" type="submit" disabled={isSubmitting}>
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
          {/* <Formik
            initialValues={{
              superName: "",
              realName: "",
              superpower: "",
              country: "",
              retiredHuman: "",
              email: ""
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setSubmitting(true);
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                resetForm();
                setSubmitting(false);
              }, 500);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting
            }) => (
              <form id="myForm" onSubmit={handleSubmit}>
                <div className="input_row">
                  <label htmlFor="superName">
                    What is your superhero name?
                  </label>
                  <input
                    type="text"
                    name="superName"
                    id="superName"
                    placeholder="Spider-Man"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.superName}
                    className={
                      touched.superName && errors.superName
                        ? "input_error"
                        : null
                    }
                  />

                  <FormError
                    touched={touched.superName}
                    message={errors.superName}
                  />
                </div>

                <div className="input_row">
                  <label htmlFor="realName">What is your real name?</label>
                  <input
                    type="text"
                    name="realName"
                    id="realName"
                    placeholder="Peter Parker"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.realName}
                    className={
                      touched.realName && errors.realName ? "input_error" : null
                    }
                  />

                  <FormError
                    touched={touched.realName}
                    message={errors.realName}
                  />
                </div>

                <div className="input_row">
                  <label htmlFor="superpower">What are your superpowers?</label>
                  <input
                    type="text"
                    name="superpower"
                    id="superpower"
                    placeholder="Strenght, shoots web, lick own elbow"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.superpower}
                    className={
                      touched.superpower && errors.superpower
                        ? "input_error"
                        : null
                    }
                  />
                  <FormError
                    touched={touched.superpower}
                    message={errors.superpower}
                  />
                </div>

                <div className="input_row">
                  <label htmlFor="country">What country do you live in?</label>
                  <input
                    type="text"
                    name="country"
                    id="country"
                    placeholder="United States"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.country}
                    className={
                      touched.country && errors.country ? "input_error" : null
                    }
                  />
                  <FormError
                    touched={touched.country}
                    message={errors.country}
                  />
                </div>

                <div className="input_row input_row-retiredHuman ">
                  <label htmlFor="retiredHuman">
                    Have you ever retired a human by mistake?
                  </label>
                  <input
                    type="radio"
                    name="retiredHumanYes"
                    id="retiredHuman"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.retiredHuman}
                    className={
                      touched.retiredHuman && errors.retiredHuman
                        ? "input_error"
                        : null
                    }
                  />
                  <div className="span_box">
                    <span>Yes, my bad</span>
                  </div>

                  <div className="input_row input_row-retiredHuman">
                    <input
                      type="radio"
                      name="retiredHumanNo"
                      id="retiredHuman"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.retiredHuman}
                      className={
                        touched.retiredHuman && errors.retiredHuman
                          ? "input_error"
                          : null
                      }
                    />
                    <div className="span_box">
                      <span>No, and I'll never to it again</span>
                    </div>
                    <FormError
                      touched={touched.retiredHuman}
                      message={errors.retiredHuman}
                    />
                  </div>
                </div>

                <div className="input_row">
                  <label htmlFor="email">
                    Tell us your email so we can reach you
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="iamnotspiderman@avengers.com"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className={
                      touched.email && errors.email ? "input_error" : null
                    }
                  />
                  <FormError touched={touched.email} message={errors.email} />
                </div>

                <div className="btn_submit-box">
                  <button id="btn_submit" type="submit" disabled={isSubmitting}>
                    Submit
                  </button>
                </div>
              </form>
            )}
          </Formik> */}
        </MyFormStyle>
      </div>
    );
  }
}
