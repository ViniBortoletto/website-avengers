import styled from "styled-components";

export const FooterStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .arrow_box {
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    width: 40px;
    height: 40px;

    background: #525252;
    border-radius: 2px;
    box-shadow: 0 0px 10px #111111;

    transition: 1s ease-out;

    &:hover {
      background: #636363;
    }
  }
  .arrow_right,
  .arrow_left {
    width: 50%;
    height: 2px;
    background-color: #f0f0f0;
  }

  .arrow_right {
    transform: rotate(-45deg);
  }

  .arrow_left {
    transform: rotate(45deg);
    margin-left: -6px;
  }

  .footer_box {
    background-color: #1a1a1a;

    width: 100%;
    padding: 3em 0 3em 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 0.8em;

    p {
      padding-left: 5vw;
    }

    img {
      padding-right: 5vw;
      width: 30px;
    }

    span {
      font-weight: 400;
    }
  }
`;
