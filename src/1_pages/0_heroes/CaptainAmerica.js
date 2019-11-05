import React, { Component } from "react";

import Header from "../../0_components/1_layout/Header";
import Section from "../../0_components/1_layout/Section";
import Footer from "../../0_components/1_layout/Footer";

const contentful = require("contentful");

export default class captainAmerica extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      images: {
        header: { small: "", big: "" },
        section1: { small: "", big: "" },
        section2: { small: "", big: "" },
        section3: { small: "", big: "" },
        section4: { small: "", big: "" },
        section5: { small: "", big: "" },
        section6: { small: "", big: "" },
        section7: { small: "", big: "" },
        section8: { small: "", big: "" }
      }
    };
  }

  getData = async () => {
    const client = contentful.createClient({
      space: "b4lkqx9hlu6y",
      accessToken: "7ehrQIlJJLgAlYL9qMa4CeLdxIdiUJWrbtPOWpQThBc"
    });

    client
      .getEntries({ content_type: "captainAmerica" })
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
            },
            section5: {
              small: this.state.data.bgImgSection5[0].fields.file.url,
              big: this.state.data.bgImgSection5[1].fields.file.url
            },
            section6: {
              small: this.state.data.bgImgSection6[0].fields.file.url,
              big: this.state.data.bgImgSection6[1].fields.file.url
            },
            section7: {
              small: this.state.data.bgImgSection7[0].fields.file.url,
              big: this.state.data.bgImgSection7[1].fields.file.url
            },
            section8: {
              small: this.state.data.bgImgSection8[0].fields.file.url,
              big: this.state.data.bgImgSection8[1].fields.file.url
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
          bgPosition="53%"
        />

        <Section
          bgImg={
            screenWidth < 600 ? images.section1.small : images.section1.big
          }
          title={data.section1Title}
          description={[
            <p>
              Captain Steven Grant "Steve" Rogers is a World War II veteran, a
              founding member of the Avengers, and Earth's first superhero.
            </p>,
            <p>
              Rogers had suffered from numerous health problems, and upon
              America's entry into World War II, was rejected from the service
              within United States Army despite several attempts to enlist.
              Rogers was the only recipient of the Super Soldier Serum developed
              by Abraham Erskine under the Strategic Scientific Reserve.
              Determined to serve, Rogers ultimately volunteered for the Project
              Rebirth, which enhanced the frail Rogers' body to the peak of
              human physicality.
            </p>,
            <p>
              Mistrusted by Chester Phillips, the head of the SSR, Rogers was
              relegated to propaganda campaigns, and was given the new moniker
              of Captain America.
            </p>,
            <p>
              Rogers later joined the war with a combat role after he
              single-handedly liberated captured Allied prisoners of war.
            </p>
          ]}
        />

        <Section
          bgImg={
            screenWidth < 600 ? images.section2.small : images.section2.big
          }
          title={data.section2Title}
          description={[
            <p>
              From 1943 to 1945, Rogers attacked multiple HYDRA bases alongside
              the Howling Commandos, in another attempt to take down Red Skull,
              and recover the Tesseract.
            </p>,
            <p>
              His famous World War II exploits had made him a living legend, and
              during this time he also formed a relationship with Peggy Carter.
              Despite Bucky Barnes seemingly died during a mission, Rogers
              carried on to help the Allies win the war, but crashed into the
              Arctic during his final mission.
            </p>,
            <p>
              Rogers then spent sixty-six years encased into ice in suspended
              animation before Rogers was eventually found by S.H.I.E.L.D. in
              the early 21st century.
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
              When he awoke, Rogers had found himself alone in a modern world
              that he hardly recognized, with no idea what to do with his life.
              Following Loki having stolen the Tesseract from S.H.I.E.L.D. and
              declaring war on humanity, Nick Fury enlisted Rogers' help in
              retrieving what he had once known as HYDRA's weapon, and also
              foiling Loki's plans.
            </p>,
            <p>
              Joining the Avengers, Rogers played one of the key roles in the
              Battle of New York, successfully stopping the Chitauri Invasion,
              capturing Loki, and reacquiring the Tesseract while finding his
              place within this new world.
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
              Joining S.H.I.E.L.D. as his way to maintain peace and justice with
              the aid of Black Widow, Captain America had come into a fierce
              conflict against the Winter Soldier who had seemingly assassinated
              Fury.
            </p>,
            <p>
              Having been blamed for the incident by Alexander Pierce, Rogers
              discovered that HYDRA, whom he thought had dissolved in 1945, had
              existed in secret as a parasite within S.H.I.E.L.D., and that they
              were planning to use Project Insight as a way to bring about a new
              world order, while also learning that Winter Soldier was, in fact,
              his best friend Barnes, operating as the brainwashed assassin.
              Along Romanoff, Maria Hill and Falcon, Rogers had ended the HYDRA
              Uprising.
            </p>,
            <p>
              As the immediate threat of HYDRA was quelled, Rogers embarked on a
              quest to locate Barnes.
            </p>
          ]}
          bgPosition="60%"
        />

        <Section
          bgImg={
            screenWidth < 600 ? images.section5.small : images.section5.big
          }
          title={data.section5Title}
          description={[
            <p>
              During the search for Barnes, the Avengers had assembled in order
              to eliminate the remnants of HYDRA, which prompted Rogers to
              abandon his own quest and rejoin all of his former teammates to
              help capture the Scepter and Baron Wolfgang von Strucker.
            </p>,
            <p>
              After securing their victory, Rogers was almost immediately thrown
              into another crisis when Ultron, the new peacekeeping artificial
              intelligent program designed by Tony Stark and Bruce Banner, began
              a plot to eliminate humanity. Following a prolonged and brutal
              conflict in which Vision's creation gave them an advantage, Ultron
              was defeated during the Battle of Sokovia.
            </p>,
            <p>
              However, the cost of their battle meant many of the Avengers
              disbanded, while Rogers and Romanoff stayed to lead the second
              incarnation of the Avengers.
            </p>
          ]}
          bgPosition="40%"
        />

        <Section
          bgImg={
            screenWidth < 600 ? images.section6.small : images.section6.big
          }
          title={data.section6Title}
          description={[
            <p>
              While the Avengers conducted worldwide missions, they soon began
              tracking down Crossbones, only for Scarlet Witch to be blamed for
              innocent deaths when she failed to fully contain an explosion that
              Crossbones caused.
            </p>,
            <p>
              Thaddeus Ross used the disaster to write the Sokovia Accords, but
              Rogers refused to sign due to moral disagreements. Rogers'
              problems increased more as Barnes resurfaced having seemingly
              caused a recent terrorist bombing, as Rogers chose to protect
              Barnes, which then lead to Ross sending Stark out to apprehend
              them both.
            </p>,
            <p>
              Upon learning Helmut Zemo was to blame, Rogers fought against his
              former allies to find Zemo, only for Zemo's schemes to finally be
              completed as he revealed Barnes killed Stark's parents, resulting
              in Rogers going on the run and the Avengers falling apart due to
              Rogers and Stark's conflict.
            </p>
          ]}
        />

        <Section
          bgImg={
            screenWidth < 600 ? images.section7.small : images.section7.big
          }
          title={data.section7Title}
          description={[
            <p>
              Having saved his friends from the Raft, Rogers sent Barnes to gain
              help from Black Panther in Wakanda, while he and all his allies
              then became vigilantes.
            </p>,
            <p>
              However, when Thanos and his Black Order attacked Earth seeking
              the final Infinity Stones, Rogers came out of hiding in order to
              protect Vision. In order to keep Vision safe, Rogers had brought
              him to Wakanda, while he and Black Panther's army held off the
              onslaught of Outriders sent down by Thanos.
            </p>,
            <p>
              Despite their success with destroying Thanos' forces, when Thanos
              himself arrived on the planet, he effortlessly overpowered Rogers
              and all the other heroes and took the Mind Stone, killing Vision
              in the process.
            </p>,
            <p>
              Despite all their attempts, Thanos completed his goal and wiped
              out half of the population of the universe, leaving Rogers to
              witness his best friend die again alongside his countless others.
            </p>
          ]}
          bgPosition="35%"
        />

        <Section
          bgImg={
            screenWidth < 600 ? images.section8.small : images.section8.big
          }
          title={data.section8Title}
          description={[
            <p>
              Five years after the Snap, Captain America and his fellow Avengers
              found a method to traverse through time safely and traveled to
              various points in the past to amass all six Infinity Stones.
            </p>,
            <p>
              After successfully aiding in the resurrection of the lives taken
              by the snap, Captain America participated in the Battle of Earth
              and was deemed worthy of Mjølnir, wielding it in combat against
              Thanos.
            </p>,
            <p>
              After Iron Man sacrificed his life to kill Thanos and his army,
              Rogers attended his friend's funeral before traveling back in time
              to restore Mjølnir and the Infinity Stones to their original time.
            </p>,
            <p>
              However, after returning the items, Rogers chose to travel back to
              the 1940s and live out a life in the past, where he married Peggy
              Carter. Having grown old, Rogers paid a visit to Wilson in 2023,
              entrusting him with his shield.
            </p>
          ]}
        />

        <Footer />
      </div>
    );
  }
}
