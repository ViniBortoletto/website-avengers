import React, { Component } from "react";

import bgImg from "../3_images/1_home/bg_home.jpg";
import bgLogo from "../3_images/1_home/icon_home-big.png";

import { HomeStyle } from "../2_styles/1_layout/HomeStyle";

export default class Home extends Component {
  render() {
    return (
      <div>
        <HomeStyle bgImg={bgImg} bgLogo={bgLogo}>
          <div className="box">
            <div className="bgImg"></div>
            <div className="bgLogo"></div>
            <div className="title">
              <p>the</p>
              <p>avengers</p>
            </div>
          </div>
        </HomeStyle>
      </div>
    );
  }
}
