import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from "../styles/WECEHacks.module.css";
import { SocialIcon } from "react-social-icons";
import SectionHead from "./sectionhead";
import Image from 'next/image';

export default function WECEHacksTeam() {
  return (
    <>
      <div // top padding for spacing
        style={{
          paddingTop: "5em",
        }}
      >
        <SectionHead title="Meet the Team" top={false} wecehacks={true} />
      </div>

      <Container className={styles["wecehacks-center-wrapper"]}>
        <Row className={styles["wecehacks-team-wrapper"]}>
          <div className={styles["wecehacks-col"]}>
            <Image
              className={styles["wecehacks-team-picture"]}
              src="../imgs/wecehacks/ellie.jpg"
            />
            <p className={styles["wecehacks-text-header"]}>
              Ellie <br /> Popoca
            </p>
            <p className={styles["wecehacks-text-body"]}>
              Director (she/they), Junior @ UIUC studying Information Sciences.
              In her free time, she enjoys playing video games, watching anime,
              and spending time with her friends.
            </p>
            <SocialIcon
              style={{
                width: "3em",
                height: "3em",
              }}
              network="linkedin"
              url="https://www.linkedin.com/in/elliepopoca/"
              fgColor="white"
              bgColor="pink"
            />
          </div>
          <div className={styles["wecehacks-col"]}>
            <Image
              className={styles["wecehacks-team-picture"]}
              src="../imgs/wecehacks/cathy.JPG"
            />
            <p className={styles["wecehacks-text-header"]}>
              Cathy <br /> Boman
            </p>
            <p className={styles["wecehacks-text-body"]}>
              Lead (she/her), Sophomore @ UIUC studying Computer Engineering. In
              her free time, she enjoys reading, photography, and watching
              dramas. She was involved in planning WECEHacks last year and is
              excited to continue to be a part of this team!
            </p>
            <SocialIcon
              style={{
                width: "3em",
                height: "3em",
              }}
              network="linkedin"
              url="https://www.linkedin.com/in/cathy-boman/"
              fgColor="white"
              bgColor="pink"
            />
          </div>
          <div className={styles["wecehacks-col"]}>
            <Image
              className={styles["wecehacks-team-picture"]}
              src="../imgs/wecehacks/apoorva.jpg"
            />
            <p className={styles["wecehacks-text-header"]}>
              Apoorva <br /> Sannasi
            </p>
            <p className={styles["wecehacks-text-body"]}>
              Lead (she/her), Sophomore @ UIUC studying Computer Science. When
              she gets the chance to, she loves doing her own nail art and
              reading! She loves studying in the morning, but you are more likely
              to find her on a late night walk with friends!!!
            </p>
            <SocialIcon
              style={{
                width: "3em",
                height: "3em",
              }}
              network="linkedin"
              url="https://www.instagram.com/wecehac.ks/"
              fgColor="white"
              bgColor="pink"
            />
          </div>
          <div className={styles["wecehacks-col"]}>
            <Image
              className={styles["wecehacks-team-picture"]}
              src="../imgs/wecehacks/emily.JPG"
            />
            <p className={styles["wecehacks-text-header"]}>
              Emily <br /> Liu
            </p>
            <p className={styles["wecehacks-text-body"]}>
              Lead (she/her), Freshman @ UIUC studying Computer Engineering.
              <br /> Some things she likes to do for fun include rock climbing
              (especially bouldering), playing the violin, volleyball, lifting,
              making art, and exploring national parks :)
            </p>
            <SocialIcon
              style={{
                width: "3em",
                height: "3em",
              }}
              network="linkedin"
              url="https://www.instagram.com/wecehac.ks/"
              fgColor="white"
              bgColor="pink"
            />
          </div>
        </Row>
        <Row className={styles["wecehacks-team-wrapper"]}>
          <div className={styles["wecehacks-col"]}>
            <Image
              className={styles["wecehacks-team-picture"]}
              src="../imgs/wecehacks/tiffany.JPG"
            />
            <p className={styles["wecehacks-text-header"]}>
              Tiffany <br /> Seto
            </p>
            <p className={styles["wecehacks-text-body"]}>
              Organizer (she/her), Sophomore @ UIUC studying Computer Science.
              <br /> she likes dancing, baking/cooking, and journaling. A fun
              fact about her is that she can solve a Rubik cube!
            </p>
            <SocialIcon
              style={{
                width: "3em",
                height: "3em",
              }}
              network="linkedin"
              url="https://www.instagram.com/wecehac.ks/"
              fgColor="white"
              bgColor="pink"
            />
          </div>
          <div className={styles["wecehacks-col"]}>
            <Image
              className={styles["wecehacks-team-picture"]}
              src="../imgs/wecehacks/ming.jpg"
            />
            <p className={styles["wecehacks-text-header"]}>
              Mingxiao <br /> Wang
            </p>
            <p className={styles["wecehacks-text-body"]}>
              Organizer (she/her), Freshman @ UIUC studying Electrical
              Engineering.
              <br /> She loves painting, sewing, and doing her own nails in her
              free time! She loves anything artistic and visual!
            </p>
            <SocialIcon
              style={{
                width: "3em",
                height: "3em",
              }}
              network="linkedin"
              url="https://www.instagram.com/wecehac.ks/"
              fgColor="white"
              bgColor="pink"
            />
          </div>
          <div className={styles["wecehacks-col"]}>
            <Image
              className={styles["wecehacks-team-picture"]}
              src="../imgs/wecehacks/manushri.jpg"
            />
            <p className={styles["wecehacks-text-header"]}>
              Manushri <br /> Dilipkumar
            </p>
            <p className={styles["wecehacks-text-body"]}>
              Organizer (she/her), Sophomore @ UIUC studying Computer
              Engineering.
              <br /> In her free time she likes to try new things! She recently
              tried soldering a circuit, which was super fun. She also has been
              trying to cook/bake new things, and try new places on Green St.
              She is very excited to be a part of the WECEHacks Team this year!
            </p>
            <SocialIcon
              style={{
                width: "3em",
                height: "3em",
              }}
              network="linkedin"
              url="https://www.instagram.com/wecehac.ks/"
              fgColor="white"
              bgColor="pink"
            />
          </div>
          <div className={styles["wecehacks-col"]}>
            <Image
              className={styles["wecehacks-team-picture"]}
              src="../imgs/wecehacks/Sneha.jpeg"
            />
            <p className={styles["wecehacks-text-header"]}>
              Sneha <br /> Chaliki
            </p>
            <p className={styles["wecehacks-text-body"]}>
              Organizer (she/her), Freshman @ UIUC studying Computer Science.
              <br /> In her free time she likes to watch TV, listen to music,
              and work out!
            </p>
            <SocialIcon
              style={{
                width: "3em",
                height: "3em",
              }}
              network="linkedin"
              url="https://www.instagram.com/wecehac.ks/"
              fgColor="white"
              bgColor="pink"
            />
          </div>
        </Row>
      </Container>
    </>
  );
}
