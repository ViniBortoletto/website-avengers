import styled from "styled-components";

export const HomeStyle = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;

  .box {
    width: 100%;
    height: 100vh;

    .bgImg {
      width: 100%;
      height: 100vh;

      position: absolute;
      left: 0;
      z-index: -1;

      background-image: url(${props => props.bgImg});
      background-size: cover;
      background-position: 20%;

      opacity: 0;
      animation: homeBg 5s ease-in-out forwards;
      animation-delay: 4s;
    }
  }

  .title {
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    font-family: "Cormorant Infant", serif;
    font-size: 1.5em;
    line-height: 0.8;

    text-shadow: 1px 1px 0 black;

    p:nth-child(1) {
      opacity: 0;
      animation: titleThe 3s ease-in-out forwards;
      animation-delay: 1s;
    }

    p:nth-child(2) {
      font-size: 2em;
      text-transform: uppercase;

      opacity: 0;
      animation: titleAvengers 3s linear forwards;
    }

    .line {
      width: 0;
      height: 1px;

      margin-top: 0.5rem;
      background: linear-gradient(to right, transparent, #f0f0f0, transparent);

      opacity: 0;
      animation: titleLine 2s ease-in-out forwards;
      animation-delay: 3s;
    }
  }

  /* MEDIA QUERIES */

  @media only screen and (min-width: 600px) {
    .title {
      font-size: 2em;
    }
  }

  @media only screen and (min-width: 1000px) {
    .title {
      font-size: 4em;
    }

    .title > p {
      font-size: 0.6em;
    }
  }

  /* ANIMATIONS */

  @keyframes titleThe {
    from {
      opacity: 0;
      transform: translateY(3rem);
      filter: blur(0.5rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
      filter: blur(0);
    }
  }

  @keyframes titleAvengers {
    from {
      opacity: 0;
      transform: translateY(-4rem);
      filter: blur(0.5rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
      filter: blur(0);
    }
  }

  @keyframes titleLine {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 60vw;
    }
  }

  @keyframes homeBg {
    from {
      opacity: 0;
      filter: blur(50px);
    }
    to {
      opacity: 1;
      filter: blur(0);
    }
  }
`;
