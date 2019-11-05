import React, { Component } from "react";

import Header from "../../0_components/1_layout/Header";
import Section from "../../0_components/1_layout/Section";
import Footer from "../../0_components/1_layout/Footer";

const contentful = require("contentful");

export default class Thor extends Component {
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
      .getEntries({ content_type: "thor" })
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
          bgPosition="47%"
        />

        <Section
          bgImg={
            screenWidth < 600 ? images.section1.small : images.section1.big
          }
          title={data.section1Title}
          description={[
            <p>
              Thor Odinson is the Asgardian God of Thunder, the former king of
              Asgard and New Asgard, and a founding member of the Avengers.
            </p>,
            <p>
              When his irresponsible and impetuous behavior reignited a conflict
              between Asgard and Jotunheim, Thor was denied the right to become
              king, stripped of his power, and banished to Earth by Odin.
            </p>,
            <p>
              While exiled on Earth, Thor learned humility, finding love with
              Jane Foster, and helped save his new friends from the Destroyer
              sent by Loki.
            </p>,
            <p>
              Due to his selfless act of sacrifice, Thor redeemed himself in his
              father's eyes and was granted his power once more, which he then
              used to defeat Loki's schemes of genocide.
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
              Upon being welcomed back to Asgard as a hero, Thor was forced to
              return to Earth in order to retrieve Loki after he had survived to
              fall through a black hole and had begun his attempt at world
              domination, having taken possession of the Tesseract.
            </p>,
            <p>
              Thor joined the Avengers under the guidance of S.H.I.E.L.D. and
              stood with them to stop the schemes of his own adopted brother,
              eventually following the newly formed team as they battled against
              Loki's army of the Chitauri during the Battle of New York until
              Loki was eventually defeated by the Avengers, captured and
              returned onto Asgard to await justice for his crimes against
              Earth.
            </p>
          ]}
          bgPosition="45%"
        />

        <Section
          bgImg={
            screenWidth < 600 ? images.section3.small : images.section3.big
          }
          title={data.section3Title}
          description={[
            <p>
              Thor returned to Asgard having defeated his brother's schemes, as
              he then helped the Asgardian Armies restore peace across all of
              the Nine Realms during the War of the Nine Realms.
            </p>,
            <p>
              However, the peace proved to be short-lived as Thor then fought
              the Dark Elves during the Second Dark Elf Conflict as they had
              attempted to plunge the Nine Realms into eternal darkness.
            </p>,
            <p>
              During these events, Thor was reunited with Jane Foster who had
              become host to the Aether and a target of the Dark Elves, with
              Thor being forced to free Loki from imprisonment for his aid.
              Eventually, the Aether was removed from Foster's body and Loki
              seemingly sacrificed Thor from Kurse, leading to the Dark Elves
              and Malekith's defeat.
            </p>,
            <p>
              Thor renounced his claim to the throne and left Asgard for Earth
              so he could stay with Foster.
            </p>
          ]}
          bgPosition="55%"
        />

        <Section
          bgImg={
            screenWidth < 600 ? images.section4.small : images.section4.big
          }
          title={data.section4Title}
          description={[
            <p>
              During his stay on Earth, Thor helped the Avengers once again,
              this time in their attempts to locate Loki's Scepter. This also
              lead to him joining the fight against HYDRA.
            </p>,
            <p>
              Following HYDRA's defeat and the capture of Baron Wolfgang von
              Strucker, the team had to stop the newly created Ultron, a rogue
              invention inadvertently created by Tony Stark which had threatened
              to wipe out all of humanity and replace it with its own Ultron
              Sentries.
            </p>,
            <p>
              Once Ultron had been defeated, Thor promised his Avengers allies
              that he would return and went back to Asgard to investigate the
              visions he saw when being manipulated by Scarlet Witch of the
              Infinity Stones. In his investigations, Thor also discovered that
              Loki was still alive and had usurped Odin's royal throne during
              Thor's absence.
            </p>
          ]}
          bgPosition="70%"
        />

        <Section
          bgImg={
            screenWidth < 600 ? images.section5.small : images.section5.big
          }
          title={data.section5Title}
          description={[
            <p>
              To aid in both pursuing his brother and finding his father to
              return peace to Asgard, Thor sought help from Doctor Strange.
              However, Thor was just too late to save his own father from death.
            </p>,
            <p>
              Shortly afterwards, Thor met Hela, the Goddess of Death and his
              sister. In the wake of his first encounter with Hela, Thor's
              hammer Mjølnir was destroyed and he was banished to Sakaar, where
              he was forced to compete in the Contest of Champions.
            </p>,
            <p>
              After a reunion and subsequent fight with Hulk, the pair allied
              with the rogue Valkyrie in order to save Asgard and escape Sakaar.
            </p>,
            <p>
              After battling with Hela and losing an eye to her, Thor then had
              Loki unleash Ragnarök and destroy Asgard, killing Hela in the
              process, although he escaped with the remaining Asgardians.
            </p>,
            <p>
              Declaring that Asgard was all its people and not a place, Thor
              accepted his newfound position as king and decided to relocate the
              Asgardians on Earth.
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
              As they were en route to Earth, their ship was attacked by Thanos,
              who sought the Tesseract. Thor witnessed Thanos take the stone and
              murder his brother before he was flung from the ship and left for
              dead.
            </p>,
            <p>
              He was picked up by the Guardians of the Galaxy and traveled to
              Nidavellir. With the help of Eitri, Thor crafted Stormbreaker and
              aided the nation of Wakanda and the Avengers in defeating Thanos.
              However, Thor squandered his chance to kill Thanos with his new
              weapon and Thanos activated the completed Infinity Gauntlet and
              erased half the universe's population from existence before he
              escaped.
            </p>,
            <p>
              After the Avengers were joined by Captain Marvel, the team
              traveled to the Garden, where Thor and the Avengers ambushed and
              interrogated Thanos, discovering that the Titan destroyed the
              Stones, ensuring that a reversal of his actions was now
              impossible. Enraged, Thor beheaded Thanos using Stormbreaker and
              left the planet.
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
              Following Thanos' death, Thor left the Avengers and relocated to
              Tønsberg, Norway, where he and the surviving Asgardians resettled,
              renaming the town New Asgard.
            </p>,
            <p>
              Five years later, Hulk and Rocket traveled to New Asgard to
              convince the now-overweight and depressed Thor to rejoin the team
              after discovering how to travel through time.
            </p>,
            <p>
              Thor joined the Avengers on their Time Heist and participated in
              the Battle of Earth, where he fought Thanos again alongside
              Captain America and Iron Man, the latter sacrificing his life to
              eliminate Thanos and his armies.
            </p>,
            <p>
              After attending Stark's funeral, Thor decided to go with the
              Guardians of the Galaxy, proclaiming Valkyrie to succeed him as
              the new ruler of the Asgardians.
            </p>
          ]}
        />

        <Footer />
      </div>
    );
  }
}
