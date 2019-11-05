import styled from "styled-components";

export const MenuButtonStyle = styled.div`
  #menu_btn {
    cursor: pointer;

    width: 25px;
    height: 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

    margin-right: 5vw;

    opacity: 0;

    &.menu_btn-toggle span {
      &:nth-child(1) {
        transform: translateY(10px) rotate(45deg);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
      }
    }

    span {
      width: 25px;
      height: 2px;

      border-radius: 50px;
      background-color: #f0f0f0;
      transition: 0.3s ease-in-out;
    }
  }

  .menu_btn-show {
    animation: menuBtn 3s linear forwards;
    animation-delay: 4s;
  }

  #menu_btn.menu_btn-animate {
    &:hover span {
      &:nth-child(1) {
        width: 30px;
      }

      &:nth-child(2) {
        width: 35px;
      }

      &:nth-child(3) {
        width: 30px;
      }
    }
  }

  @keyframes menuBtn {
    from {
      opacity: 0;
      filter: blur(10px);
      transform: translateX(1rem);
    }
    to {
      opacity: 1;
      filter: blur(0);
      transform: translateX(0);
    }
  }
`;
