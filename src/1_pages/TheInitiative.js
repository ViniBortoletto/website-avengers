import React, { Component } from "react";

import Header from "../0_components/1_layout/Header";
import Section from "../0_components/1_layout/Section";
import Footer from "../0_components/1_layout/Footer";

const contentful = require("contentful");

export default class TheInitiative extends Component {
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

  getData = () => {
    const client = contentful.createClient({
      space: "b4lkqx9hlu6y",
      accessToken: "7ehrQIlJJLgAlYL9qMa4CeLdxIdiUJWrbtPOWpQThBc"
    });

    client
      .getEntries({ content_type: "theInitiative" })
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
          the="the"
          bgImg={screenWidth < 600 ? images.header.small : images.header.big}
          title={data.title}
          subtitle={data.subtitle}
          bgPosition="30%"
        />

        <Section
          bgImg={
            screenWidth < 600 ? images.section1.small : images.section1.big
          }
          title={data.section1Title}
          description={[
            <p>
              The Avengers Initiative (a.k.a Phase 1; originally conceptualized
              as the Protector Initiative) was a secret project created by
              S.H.I.E.L.D. to create the Avengers, a response team comprised of
              the most able individuals humankind has to offer. The Initiative
              will defend Earth from imminent global threats that are beyond the
              warfighting capability of conventional military forces.
            </p>,
            <p>
              In 1995, S.H.I.E.L.D. was involved in the conflict with the Kree
              and the Skrulls, and Nick Fury teamed up with Carol Danvers to
              save the Skrulls from the Kree and retrieve the Tesseract.
            </p>,
            <p>
              Having been inspired by Danvers and witnessing firsthand how
              humanity is not capable of dealing with intergalactic threats,
              Fury became determined to protect the Earth from more
              intergalactic threats like the Kree. He sought to find individuals
              with incredible powers and abilities just like Danvers in hopes of
              bringing them together as a team to fight as Earth's protectors.
              The initiative was originally named "The Protector Initiative",
              however, after Fury saw Danvers' call-sign from the time when she
              was in the United States Air Force, he renamed it into the
              Avengers Initiative.
            </p>
          ]}
          bgPosition="70%"
        />

        <Section
          bgImg={
            screenWidth < 600 ? images.section2.small : images.section2.big
          }
          title={data.section2Title}
          description={[
            <p>
              While S.H.I.E.L.D. was devoting a majority of its resources into
              the building of the Triskelion, Nick Fury used finances to observe
              individuals who possibly had superpowers, sending agents to
              investigate these individuals and have them placed on the Index
              for later encounters.
            </p>,
            <p>
              In 2008, Phil Coulson and Melinda May discussed the initiative
              enacted by Fury as they went to Manama, Bahrain to investigate Eva
              Belyakov. Fury had also included two of S.H.I.E.L.D. most elite
              agents, Natasha Romanoff and Clint Barton, for the Avengers
              Initiative due to their unique and incredible skills that rank
              them above other agents.
            </p>,
            <p>
              Tony Stark went home after he publicly announced he was Iron Man,
              only to find Nick Fury already there. Fury went to find Stark to
              inform him that there was an entire world of incredible people,
              just like him, and of the Avengers Initiative.
            </p>,
            <p>
              After meeting with Jasper Sitwell in a cafe, Phil Coulson informed
              him that the World Security Council had accepted the Avengers
              Initiative, but had ordered the Abomination to join the team
              roster, as they were blaming Hulk for the destruction in New York
              City. They ended up sending Tony Stark to meet with Thaddeus Ross
              and convinced him to refuse Abomination's admission into the
              project, as well as attempted to recruit Hulk into the team.
            </p>,
            <p>
              Nick Fury decided that, after reading Black Widow's review about
              him, Stark was not fit to join the Avengers Initiative, though the
              Iron Man armor was. The Avengers Initiative was scrapped soon
              after by the World Security Council after the alien incursion in
              New Mexico in favor of a weapons development program known as
              Phase 2.
            </p>
          ]}
          bgPosition="35%"
        />

        <Section
          bgImg={
            screenWidth < 600 ? images.section3.small : images.section3.big
          }
          title={data.section3Title}
          description={[
            <p>
              Sixty-six years after Captain America's crash landing, a
              S.H.I.E.L.D. team led by Fury searched for his body. A fan of the
              Captain, Coulson, was also part of this small team. The team
              searched for two years to find Rogers' body. When they finally
              found him, they defrosted him and then shipped his body to New
              York City. When Rogers arrived in New York City, he was kept in a
              simulated 1942 environment to try to ease him into what was
              happening.
            </p>,
            <p>
              When he awoke, he quickly realized it was not real and escaped
              into the streets of a 2011 New York. In Times Square, Rogers
              encountered Fury who told him that he's been "asleep" for nearly
              seventy years. Rogers then realized that many of his old friends
              were very likely dead, including his love interest, Peggy Carter.
            </p>
          ]}
        />

        <Section
          bgImg={
            screenWidth < 600 ? images.section4.small : images.section4.big
          }
          title={data.section4Title}
          description={[
            <p>
              Loki stole the Tesseract from Project P.E.G.A.S.U.S., and
              destroyed the base, killing eighty people during the process,
              causing Nick Fury to revive the project. He called in Captain
              America to join, and sent Black Widow to get Hulk, who was now
              living in a rural village in India. Meanwhile, Phil Coulson was
              sent to Stark Tower to retrieve Tony Stark.
            </p>,
            <p>
              Thor returned to Earth from Asgard in order to get his adopted
              brother.
            </p>,
            <p>
              After the Avengers were formed, they were not cooperating and
              failed to prevent Loki's escape from the Helicarrier. They
              believed they were not meant to be together and were thinking of
              disbanding the team. It was only Phil Coulson's death that
              motivated them to fight the Chitauri invasion on New York City.
              After their victory in defeating the Chitauri, Nick Fury and Maria
              Hill agree that it was the correct choice to form the team and
              that they will return for any future threat.
            </p>
          ]}
          bgPosition="35%"
        />
        <Footer />
      </div>
    );
  }
}
