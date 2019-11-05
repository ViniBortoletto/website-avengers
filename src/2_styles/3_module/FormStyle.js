import styled from "styled-components";

export const FormStyle = styled.div`
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

  label {
    font-size: 1.2rem;
    font-family: "cormorant infant", serif;
    /* margin-bottom: 1.5rem; */
    width: 100%;
  }

  input {
    padding: 0.5rem 0 0.5rem 0;
    background: linear-gradient(to right, #f0f0f0, transparent) left bottom
      no-repeat;
    background-size: 100% 1px;
    font-size: 1rem;
    font-family: "roboto", sans-serif;
    font-weight: 200;
    text-transform: uppercase;

    ::placeholder {
      color: #c7c7c7;
    }
  }

  .input_row-retiredHuman {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;

    label {
      margin-bottom: 1rem;
    }
  }

  span {
    margin-left: 0.5rem;
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

    label {
      font-size: 3rem;
      margin-bottom: 0.5rem;
    }

    input {
      font-size: 2rem;
    }

    span {
      font-size: 2rem;
    }

    .form_error-message {
      font-size: 1rem;
    }
  }
`;
