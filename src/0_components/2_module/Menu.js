import React, { Component } from "react";
import { Link } from "react-router-dom";

import bgLogo from "../../3_images/1_home/icon_home-big.png";

import { MenuStyle } from "../../2_styles/3_module/MenuStyle";
import Line from "../2_module/Line";

export default class Menu extends Component {
  toggleMenu = () => {
    this.props.toggleMenu();
  };

  scrollTop = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <MenuStyle bgLogo={bgLogo}>
        <div id="menu_box">
          <div className="menu_bgLogo">
            <img id="bgLogo_img" src={bgLogo} alt="avengers logo" />
          </div>
          <div className="menu_items">
            <Link
              onClick={this.toggleMenu}
              onMouseUp={this.scrollTop}
              className="link_initiative"
              to="/the-initiative"
            >
              <div className="menu_link initiative ">
                <span>The</span> Initiative
              </div>
            </Link>

            <div className="line menu_line menu_line-top">
              <Line
                opacity="0.3"
                width="20vw"
                background="linear-gradient(to right, transparent, #f0f0f0)"
              />
            </div>

            <Link
              onClick={this.toggleMenu}
              onMouseUp={this.scrollTop}
              className="link_original"
              to="/the-original-six"
            >
              <div className="menu_link original">
                <span>The</span> Original Six
              </div>
            </Link>

            <div className="line menu_line delay menu_line-bottom">
              <Line
                opacity="0.3"
                width="20vw"
                background="linear-gradient(to right, transparent, #f0f0f0)"
              />
            </div>

            <Link
              onClick={this.toggleMenu}
              onMouseUp={this.scrollTop}
              className="link_become"
              to="/become-an-avenger"
            >
              <div className="menu_link become">
                <span>Become</span> An Avenger
              </div>
            </Link>
          </div>
        </div>
      </MenuStyle>
    );
  }
}
