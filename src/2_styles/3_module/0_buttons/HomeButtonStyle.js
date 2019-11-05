import styled from "styled-components";

export const HomeButtonStyle = styled.div`
  #home_btn {
    z-index: 1;
    margin-left: 5vw;

    cursor: pointer;
    opacity: 0;
  }

  .home_btn-show {
    animation: homeBtn 3s linear forwards;
    animation-delay: 4s;
  }

  img {
    opacity: 0.5;
    width: 25px;
    transition: 0.3s ease-out;

    &:hover {
      opacity: 0.8;
    }
  }

  @keyframes homeBtn {
    from {
      opacity: 0;
      filter: blur(10px);
      transform: translateX(-1rem);
    }
    to {
      opacity: 1;
      filter: blur(0);
      transform: translateX(0);
    }
  }
`;
