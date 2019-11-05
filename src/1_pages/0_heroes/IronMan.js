import React, { Component } from "react";

import Header from "../../0_components/1_layout/Header";
import Section from "../../0_components/1_layout/Section";
import Footer from "../../0_components/1_layout/Footer";

const contentful = require("contentful");

export default class IronMan extends Component {
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
      .getEntries({ content_type: "ironMan" })
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
          bgPosition="52%"
        />

        <Section
          bgImg={
            screenWidth < 600 ? images.section1.small : images.section1.big
          }
          title={data.section1Title}
          description={[
            <p>
              Anthony Edward "Tony" Stark was a billionaire industrialist, a
              founding member of the Avengers, and the former CEO of Stark
              Industries. A brash but brilliant inventor, Stark was
              self-described as a genius, billionaire, playboy and
              philanthropist.
            </p>,
            <p>
              With his great wealth and exceptional technical knowledge, Stark
              was one of the world's most powerful men following the deaths of
              his parents, and enjoyed the playboy lifestyle for many years
              until he was kidnapped by the Ten Rings in Afghanistan, while
              demonstrating a fleet of Jericho missiles.
            </p>,
            <p>
              With his life on the line, Stark created an armored suit which he
              used to escape his captors. Upon returning home, he utilized
              several more armors to use against terrorists, as well as Obadiah
              Stane who turned against Stark.
            </p>,
            <p>
              Stark enjoyed the fame that came with his new secret identity and
              decided to share it with the world, publicly revealing himself as
              Iron Man.
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
              Fresh off from defeating enemies all over the world, Stark found
              himself dying due to his own Arc Reactor poisoning his body, all
              while he was challenged by Ivan Vanko who attempted to destroy his
              legacy.
            </p>,
            <p>
              Due to their assistance in both these battles, Stark reluctantly
              agreed to serve as a consultant for S.H.I.E.L.D. where he used his
              position to upgrade their technology while he began a relationship
              with Pepper Potts.
            </p>,
            <p>
              With the world yet again being threatened, Stark joined the
              Avengers and helped defeat the Chitauri and Loki. Due to the
              battle, he suffered from post-traumatic stress disorder, leading
              him to create the Iron Legion to safeguard the world and help him
              retire.
            </p>
          ]}
          bgPosition="60%"
        />

        <Section
          bgImg={
            screenWidth < 600 ? images.section3.small : images.section3.big
          }
          title={data.section3Title}
          description={[
            <p>
              The 2012 "Mandarin" terrorist attacks forced Stark to come out of
              retirement to protect his country, inadvertently putting his loved
              ones at risk and leaving him defenseless when his home was
              destroyed.
            </p>,
            <p>
              Stark continued his mission, finding Aldrich Killian as the
              mastermind of the attacks. Eventually, Stark defeated Killian,
              almost losing Pepper Potts in the process.
            </p>,
            <p>
              In the wake of the battle, Stark destroyed all of his armors with
              the Clean Slate Protocol. However, when the Avengers were
              officially demobilized due to the War on HYDRA, Stark built more
              armors and resumed his role as Iron Man, aiding them in the
              capture of Wolfgang von Strucker and acquiring Loki's Scepter.
            </p>
          ]}
          bgPosition="45%"
        />

        <Section
          bgImg={
            screenWidth < 600 ? images.section4.small : images.section4.big
          }
          title={data.section4Title}
          description={[
            <p>
              Once the threat of HYDRA had been ended, at last, Stark,
              influenced by Wanda Maximoff's mind games, built Ultron with the
              help of Bruce Banner as a new peace-keeping A.I. to protect the
              world and allow the Avengers to retire.
            </p>,
            <p>
              However, Ultron believed that humanity threatened the world and
              thus, according to his program, decided to extinguish humanity.
            </p>,
            <p>
              Through the work of the Avengers, Ultron was defeated, however not
              without massive civilian cost and many lives being lost.
            </p>
          ]}
          bgPosition="40%"
        />

        <Section
          bgImg={
            screenWidth < 600 ? images.section5.small : images.section5.big
          }
          title={data.section5Title}
          description={[
            <p>
              After the Ultron Offensive, Stark retired from active duty, still
              haunted by his role in the chaos the A.I. created. The guilt of
              creating Ultron and causing so much destruction and loss of life
              eventually convinced Stark to support the Sokovia Accords.
            </p>,
            <p>
              After the Ultron Offensive, Stark retired from active duty, still
              haunted by his role in the chaos the A.I. created. The guilt of
              creating Ultron and causing so much destruction and loss of life
              eventually convinced Stark to support the Sokovia Accords.
            </p>,
            <p>
              Stark returned to New York to become a mentor to Spider-Man and to
              guide him in order to make him a better hero than he ever was,
              also becoming engaged with Potts in the process.
            </p>
          ]}
          bgPosition="20%"
        />

        <Section
          bgImg={
            screenWidth < 600 ? images.section6.small : images.section6.big
          }
          title={data.section6Title}
          description={[
            <p>
              In 2018, when Thanos and the Black Order invaded Earth in their
              conquest to acquire the six Infinity Stones, Stark, Doctor Strange
              and Spider-Man convened to battle Thanos on Titan with the help of
              the Guardians of the Galaxy.
            </p>,
            <p>
              When Stark was held at Thanos' mercy, Doctor Strange surrendered
              the Time Stone for Stark's life. After the Snap, Stark and Nebula
              remained the sole survivors on Titan.
            </p>,
            <p>
              Stark and Nebula used the Benatar to escape Titan, but were
              stranded in space as the ship was damaged. They were rescued by
              Captain Marvel, who brought them back to Earth.
            </p>
          ]}
          bgPosition="40%"
        />

        <Section
          bgImg={
            screenWidth < 600 ? images.section7.small : images.section7.big
          }
          title={data.section7Title}
          description={[
            <p>
              In the five years after the Snap, Stark chose to retire, marrying
              Potts and having a daughter, Morgan Stark.
            </p>,
            <p>
              When Stark discovered the key to travel through time, he rejoined
              the Avengers to undo the Snap, traveling back in time to retrieve
              the Scepter and then to regain the Tesseract.
            </p>,
            <p>
              When Thanos and his armies travelled through time themselves to
              retrieve the stones in the Battle of Earth, Stark gathered the
              stones to eliminate Thanos and his army once and for all, saving
              the universe but at the cost of his own life.
            </p>
          ]}
          bgPosition="60%"
        />

        <Footer />
      </div>
    );
  }
}
