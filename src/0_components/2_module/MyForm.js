import React from "react";

import Autosuggest from "react-autosuggest";
import axios from "axios";

import { Radio, FormControlLabel } from "@material-ui/core";

import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";

import { MyFormStyle } from "../../2_styles/3_module/MyFormStyle";

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

export default function MyForm() {
  const [country, setCountry] = React.useState("");
  const [suggestions, setSuggestions] = React.useState([]);

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
            setCountry("");
            resetForm();
          }}
        >
          {({
            values,
            isSubmitting,
            errors,
            touched,
            message,
            setFieldValue
          }) => (
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
                    touched.superName && errors.superName ? "input_error" : null
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
                <Autosuggest
                  inputProps={{
                    placeholder: "United States",
                    autoComplete: "abcd",
                    name: "country",
                    id: "country",
                    value: country,
                    onChange: (_event, { newValue }) => {
                      setCountry(newValue);
                    },
                    className:
                      touched.country && errors.country ? "input_error" : null
                  }}
                  suggestions={suggestions}
                  onSuggestionsFetchRequested={async ({ value }) => {
                    if (!value) {
                      setSuggestions([]);
                      return;
                    }

                    try {
                      const response = await axios.get(
                        `https://restcountries.eu/rest/v2/name/${value}`
                      );
                      setSuggestions(
                        response.data.map(row => ({
                          name: row.name
                        }))
                      );
                    } catch (e) {
                      setSuggestions([]);
                    }
                  }}
                  onSuggestionsClearRequested={() => {
                    setSuggestions([]);
                  }}
                  onSuggestionSelected={(event, { suggestion, method }) => {
                    if (method === "enter") {
                      event.preventDefault();
                    }
                    setCountry(suggestion.name);
                    setFieldValue("country", suggestion.name);
                  }}
                  getSuggestionValue={suggestion => suggestion.name}
                  renderSuggestion={suggestion => (
                    <div className="suggested_contries">{suggestion.name}</div>
                  )}
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
                <label className="input_title" htmlFor="email ">
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
      </MyFormStyle>
    </div>
  );
}
