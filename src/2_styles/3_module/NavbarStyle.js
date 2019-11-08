import styled from "styled-components";

export const NavbarStyle = styled.div`
  #navbar {
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 10vh;

    display: flex;
    align-items: center;
    justify-content: space-between;

    transition: 0.3s ease-out;
  }

  @media only screen and (min-width: 600px) {
    #navbar {
      height: 20vh;
    }
  }
`;
