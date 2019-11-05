import React, { Component } from "react";

import Header from "../../0_components/1_layout/Header";
import Section from "../../0_components/1_layout/Section";
import Footer from "../../0_components/1_layout/Footer";

const contentful = require("contentful");

export default class Hawkeye extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      images: {
        header: { small: "", big: "" },
        section1: { small: "", big: "" },
        section2: { small: "", big: "" },
        section3: { small: "", big: "" },
        section4: { small: "", big: "" }
      }
    };
  }

  getData = async () => {
    const client = contentful.createClient({
      space: "b4lkqx9hlu6y",
      accessToken: "7ehrQIlJJLgAlYL9qMa4CeLdxIdiUJWrbtPOWpQThBc"
    });

    client
      .getEntries({ content_type: "hawkeye" })
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
            },
            section2: {
              small: this.state.data.bgImgSection2[0].fields.file.url,
              big: this.state.data.bgImgSection2[1].fields.file.url
            },
            section3: {
              small: this.state.data.bgImgSection3[0].fields.file.url,
              big: this.state.data.bgImgSection3[1].fields.file.url
            },
            section4: {
              small: this.state.data.bgImgSection4[0].fields.file.url,
              big: this.state.data.bgImgSection4[1].fields.file.url
            }
          }
        });
      })
      .catch(console.error);
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const { data, images } = this.state;
    const screenWidth = window.screen.width;

    return (
      <div>
        <Header
          bgImg={screenWidth < 600 ? images.header.small : images.header.big}
          title={data.title}
          subtitle={data.subtitle}
          bgPosition="70%"
        />

        <Section
          bgImg={
            screenWidth < 600 ? images.section1.small : images.section1.big
          }
          title={data.section1Title}
          description={[
            <p>
              Clinton Francis "Clint" Barton, also known as Hawkeye, is a
              skilled marksman, a former special agent of S.H.I.E.L.D. and one
              of the founding members of the Avengers.
            </p>,
            <p>
              Known for his use of the bow and arrow as his primary weapon,
              Barton had become one of the best agents of S.H.I.E.L.D.,
              responsible for the recruitment of Black Widow, whom he developed
              a strong friendship with.
            </p>,
            <p>
              Assigned by Nick Fury into watching over the Tesseract, he was
              brainwashed by Loki and used as a pawn for all his evil schemes.
              However, following their Attack on the Helicarrier, he was freed
              from Loki's mental control by Black Widow and joined the Avengers
              to fight against Loki's Chitauri army in the Battle of New York,
              ending Loki's Invasion before Hawkeye had returned to his work as
              a S.H.I.E.L.D. agent.
            </p>
          ]}
          bgPosition="19%"
        />

        <Section
          bgImg={
            screenWidth < 600 ? images.section2.small : images.section2.big
          }
          title={data.section2Title}
          description={[
            <p>
              Hawkeye continued to work for S.H.I.E.L.D. until its collapse
              following the HYDRA Uprising, he and the Avengers worked to bring
              down the remnants of HYDRA, eventually capturing Wolfgang von
              Strucker and ending the organization's threat to the world.
            </p>,
            <p>
              However, Hawkeye was pulled back into the fight as Tony Stark had
              inadvertently used HYDRA as well as some Chitauri technology to
              create Ultron. As Ultron tried to destroy the world, he allied
              himself with Pietro and Wanda Maximoff and Barton focused much of
              his efforts in convincing them to change sides while keeping all
              the Avengers safe by bringing them into his family home.
            </p>,
            <p>
              During the final Battle of Sokovia, Hawkeye's life was saved by
              Quicksilver's sacrifice, resulting in Barton retiring from the
              Avengers to return to his family.
            </p>
          ]}
        />

        <Section
          bgImg={
            screenWidth < 600 ? images.section3.small : images.section3.big
          }
          title={data.section3Title}
          description={[
            <p>
              Despite living happily within retirement for a brief time, Barton
              was recruited by Captain America to help him during his fight
              against the newly produced Sokovia Accords, which forced Rogers to
              protect his friend Bucky Barnes from being arrested for a crime he
              did not commit.
            </p>,
            <p>
              Feeling that he owed a debt to Rogers and Maximoff, Hawkeye had
              joined in the Clash of the Avengers, fighting against Iron Man who
              was in support of the Accords. Despite putting up a good fight,
              Hawkeye and most of their team were eventually defeated and
              imprisoned at the Raft under the orders of Thaddeus Ross, only to
              be freed by Rogers.
            </p>,
            <p>
              Barton returned back to retirement and, after striking his deal
              with Ross, was then placed under house arrest.
            </p>
          ]}
          bgPosition="60%"
        />

        <Section
          bgImg={
            screenWidth < 600 ? images.section4.small : images.section4.big
          }
          title={data.section4Title}
          description={[
            <p>
              In the wake of the Snap, Barton then went onto a grief-fuelled
              rampage against criminals for five years as a vigilante named
              Rōnin. Having been found by Black Widow, Barton was then convinced
              to return to the Avengers to attempt to reverse the Snap.
            </p>,
            <p>
              Hawkeye joined the team in enacting the Time Heist in order to
              obtain the Infinity Stones, during which he witnessed Romanoff
              sacrifice her life so Hawkeye could reclaim the Soul Stone.
              However, as the Avengers had succeeded in their goal, they were
              ambushed by Thanos, with Hawkeye being ordered to ensure Thanos
              could not get the Nano Gauntlet.
            </p>,
            <p>
              Eventually, Thanos and his entire army were defeated as Tony Stark
              had sacrificed his life, allowing Barton to then return home with
              his beloved family, while he still mourned Romanoff's death.
            </p>
          ]}
          bgPosition="40%"
        />

        <Footer />
      </div>
    );
  }
}
