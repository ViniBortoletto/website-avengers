import styled from "styled-components";

export const BecomeAnAvengerStyle = styled.div`
  .form_bgImg-box {
    width: 100%;
    height: 150vh;

    position: absolute;
    overflow: hidden;
    z-index: -1;
  }

  .form_bgImg {
    width: 100%;
    height: 150vh;

    position: relative;

    background-image: url(${props => props.bgImgForm});
    background-size: cover;
    background-position: 40%;

    filter: brightness(50%);
    transition: 0.3s ease-in-out;
  }

  .from_bgImg-blur {
    filter: brightness(70%) blur(3px);
    transform: scale(1.1);
  }
`;
