import React, { Component } from "react";

import { Formik } from "formik";
import * as Yup from "yup";

import { FormStyle } from "../../2_styles/3_module/FormStyle";

import FormError from "../2_module/FormError";

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
  country: Yup.string() // TODO: CREATE COUNTRY LIST
    .min(2, "Must have at least 2 characters")
    .max(255, "Must be shorter than 255 characters")
    .required("Please choose your country"),
  // retiredHuman: Yup.boolean().required("DOIT"), FIXME: how the fuck do you validate this shit?
  email: Yup.string()
    .email("Must be a valid email")
    .max(255, "Must be shorter than 255 characters")
    .required("Please enter your email")
});

export default class Form extends Component {
  render() {
    return (
      <div>
        <FormStyle>
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
          </Formik>
        </FormStyle>
      </div>
    );
  }
}
