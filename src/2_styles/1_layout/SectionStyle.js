import styled from "styled-components";

export const SectionStyle = styled.div`
  margin-bottom: 10rem;

  .text {
    padding: 80vh 5vw 0 5vw;
  }

  .title {
    text-align: center;
    text-transform: uppercase;

    font-family: "Cormorant Infant", serif;
    font-size: 1.5rem;

    letter-spacing: 1px;

    margin-bottom: 3rem;
  }

  .description {
    text-align: justify;
    text-justify: inter-word;
  }

  p {
    margin-bottom: 1rem;
    text-indent: 10px;
  }

  @media only screen and (min-width: 1000px) {
    .title {
      font-size: 2.4rem;
    }

    p {
      font-size: 1.5rem;
    }
  }
`;
