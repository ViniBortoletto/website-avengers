import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "../0_components/1_layout/Header";
import { TheOriginalSixStyle } from "../2_styles/1_layout/TheOriginalSixStyle";

const contentful = require("contentful");

export default class TheOriginalSix extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      id: { cap: "captain-america" },
      images: {
        header: { small: "", big: "" },
        icons: {
          cap: "",
          iron: "",
          thor: "",
          hulk: "",
          widow: "",
          hawk: ""
        },
        banners: {
          cap: { small: "", big: "" },
          iron: { small: "", big: "" },
          thor: { small: "", big: "" },
          hulk: { small: "", big: "" },
          widow: { small: "", big: "" },
          hawk: { small: "", big: "" }
        }
      }
    };
  }

  getData = async () => {
    const client = contentful.createClient({
      space: "b4lkqx9hlu6y",
      accessToken: "7ehrQIlJJLgAlYL9qMa4CeLdxIdiUJWrbtPOWpQThBc"
    });

    client
      .getEntries({ content_type: "theOriginalSix" })
      .then(response => {
        this.setState({
          data: response.items[0].fields
        });

        this.setState({
          images: {
            header: {
              small: this.state.data.bgImgHeader[0].fields.file.url,
              big: this.state.data.bgImgHeader[1].fields.file.url
            },
            icons: {
              cap: this.state.data.icons[0].fields.file.url,
              iron: this.state.data.icons[1].fields.file.url,
              thor: this.state.data.icons[2].fields.file.url,
              hulk: this.state.data.icons[3].fields.file.url,
              widow: this.state.data.icons[4].fields.file.url,
              hawk: this.state.data.icons[5].fields.file.url
            },
            banners: {
              cap: {
                small: this.state.data.bgImgCap[0].fields.file.url,
                big: this.state.data.bgImgCap[1].fields.file.url
              },
              iron: {
                small: this.state.data.bgImgIron[0].fields.file.url,
                big: this.state.data.bgImgIron[1].fields.file.url
              },
              thor: {
                small: this.state.data.bgImgThor[0].fields.file.url,
                big: this.state.data.bgImgThor[1].fields.file.url
              },
              hulk: {
                small: this.state.data.bgImgHulk[0].fields.file.url,
                big: this.state.data.bgImgHulk[1].fields.file.url
              },
              widow: {
                small: this.state.data.bgImgWidow[0].fields.file.url,
                big: this.state.data.bgImgWidow[1].fields.file.url
              },
              hawk: {
                small: this.state.data.bgImgHawk[0].fields.file.url,
                big: this.state.data.bgImgHawk[1].fields.file.url
              }
            }
          }
        });
      })
      .catch(console.error);
  };

  componentDidMount() {
    this.getData();
    this.toggleHeaderImg();
  }

  toggleHeaderImg = () => {
    const btnCap = document.getElementById("icon_cap");
    const btnIron = document.getElementById("icon_iron");
    const btnThor = document.getElementById("icon_thor");
    const btnHulk = document.getElementById("icon_hulk");
    const btnWidow = document.getElementById("icon_widow");
    const btnHawk = document.getElementById("icon_hawk");

    const bgCap = document.querySelector(".bg_heroes-cap");
    const bgIron = document.querySelector(".bg_heroes-iron");
    const bgThor = document.querySelector(".bg_heroes-thor");
    const bgHulk = document.querySelector(".bg_heroes-hulk");
    const bgWidow = document.querySelector(".bg_heroes-widow");
    const bgHawk = document.querySelector(".bg_heroes-hawk");

    btnCap.addEventListener("mouseover", function() {
      bgCap.classList.toggle("active");
    });
    btnCap.addEventListener("mouseout", function() {
      bgCap.classList.toggle("active");
    });

    btnIron.addEventListener("mouseover", function() {
      bgIron.classList.toggle("active");
    });
    btnIron.addEventListener("mouseout", function() {
      bgIron.classList.toggle("active");
    });

    btnThor.addEventListener("mouseover", function() {
      bgThor.classList.toggle("active");
    });
    btnThor.addEventListener("mouseout", function() {
      bgThor.classList.toggle("active");
    });

    btnHulk.addEventListener("mouseover", function() {
      bgHulk.classList.toggle("active");
    });
    btnHulk.addEventListener("mouseout", function() {
      bgHulk.classList.toggle("active");
    });

    btnWidow.addEventListener("mouseover", function() {
      bgWidow.classList.toggle("active");
    });
    btnWidow.addEventListener("mouseout", function() {
      bgWidow.classList.toggle("active");
    });

    btnHawk.addEventListener("mouseover", function() {
      bgHawk.classList.toggle("active");
    });
    btnHawk.addEventListener("mouseout", function() {
      bgHawk.classList.toggle("active");
    });
  };

  disableScrollBar = () => {};

  render() {
    const { data, images } = this.state;
    const screenWidth = window.screen.width;

    return (
      <div>
        <Header
          the="the"
          bgImg={screenWidth < 600 ? images.header.small : images.header.big}
          title={data.title}
          subtitle={data.subtitle}
          bgPosition="20%"
          // position="absolute"
          // heightHeaderText="auto"
          // marginTop="40vh"
          // fontSizeTitle="2.5rem"
          // marginBottom="1rem"
        />

        <TheOriginalSixStyle
          bgCap={
            screenWidth < 600
              ? images.banners.cap.small
              : images.banners.cap.big
          }
          bgIron={
            screenWidth < 600
              ? images.banners.iron.small
              : images.banners.iron.big
          }
          bgThor={
            screenWidth < 600
              ? images.banners.thor.small
              : images.banners.thor.big
          }
          bgHulk={
            screenWidth < 600
              ? images.banners.hulk.small
              : images.banners.hulk.big
          }
          bgWidow={
            screenWidth < 600
              ? images.banners.widow.small
              : images.banners.widow.big
          }
          bgHawk={
            screenWidth < 600
              ? images.banners.hawk.small
              : images.banners.hawk.big
          }
        >
          <div className="icons_box">
            <Link to="/captain-america">
              <div className="icon_cap-box">
                <img
                  id="icon_cap"
                  className="icons_img"
                  src={images.icons.cap}
                  alt="captain america logo"
                />
              </div>
            </Link>

            <Link to="/iron-man">
              <div className="icon_iron-box">
                <img
                  id="icon_iron"
                  className="icons_img"
                  src={images.icons.iron}
                  alt="iron man logo"
                />
              </div>
            </Link>

            <Link to="/thor">
              <div className="icon_thor-box">
                <img
                  id="icon_thor"
                  className="icons_img"
                  src={images.icons.thor}
                  alt="thor logo"
                />
              </div>
            </Link>

            <Link to="/hulk">
              <div className="icon_hulk-box">
                <img
                  id="icon_hulk"
                  className="icons_img"
                  src={images.icons.hulk}
                  alt="hulk logo"
                />
              </div>
            </Link>

            <Link to="/black-widow">
              <div>
                <img
                  id="icon_widow"
                  className="icons_img"
                  src={images.icons.widow}
                  alt="black widow logo"
                />
              </div>
            </Link>

            <Link to="/hawkeye">
              <div className="icon_hawk-box">
                <img
                  id="icon_hawk"
                  className="icons_img"
                  src={images.icons.hawk}
                  alt="hawkeye logo"
                />
              </div>
            </Link>
          </div>

          <div className="bg_heroes-box">
            <div className="bg_heroes bg_heroes-cap"></div>
            <div className="bg_heroes bg_heroes-iron"></div>
            <div className="bg_heroes bg_heroes-thor"></div>
            <div className="bg_heroes bg_heroes-hulk"></div>
            <div className="bg_heroes bg_heroes-widow"></div>
            <div className="bg_heroes bg_heroes-hawk"></div>
          </div>
        </TheOriginalSixStyle>
      </div>
    );
  }
}
