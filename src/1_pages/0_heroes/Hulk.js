import React, { Component } from "react";

import Header from "../../0_components/1_layout/Header";
import Section from "../../0_components/1_layout/Section";
import Footer from "../../0_components/1_layout/Footer";

const contentful = require("contentful");

export default class Hulk extends Component {
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
      .getEntries({ content_type: "hulk" })
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
          titlebruceBanner="bruce banner"
          title={data.title}
          subtitle={data.subtitle}
          bgPosition="10%"
        />

        <Section
          bgImg={
            screenWidth < 600 ? images.section1.small : images.section1.big
          }
          title={data.section1Title}
          description={[
            <p>
              Robert Bruce Banner, M.D., Ph.D., is a renowned scientist and a
              founding member of the Avengers.
            </p>,
            <p>
              As someone who was highly respected for his work regarding
              biochemistry, nuclear physics, and gamma radiation, he was
              commissioned by Thaddeus Ross to recreate the Super Soldier Serum
              which created Captain America, although Ross elected not to inform
              Banner what he was creating.
            </p>,
            <p>
              However, when an exposure to high levels of gamma radiation
              instead of vita radiation went awry, the mild-mannered scientist
              had found that when angered, provoked or excited, he would
              transform into the huge, rage-fueled, nearly mindless creature
              known as Hulk.
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
              Fearful of the damage that Hulk could inflict as well as fleeing
              from the United States government, Banner attempted to commit
              suicide; when the attempt failed, he chose to live a discreet life
              in South America while also communicating with Samuel Sterns to
              cure himself.
            </p>,
            <p>
              However, when General Ross had sent a team led by Emil Blonsky to
              apprehend Banner, he was then forced to return to New York City
              where he recruited the help of Betty Ross and Sterns to cure him
              of his affliction.
            </p>,
            <p>
              Banner was apprehended by the Armed Forces shortly after, but
              Blonsky, who had received a variant of the Super Soldier Serum,
              was administered Banner's gamma-irradiated blood, transforming him
              into the Abomination and forcing Ross to allow Banner to turn into
              Hulk and battle him before then allowing Hulk to escape.
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
              Banner fled the United States and dedicated his time to aiding the
              sick and poor. When a mounting threat called for Banner's
              specialized scientific expertise, S.H.I.E.L.D. recruited him,
              knowing full well that the incredible strength of Banner's
              alter-ego, Hulk, would be an additional asset to the Avengers.
            </p>,
            <p>
              Banner was tasked with tracking down the Tesseract, working
              alongside Tony Stark to achieve this. Despite almost causing a
              disaster when he was forcibly transformed into Hulk by Loki,
              Banner joined the Avengers during the Battle of New York and
              assisted them in defeating Loki and his Chitauri army.
            </p>,
            <p>
              Once the Avengers split up in the wake of the battle, Banner had
              become good friends with Stark and relocated to the Avengers
              Tower, free to live his life without apprehension.
            </p>
          ]}
          bgPosition="72%"
        />

        <Section
          bgImg={
            screenWidth < 600 ? images.section4.small : images.section4.big
          }
          title={data.section4Title}
          description={[
            <p>
              In the wake of the HYDRA Uprising, the Avenger regrouped once more
              to battle the ever-growing threat of HYDRA, successfully capturing
              Wolfgang von Strucker and retaking the Scepter.
            </p>,
            <p>
              In order to make it so that Earth could always be safe without
              constantly needing the Avengers to protect it, Banner assisted
              Stark with creating Ultron, an artificial intelligence. Ultron,
              programmed to protect Earth at all costs, deemed humanity and the
              Avengers as its greatest threat and focused on annihilating them.
            </p>,
            <p>
              Banner was then enlisted by Stark to help create Vision, and was
              later coaxed by Black Widow into transforming into the Hulk and
              help defeat Ultron.
            </p>,
            <p>
              Following Ultron's defeat, Hulk commandeered a Quinjet and left
              Earth, flying into space and coming across a wormhole that caused
              the Quinjet to crash on the planet Sakaar, where the stressful
              environment prevented him from regressing back into Banner,
              causing him to remain in Hulk form for two years.
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
              On Sakaar, he became a gladiator for Grandmaster and was soon
              revered as a beloved champion, choosing to turn his back on Earth
              and enjoy the life of an admired warrior.
            </p>,
            <p>
              However, when Thor arrived on the planet, Hulk fought against his
              old friend in the arena. In the wake of their fight, Thor informed
              Hulk that Asgard was under threat due to Hela's return.
            </p>,
            <p>
              Hulk aided the Asgardians in their fight, defeating Fenris and
              allowing the Asgardians to board the Statesman vessel, and as
              Ragnarök was unleashed, joined them on their voyage to Earth.
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
              On their way back to Earth, the Statesman was attacked by the
              Black Order, who killed half of the Asgardians. Hulk challenged
              their leader, Thanos, who soundly defeated him.
            </p>,
            <p>
              He was then teleported to the New York Sanctum by Heimdall, where
              Banner warned Doctor Strange, Iron Man and later Captain America
              of Thanos' arrival.
            </p>,
            <p>
              Finding himself no longer able to transform into Hulk, Banner
              operated a Hulkbuster armor to aid the Avengers in the Battle of
              Wakanda.
            </p>,
            <p>
              Although Banner and his allies managed to kill off Thanos' forces,
              Thanos personally arrived in Wakanda to retrieve the Mind Stone.
              He effortlessly subdued Banner and the other heroes and completed
              the Infinity Gauntlet, wiping out half of the universe's
              population, with Banner being one of the survivors.
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
              Shortly after the Snap, Banner permanently merged himself and Hulk
              into one being, which combined the Hulk's raw strength and
              physique with Banner's mind and intelligence and turned him into
              an adored celebrity.
            </p>,
            <p>
              In 2023, he rejoined the Avengers to help them use Pym Particles
              and the Quantum Realm to travel through time. After traveling back
              to the Battle of New York in 2012, Banner successfully gained the
              Time Stone from the Ancient One and returned to the present.
            </p>,
            <p>
              He and Rocket Raccoon helped Tony Stark design the Nano Gauntlet
              to contain the Stones the Avengers had collected, electing to use
              it to resurrect all the lives claimed by the Snap and injuring
              himself in the process.
            </p>,
            <p>
              In the aftermath of the Battle of Earth, which resulted in Iron
              Man's death, Banner sent Captain America to return the Infinity
              Stones to their proper places in time.
            </p>
          ]}
        />

        <Footer />
      </div>
    );
  }
}
