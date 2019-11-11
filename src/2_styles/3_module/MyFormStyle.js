import styled from "styled-components";

export const MyFormStyle = styled.div`
  #myForm {
    height: 140vh;
    padding: 80vh 5vw 0 5vw;
  }

  /* ALL INPUTS ------------------------------------------- */

  input:-internal-autofill-previewed,
  input:-internal-autofill-selected {
    -webkit-transition-delay: 99999s;
    -webkit-text-fill-color: #f0f0f0;
  }

  .input_row {
    width: 100%;

    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  .input_title {
    width: 100%;

    font-size: 1.2rem;
    font-family: "cormorant infant", serif;
  }

  input {
    padding: 0.5rem 0 0.5rem 0;

    background: transparent;
    border-bottom: 1px solid #f0f0f0;

    font-size: 1rem;
    font-family: "roboto", sans-serif;
    font-weight: 100;
    text-transform: uppercase;

    ::placeholder {
      color: #555555;
    }
  }

  /* input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  } */

  /* COUNTRY ------------------------------------------- */
  #react-autowhatever-1 {
    position: absolute;
    z-index: 100;
    width: calc(100% - 10%);
  }

  #country {
    width: 100%;
  }

  .react-autosuggest__suggestions-list {
    border: 1px solid #333333;
  }

  .suggested_contries {
    cursor: pointer;
    background: #212121;
    border-bottom: 1px solid #333333;

    padding: 1rem;

    &:hover {
      background: #333333;
    }
  }

  /* RETIRED HUMAN ------------------------------------------- */
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

  /* RADIO BUTTONS (RETIRED HUMAN) ------------------------------------------- */
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

  /* SUBMIT BUTTON ------------------------------------------- */
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
    border-bottom: 1px solid red;
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

    #react-autowhatever-1 {
      width: calc(100% - 30%);
    }
  }
`;
