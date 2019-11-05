import styled from "styled-components";

export const HeaderStyle = styled.div`
  overflow: hidden;

  .header_bgImg {
    overflow: hidden;

    height: 100vh;
    width: 100%;

    position: absolute;
    top: 0;
    z-index: -1;
  }

  .header_text {
    height: ${props =>
      props.heightHeaderText ? props.heightHeaderText : "100vh"};
    margin-top: ${props => props.marginTop};
    margin-bottom: ${props => props.marginBottom};

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    font-family: "Cormorant Infant", serif;
    text-align: center;

    padding: 0 5vw 0 5vw;
  }

  /* .title,
  .pretitle,
  .subtitle,
  .line {
    position: relative;
    left: -50%;
  } */

  .title {
    font-size: ${props => (props.fontSizeTitle ? props.fontSizeTitle : "3rem")};
    text-transform: uppercase;
    margin-bottom: 1px;
  }

  .bruceBanner_box {
    position: absolute;
    left: 50%;
  }
  .bruceBanner {
    width: 100vw;
    position: relative;
    left: -50%;

    opacity: 0.3;
    filter: blur(2px);
    letter-spacing: 2vw;
  }

  .pretitle,
  .subtitle {
    font-size: 1.5rem;
  }

  .pretitle {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
  }

  .subtitle {
    margin-top: 10px;
  }

  @media only screen and (min-width: 700px) {
    .title {
      font-size: 5rem;
    }

    .pretitle {
      margin-bottom: -10px;
    }
  }
`;
