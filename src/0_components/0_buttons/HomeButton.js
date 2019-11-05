import React, { Component } from "react";
import { Link } from "react-router-dom";

import HomeButtonImg from "../../3_images/1_home/icon_home-small.png";
import { HomeButtonStyle } from "../../2_styles/3_module/0_buttons/HomeButtonStyle";

export default class HomeButton extends Component {
  componentDidMount() {
    this.handleAnimation();
  }

  toggleMenu = () => {
    const menuBox = document.getElementById("menu_box");
    menuBox.classList.contains("menu_box-show") && this.props.toggleMenu();
  };

  handleAnimation = () => {
    const homeBtn = document.getElementById("home_btn");
    const menuBtn = document.getElementById("menu_btn");

    const currentUrl = window.location.href;
    const homeUrl = "http://localhost:3000/";

    if (currentUrl === homeUrl) {
      homeBtn.classList.add("home_btn-show");
      menuBtn.classList.add("menu_btn-show");
    } else {
      document.getElementById("home_btn").style.opacity = "1";
      document.getElementById("menu_btn").style.opacity = "1";
    }
  };

  handleClick = () => {
    document.getElementById("home_btn").style.opacity = "0";
    document.getElementById("menu_btn").style.opacity = "0";

    this.handleAnimation();
  };

  render() {
    return (
      <div>
        <HomeButtonStyle>
          <button id="home_btn" onClick={(this.toggleMenu, this.handleClick)}>
            <Link to="/">
              <img src={HomeButtonImg} alt="avengers logo" />
            </Link>
          </button>
        </HomeButtonStyle>
      </div>
    );
  }
}
