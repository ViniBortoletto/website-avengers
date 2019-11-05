import React from "react";

import BackToTop from "react-back-to-top-button";
import myLogo from "../../3_images/5_footer/icon_footer-vbLogo.png";
import { FooterStyle } from "../../2_styles/1_layout/FooterStyle";

export default function Footer() {
  return (
    <div>
      <FooterStyle>
        <BackToTop
          showOnScrollUp
          showAt={100}
          speed={1500}
          easing="easeInOutSine"
        >
          <div className="arrow_box">
            <div className="arrow_right"></div>
            <div className="arrow_left"></div>
          </div>
        </BackToTop>

        <div className="footer_box">
          <p>
            created by <span>Vinicius Bortoletto</span>
          </p>
          <img src={myLogo} alt="vinicius bortoletto logo" />
        </div>
      </FooterStyle>
    </div>
  );
}
