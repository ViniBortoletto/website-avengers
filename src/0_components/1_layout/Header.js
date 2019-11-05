import React, { Component } from "react";
import Parallax from "react-rellax";
import $ from "jquery";

//COMPONENTS
import Line from "../2_module/Line";
import BackgroundImg from "./BackgroundImg";

//STYLES
import { HeaderStyle } from "../../2_styles/1_layout/HeaderStyle";

export default class Header extends Component {
  componentDidMount() {
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      $(".header_box").css({
        "-webkit-filter": "blur(" + scroll / 200 + "px)",
        filter: "blur(" + scroll / 150 + "px)"
      });
    });
  }

  render() {
    const {
      bgImg,
      the,
      titlebruceBanner,
      title,
      subtitle,
      bgPosition,
      position,
      heightHeaderText,
      marginTop,
      fontSizeTitle,
      marginBottom
    } = this.props;

    return (
      <div>
        <HeaderStyle
          position={position}
          heightHeaderText={heightHeaderText}
          marginTop={marginTop}
          fontSizeTitle={fontSizeTitle}
          marginBottom={marginBottom}
        >
          <div className="header_box">
            <div className="header_bgImg">
              <Parallax speed={1}>
                <BackgroundImg
                  bgImg={bgImg}
                  height="120vh"
                  bgPosition={bgPosition}
                  bgFixed="fixed"
                />
              </Parallax>
            </div>

            <div className="header_text">
              <Parallax speed={-5}>
                <p className="pretitle">{the}</p>

                <Parallax speed={1}>
                  <div className="bruceBanner_box">
                    <p className="title bruceBanner">{titlebruceBanner}</p>
                  </div>
                </Parallax>

                <p className="title">{title}</p>
                <div className="line">
                  <Line />
                </div>
                <p className="subtitle">{subtitle}</p>
              </Parallax>
            </div>
          </div>
        </HeaderStyle>
      </div>
    );
  }
}
