import React, { Component } from "react";

import { MenuButtonStyle } from "../../2_styles/3_module/0_buttons/MenuButtonStyle";
import Menu from "../2_module/Menu";

export default class MenuButton extends Component {
  toggleMenu = () => {
    this.props.toggleMenu();
  };

  render() {
    const { disabled } = this.props;

    return (
      <div>
        <div id="menu_btn-box">
          <MenuButtonStyle>
            <button
              id="menu_btn"
              className="menu_btn-animate"
              onClick={this.toggleMenu}
              disabled={disabled}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </MenuButtonStyle>
        </div>
        <Menu toggleMenu={this.toggleMenu} />
      </div>
    );
  }
}
