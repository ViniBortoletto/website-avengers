import styled from "styled-components";

export const BackgroundImgStyle = styled.div`
  .bgImg_shadow {
    width: 100%;
    height: ${props => (props.height ? props.height : "100vh")};

    position: absolute;
    z-index: -1;

    background: linear-gradient(to bottom, transparent, #111111)
      ${props => props.bgFixed};
  }

  .bgImg {
    width: 100%;
    height: ${props => (props.height ? props.height : "100vh")};

    position: absolute;
    z-index: -2;

    background: #212121 url(${props => props.bgImg}) no-repeat fixed;
    background-size: cover;
    background-position: ${props =>
      props.bgPosition ? props.bgPosition : "center"};
  }
`;
