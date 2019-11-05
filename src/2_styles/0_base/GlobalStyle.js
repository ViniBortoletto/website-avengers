import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`${css`
  /* RESET */
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button,
  input {
    border: none;
    background: none;
    padding: 0;
  }

  input {
    color: #f0f0f0;
  }

  li {
    list-style-type: none;
  }

  body {
    line-height: 1;

    margin: 0;

    font-family: "Roboto", sans-serif;
    font-weight: 100;

    color: #f0f0f0;
    background: #111111;
  }

  /* PAGE TRANSITION (GROUP TRANSITION) */
  .fade-appear,
  .fade-enter {
    opacity: 0;
    z-index: 1;
  }

  .fade-appear-active,
  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 1000ms ease-in-out 150ms;
    transition-delay: 0.5s;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0;
    transition: opacity 500ms ease-in-out;
  }

  /* MAIN BOX */
  #main_box {
    transition: 1s ease-out;

    &.main_box-blur {
      filter: contrast(0.8) blur(10px);
    }
  }

  /* width */
  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border: 1px solid #333333;
    background: #111111;
    border-radius: 1rem;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #444444;
    border-radius: 1rem;

    &:hover {
      background-color: #555;
    }
  }
`}`;
