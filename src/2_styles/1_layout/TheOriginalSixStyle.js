import styled from "styled-components";

export const TheOriginalSixStyle = styled.div`
  .icons_box {
    width: 100%;

    position: absolute;
    bottom: 2rem;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
  }

  .icons_img {
    width: 3rem;
    height: 3rem;
    cursor: pointer;

    opacity: 0.5;
    transition: 0.3s ease-in-out;

    &:hover {
      opacity: 1;
      filter: drop-shadow(0 0 2px #f0f0f0);
    }
  }

  .icon_cap-box,
  .icon_iron-box,
  .icon_thor-box {
    margin-bottom: 1rem;
  }

  .bg_heroes {
    width: 100vw;
    height: 100vh;

    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    opacity: 0;
    transition: 0.5s ease-in-out;
  }

  .bg_heroes-cap {
    background-image: url(${props => props.bgCap});
    background-position: 53%;
  }

  .bg_heroes-iron {
    background-image: url(${props => props.bgIron});
    background-position: 52%;
  }

  .bg_heroes-thor {
    background-image: url(${props => props.bgThor});
    background-position: 47%;
  }
  .bg_heroes-hulk {
    background-image: url(${props => props.bgHulk});
    background-position: 10%;
  }
  .bg_heroes-widow {
    background-image: url(${props => props.bgWidow});
  }
  .bg_heroes-hawk {
    background-image: url(${props => props.bgHawk});
    background-position: 70%;
  }

  .active {
    opacity: 1;
  }

  @media only screen and (min-width: 1000px) {
    .icons_box {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
      bottom: 6rem;
    }

    .icons_img {
      width: 4rem;
      height: 4rem;
    }
  }
`;
