import styled from "styled-components";

export const MenuStyle = styled.div`
  #menu_box {
    overflow: hidden;
    z-index: -1;

    width: 0vw;
    height: 100vh;

    position: fixed;
    top: 0;
    right: 0;

    transition: 0.7s ease-in-out;

    background: linear-gradient(to bottom, #111111 50%, black);
  }

  .menu_items {
    height: 100%;
    padding: 2.5em 5vw 0 5vw;
    transform: translateX(100%);

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    font-family: "Cormorant Infant", serif;
    font-size: 2.5em;

    transition: 0.7s ease-in-out;

    .menu_link {
      margin: 0.2em 0 0.2em 0;
      transform: translateX(200%);

      opacity: 0;

      transition: 0.3s ease-out;
      &:hover {
        text-shadow: 0px 0px 5px #969696;
      }
    }

    span {
      display: block;
      text-align: end;
      text-transform: lowercase;
      font-size: 0.7em;
      text-shadow: none;
    }

    .menu_line {
      /* width: 100%;

      display: flex;
      justify-content: flex-start;
      padding-left: -5rem; */

      opacity: 0;

      div {
        transition: 0.3s ease-in-out;
      }
    }
  }

  .menu_bgLogo {
    height: 100%;
    width: 100%;

    position: absolute;

    opacity: 0;
    transition: 0.5s ease-in-out;
  }

  #bgLogo_img {
    width: 50em;

    position: absolute;
    top: -7em;
    left: -21em;
  }

  /* ANIMATIONS ---------- */

  /* Menu Background */
  .menu_bgLogo-toggle {
    opacity: 0.03;
  }

  /* MENU BOX */
  #menu_box.menu_box-show {
    animation: menuBox_show 0.7s ease-in-out forwards;
  }

  #menu_box.menu_box-hide {
    animation: menuBox_hide 0.7s ease-in-out forwards;
  }

  @keyframes menuBox_show {
    0% {
      width: 0;
    }
    70% {
      width: 90vw;
    }
    100% {
      width: 80vw;
    }
  }

  @keyframes menuBox_hide {
    0% {
      width: 80vw;
    }
    30% {
      width: 90vw;
    }
    100% {
      width: 0vw;
    }
  }

  /* LINKS */

  .menu_items-toggle {
    /* Container for links and lines */
    transform: translateX(0%);
  }

  .menu_link.menu_link-show {
    animation: menu_link-show 1s cubic-bezier(0.65, 0.05, 0.36, 1) forwards;
  }
  .menu_link.menu_link-hide,
  .link_box.menu_link-hide {
    animation: menu_link-hide 0.5s cubic-bezier(0.65, 0.05, 0.36, 1) forwards;
  }

  @keyframes menu_link-show {
    0% {
      transform: translateX(200%);
      opacity: 0;
    }
    70% {
      transform: translateX(-10%);
    }
    100% {
      transform: translateX(0%);
      opacity: 1;
    }
  }

  @keyframes menu_link-hide {
    0% {
      transform: translateX(0%);
      opacity: 1;
    }
    30% {
      transform: translateX(-10%);
    }
    100% {
      transform: translateX(200%);
      opacity: 0;
    }
  }

  /* LINES */

  .active {
    div {
      width: 70vw;
      opacity: 1;
    }
  }

  .menu_line.menu_line-show {
    animation: menu_line-show 0.7s cubic-bezier(0.65, 0.05, 0.36, 1) forwards;
  }
  .menu_line.menu_line-hide,
  .line_box.menu_line-hide {
    animation: menu_line-hide 0.7s cubic-bezier(0.65, 0.05, 0.36, 1) forwards;
  }

  @keyframes menu_line-show {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }

    100% {
      transform: translateX(0%);
      opacity: 1;
    }
  }

  @keyframes menu_line-hide {
    0% {
      transform: translateX(0%);
      opacity: 1;
    }
    100% {
      transform: translateX(0%);
      opacity: 0;
    }
  }

  /* MEDIA QUERIES */

  @media only screen and (min-width: 600px) {
    .menu_items {
      font-size: 4em;
      padding-top: 1.5em;
    }

    #bgLogo_img {
      width: 60em;
      top: -13em;
      left: -20em;
    }
  }

  @media only screen and (min-width: 800px) {
    .menu_items {
      font-size: 5em;
      padding-top: 1.5em;

      span {
        font-size: 0.5em;

        display: inline;
      }
    }
  }
`;
