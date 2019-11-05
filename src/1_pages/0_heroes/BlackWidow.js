import React, { Component } from "react";

import Header from "../../0_components/1_layout/Header";
import Section from "../../0_components/1_layout/Section";
import Footer from "../../0_components/1_layout/Footer";

const contentful = require("contentful");

export default class BlackWidow extends Component {
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
        section7: { small: "", big: "" }
      }
    };
  }

  getData = async () => {
    const client = contentful.createClient({
      space: "b4lkqx9hlu6y",
      accessToken: "7ehrQIlJJLgAlYL9qMa4CeLdxIdiUJWrbtPOWpQThBc"
    });

    client
      .getEntries({ content_type: "blackWidow" })
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
        />

        <Section
          bgImg={
            screenWidth < 600 ? images.section1.small : images.section1.big
          }
          title={data.section1Title}
          description={[
            <p>
              Natalia Alianovna "Natasha" Romanoff, also known as Black Widow,
              was one of the most talented spies and assassins in the entire
              world and a founding member of the Avengers.
            </p>,
            <p>
              Originally a KGB operative and dangerous assassin, Romanoff was
              recruited into S.H.I.E.L.D. by Clint Barton. Having extensive
              mastery in martial arts and armed with her Widow's Bite, Black
              Widow became one of S.H.I.E.L.D.'s most efficient agents.
            </p>,
            <p>
              During one mission, she was sent undercover into Stark Industries
              to watch Tony Stark due to the fear that he was dying. During this
              mission, Romanoff assisted Stark with defeating Ivan Vanko's
              terrorist plots against him.
            </p>
          ]}
          bgPosition="80%"
        />

        <Section
          bgImg={
            screenWidth < 600 ? images.section2.small : images.section2.big
          }
          title={data.section2Title}
          description={[
            <p>
              When Loki declared war on the Earth, Black Widow was recruited
              into the Avengers after Hawkeye had just been enthralled by Loki.
            </p>,
            <p>
              Romanoff assisted in recruiting Stark and Bruce Banner into the
              team while they tracked down and attempted to capture Loki,
              eventually saving Barton from his grasp.
            </p>,
            <p>
              Once Loki's entire plan had been uncovered, Romanoff joined the
              team during the Battle of New York and was instrumental in
              destroying the portal over the city which had been created by the
              Tesseract, effectively ending the entire invasion while Loki was
              defeated and captured.
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
              In the wake of the Avengers successfully defeating Loki, Romanoff
              had continued her work with S.H.I.E.L.D., this time working with
              Captain America.
            </p>,
            <p>
              While working together, Romanoff and Rogers uncovered a conspiracy
              following an assassination attempt on Nick Fury, which had
              eventually led to them discovering that HYDRA had somehow been
              infiltrating their entire organization.
            </p>,
            <p>
              Despite the efforts of the Winter Soldier to stop them, Romanoff
              helped expose Alexander Pierce's evil schemes to the world, which
              also resulted in all of her own morally dubious history being
              revealed. As a result, Romanoff was forced into dropping off the
              grid again and began rebuilding her cover.
            </p>
          ]}
          bgPosition="80%"
        />

        <Section
          bgImg={
            screenWidth < 600 ? images.section4.small : images.section4.big
          }
          title={data.section4Title}
          description={[
            <p>
              Romanoff eventually rejoined the Avengers, working to bring down
              various HYDRA cells across the world and assisting in the capture
              of Wolfgang von Strucker.
            </p>,
            <p>
              However, before she could form a romantic relationship with
              Banner, the rogue artificial intelligence Ultron was created by
              Stark and Banner, forcing Romanoff and the rest of their team to
              join together and defeat him.
            </p>,
            <p>
              Despite being captured, Romanoff was able to inform the team of
              Ultron's location on Sokovia, resulting in a final battle in which
              the Avengers had defeated Ultron once and for all. Unlike most
              members of the original Avengers, Black Widow remained a member
              while forming the second incarnation of the team.
            </p>
          ]}
        />

        <Section
          bgImg={
            screenWidth < 600 ? images.section5.small : images.section5.big
          }
          title={data.section5Title}
          description={[
            <p>
              As many of the governments of the world had demanded the Avengers
              to sign the Sokovia Accords in the wake of their recent battles,
              Romanoff agreed to their terms and signed the Accords.
            </p>,
            <p>
              She later joined Iron Man in a fight against Captain America due
              to his disagreements with the Accords and his criminal activities
              with the Winter Soldier who Rogers was attempting to protect.
            </p>,
            <p>
              As the two Avengers' factions fought against each other, Romanoff
              betrayed Iron Man's team in order to assist Captain America to
              find the instigator of the team's fight. As a result, Black Widow
              had to escape from the government for aiding Rogers, while being
              on the run, Romanoff soon joined him and Wilson in stopping
              terrorists.
            </p>
          ]}
        />

        <Section
          bgImg={
            screenWidth < 600 ? images.section6.small : images.section6.big
          }
          title={data.section6Title}
          description={[
            <p>
              When the threat of Thanos approached Earth, Romanoff, Rogers, and
              Wilson protected Vision, who had the Mind Stone, which Thanos was
              after.
            </p>,
            <p>
              They later defended Wakanda from the attack, but were ultimately
              defeated when Thanos destroyed half of all life with the Infinity
              Gauntlet, where Romanoff emerged as one of the survivors.
            </p>,
            <p>
              Romanoff was part of the Ambush on Thanos in an effort to retrieve
              the Infinity Stones and undo the Titan's snap, with no success.
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
              Five years later, Romanoff led the Avengers alongside Captain
              America, now formed by Okoye, Rocket Raccoon, Nebula, War Machine,
              and Captain Marvel.
            </p>,
            <p>
              In order to undo the Snap, the remaining Avengers split up in
              teams to retrieve all Infinity Stones from several alternate
              timelines in the Time Heist.
            </p>,
            <p>
              Sent to retrieve the Soul Stone on Vormir with Barton, Romanoff,
              against Barton's insistence, willingly jumped off the Vormir
              mountains into the abyss below, sacrificing herself in the process
              in order to obtain the Soul Stone for the Avengers.
            </p>
          ]}
          bgPosition="55%"
        />

        <Footer />
      </div>
    );
  }
}
