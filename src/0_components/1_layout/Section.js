import React, { Component } from "react";

import { SectionStyle } from "../../2_styles/1_layout/SectionStyle";
import BackgroundImg from "../../0_components/1_layout/BackgroundImg";

export default class Section extends Component {
  render() {
    const { bgImg, title, description, bgPosition } = this.props;

    return (
      <div>
        <SectionStyle>
          <BackgroundImg bgImg={bgImg} bgPosition={bgPosition} />
          <div className="text">
            <div className="title">{title}</div>
            <div className="description">{description}</div>
          </div>
        </SectionStyle>
      </div>
    );
  }
}
