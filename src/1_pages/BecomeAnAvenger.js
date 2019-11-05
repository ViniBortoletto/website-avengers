import React, { Component } from "react";

import Header from "../0_components/1_layout/Header";
import Footer from "../0_components/1_layout/Footer";
import BackgroundImg from "../0_components/1_layout/BackgroundImg";
import Form from "../0_components/2_module/Form";

const contentful = require("contentful");

export default class BecomeAnAvenger extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      images: {
        header: { small: "", big: "" },
        section1: { small: "", big: "" }
      }
    };
  }

  getData = async () => {
    const client = contentful.createClient({
      space: "b4lkqx9hlu6y",
      accessToken: "7ehrQIlJJLgAlYL9qMa4CeLdxIdiUJWrbtPOWpQThBc"
    });

    client
      .getEntries({ content_type: "becomeAnAvenger" })
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
            section1: {
              small: this.state.data.bgImgSection1[0].fields.file.url,
              big: this.state.data.bgImgSection1[1].fields.file.url
            }
          }
        });
      })
      .catch(console.error);
  };

  componentDidMount() {
    this.getData();
  }

  inputOnFocus = () => {
    document.querySelector(".form_bgImg").classList.add("from_bgImg-blur");
  };

  inputOnBlur = () => {
    document.querySelector(".form_bgImg").classList.remove("from_bgImg-blur");
  };

  render() {
    const { data, images } = this.state;
    const screenWidth = window.screen.width;

    return (
      <div>
        <Header
          bgImg={screenWidth < 600 ? images.header.small : images.header.big}
          title={data.title}
          subtitle={data.subtitle}
          bgPosition="80%"
        />

        <BackgroundImg
          bgImg={
            screenWidth < 600 ? images.section1.small : images.section1.big
          }
          bgPosition="40%"
        />
        <Form />

        <Footer />
      </div>
    );
  }
}
