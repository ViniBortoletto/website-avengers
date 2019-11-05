import React from "react";
const FormError = ({ touched, message }) => {
  if (!touched) {
    return <div className="form_error-message">&nbsp;</div>;
  }

  if (message) {
    return <div className="form_error-message">{message}</div>;
  } else {
    return <div className="form_error-message"></div>;
  }
};

export default FormError;
