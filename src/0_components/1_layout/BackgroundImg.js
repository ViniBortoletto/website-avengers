import React, { Component } from "react";

import { BackgroundImgStyle } from "../../2_styles/1_layout/BackgroundImgStyle";

export default class BackgroundImg extends Component {
  render() {
    const { bgImg, height, bgFixed, bgPosition } = this.props;
    return (
      <div>
        <BackgroundImgStyle
          bgImg={bgImg}
          height={height}
          bgFixed={bgFixed}
          bgPosition={bgPosition}
        >
          <div className="bgImg_shadow"></div>
          <div className="bgImg "></div>
        </BackgroundImgStyle>
      </div>
    );
  }
}
