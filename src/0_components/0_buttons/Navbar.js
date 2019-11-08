import React, { Component } from "react";

import HomeButton from "./HomeButton";
import MenuButton from "./MenuButton";

import { NavbarStyle } from "../../2_styles/3_module/NavbarStyle";

let menuActive = false;

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = { disabled: false };
  }

  componentDidMount() {
    this.toggleNavbar();
  }

  toggleNavbar = () => {
    let prevScrollpos = window.pageYOffset;

    window.addEventListener("scroll", function() {
      let currentScrollPos = window.pageYOffset;

      if (menuActive === true) {
        return;
      }

      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.opacity = "1";
      } else {
        document.getElementById("navbar").style.opacity = "0";
      }
      prevScrollpos = currentScrollPos;
    });
  };

  toggleLinks = () => {
    const links = document.querySelectorAll(".menu_link");

    if (!menuActive) {
      links.forEach(link => {
        link.classList.contains("menu_link-hide") &&
          link.classList.remove("menu_link-hide");

        link.classList.contains("initiative") &&
          setTimeout(() => {
            link.classList.add("menu_link-show");
          }, 100);
        link.classList.contains("original") &&
          setTimeout(() => {
            link.classList.add("menu_link-show");
          }, 200);
        link.classList.contains("become") &&
          setTimeout(() => {
            link.classList.add("menu_link-show");
          }, 300);
      });
    } else {
      links.forEach(link => {
        setTimeout(() => {
          link.classList.remove("menu_link-show");
        }, 200);

        link.classList.add("menu_link-hide");
      });
    }
  };

  toggleLines = () => {
    const links = document.querySelectorAll(".menu_link");

    const lines = document.querySelectorAll(".menu_line");
    const lineTop = document.querySelector(".menu_line-top");
    const lineBottom = document.querySelector(".menu_line-bottom");

    if (!menuActive) {
      lines.forEach(line => {
        line.classList.contains("menu_line-hide") &&
          line.classList.remove("menu_line-hide");
        setTimeout(() => {
          line.classList.add("menu_line-show");
        }, 700);
      });

      links.forEach(link => {
        link.addEventListener("mouseover", function() {
          if (link.classList.contains("initiative")) {
            lineTop.classList.add("active");
          }
          if (link.classList.contains("original")) {
            lineTop.classList.add("active");
            lineBottom.classList.add("active");
          }
          if (link.classList.contains("become")) {
            lineBottom.classList.add("active");
          }
        });

        link.addEventListener("mouseout", function() {
          if (link.classList.contains("initiative")) {
            lineTop.classList.remove("active");
          }
          if (link.classList.contains("original")) {
            lineTop.classList.remove("active");
            lineBottom.classList.remove("active");
          }
          if (link.classList.contains("become")) {
            lineBottom.classList.remove("active");
          }
        });
      });
    } else {
      lines.forEach(line => {
        line.classList.add("menu_line-hide");
        setTimeout(() => {
          line.classList.remove("menu_line-show");
        }, 50);
      });
    }
  };

  toggleMenu = () => {
    const mainBox = document.getElementById("main_box");
    const menuBox = document.getElementById("menu_box");
    const menuBtn = document.getElementById("menu_btn");
    const menuBg = document.querySelector(".menu_bgLogo");
    const menuItems = document.querySelector(".menu_items");

    mainBox.classList.toggle("main_box-blur");
    menuBtn.classList.toggle("menu_btn-toggle");
    menuBtn.classList.toggle("menu_btn-animate");
    menuBg.classList.toggle("menu_bgLogo-toggle");
    menuItems.classList.toggle("menu_items-toggle");

    if (!menuActive) {
      menuBox.classList.contains("menu_box-hide") &&
        menuBox.classList.remove("menu_box-hide");
      menuBox.classList.add("menu_box-show");

      this.setState({ disabled: true });
      setTimeout(() => {
        this.setState({ disabled: false });
      }, 1000);

      this.toggleLinks();
      this.toggleLines();

      menuActive = true;
    } else {
      menuBox.classList.remove("menu_box-show");
      menuBox.classList.add("menu_box-hide");

      this.setState({ disabled: true });
      setTimeout(() => {
        this.setState({ disabled: false });
      }, 700);

      this.toggleLinks();
      this.toggleLines();

      menuActive = false;
    }
  };

  render() {
    const { disabled } = this.state;

    return (
      <div>
        <NavbarStyle>
          <div id="navbar">
            <HomeButton toggleMenu={this.toggleMenu} />
            <MenuButton toggleMenu={this.toggleMenu} disabled={disabled} />
          </div>
        </NavbarStyle>
      </div>
    );
  }
}
