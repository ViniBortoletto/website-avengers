import styled from "styled-components";

export const MyFormStyle = styled.div`
  #myForm {
    height: 140vh;
    padding: 80vh 5vw 0 5vw;
  }

  .input_row {
    width: 100%;

    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  .input_title {
    font-size: 1.2rem;
    font-family: "cormorant infant", serif;
    width: 100%;
  }

  input {
    padding: 0.5rem 0 0.5rem 0;
    background: linear-gradient(to right, #f0f0f0, transparent) left bottom
      no-repeat;
    background-size: 100% 1px;
    font-size: 1rem;
    font-family: "roboto", sans-serif;
    font-weight: 100;
    text-transform: uppercase;

    ::placeholder {
      color: #c7c7c7;
    }
  }

  .input_row.retiredHuman {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }

  .input_row.retiredHuman .radio_label {
    margin: 0 1rem 0 0.5rem;
    cursor: pointer;
    font-family: "roboto", sans-serif;
    font-size: 1rem;
  }

  .input_row.retiredHuman input {
    margin-right: 0.5rem;
  }

  .MuiIconButton-colorSecondary:hover,
  .MuiRadio-colorSecondary.Mui-checked:hover {
    background: transparent;
  }

  .MuiRadio-colorSecondary {
    color: rgba(240, 240, 240, 0.5);
  }

  .MuiRadio-colorSecondary.Mui-checked {
    color: rgba(240, 240, 240, 0.8);
  }

  .radio_group span {
    font-family: "roboto", sans-serif;
    font-weight: 100;
  }

  .btn_submit-box {
    width: 100%;

    display: flex;
    justify-content: flex-end;
  }

  #btn_submit {
    cursor: pointer;
    text-align: end;
    color: #f0f0f0;
    text-transform: uppercase;
    font-family: "cormorant infant", serif;
    font-size: 2rem;

    transition: 0.3s ease-out;
    &:hover {
      text-shadow: 0 0 3px #f0f0f0;
    }
  }

  /* ERRORS -------------------------------------- */

  .error {
    color: red;
    margin-top: 1rem;
    font-size: 0.8rem;
    font-weight: 300;
    width: 100%;
  }

  .input_error {
    background: linear-gradient(to right, crimson, transparent) left bottom
      no-repeat;
    background-size: 100% 1px;
  }

  .form_error-message {
    margin-top: 0.5rem;

    font-size: 0.7rem;
    font-weight: 300;

    color: crimson;
  }

  @media only screen and (min-width: 1000px) {
    #myForm {
      height: 200vh;
      padding: 80vh 15vw 0 15vw;
    }

    .input_row {
      margin-bottom: 3rem;
    }

    .input_title {
      font-size: 3rem;
      margin-bottom: 0.5rem;
    }

    input {
      font-size: 2rem;
    }

    span {
      font-size: 1.5rem;
    }

    .form_error-message {
      font-size: 1rem;
    }
  }
`;
