import Layout from "../components/layout";
import SectionBody from "../components/sectionbody";
import SectionButton from "../components/sectionbutton";
import SectionHead from "../components/sectionhead";
import styles from "../styles/Committees.module.css";
//import Image from 'next/image';

import Container from "react-bootstrap/Container";

export default function Committees() {
  return (
    <Layout>
      <div className="content">
        <Container className="section">
          <SectionHead title="Committees_" top={true} />
          <SectionBody>
            <p>
              WECE has seven great committees you can join and participate in!
              Read more to find out what each of them do :) If you would like to
              join, fill out your committee preferences below!
            </p>
            <SectionButton buttonText="Join" buttonLink="/join" />
          </SectionBody>
          <div className={styles["committee-text"]}>
            <h4>Academic</h4>
            <SectionBody>
              <div className={styles["section-flex"]}>
                <figure>
                  <img
                    className={styles["committee-img"]}
                    src="../imgs/committeeStickers/Academic.png"
                  />
                </figure>
                <p>
                  The Academic Committee organizes and hosts workshops and
                  panels catered to improving academic success for ECE students.
                </p>
              </div>
            </SectionBody>
          </div>
          <div className={styles["committee-text"]}>
            <h4>Infrastructure</h4>
            <SectionBody>
              <div className={styles["section-flex"]}>
                <figure>
                  <img
                    className={styles["committee-img"]}
                    src="../imgs/committeeStickers/Infrastructure.png"
                  />
                </figure>
                <p>
                  The Infrastructure Commitee develops and updates the WECE
                  website as well as sends weekly newsletters. In addition, we
                  are always looking to improve the workflow of WECE through
                  developing ways to manage our data better!
                </p>
              </div>
            </SectionBody>
          </div>
          <div className={styles["committee-text"]}>
            <h4>Marketing</h4>
            <SectionBody>
              <div className={styles["section-flex"]}>
                <figure>
                  <img
                    className={styles["committee-img"]}
                    src="../imgs/committeeStickers/Marketing.png"
                  />
                </figure>
                <p>
                  The Marketing Committee advertises WECE events and creatively
                  supports the events through banners, posters, and logos. We
                  help expand the presence of WCE on campus through social media by
                  showcasing the wonderful events we have to help students
                  academically, professionally and personally. We also oversee
                  the design of WECE logo, apparel, newsletter, and the website.
                </p>
              </div>
            </SectionBody>
          </div>
          <div className={styles["committee-text"]}>
            <h4>Mentorship</h4>
            <SectionBody>
              <div className={styles["section-flex"]}>
                <figure>
                  <img
                    className={styles["committee-img"]}
                    src="../imgs/committeeStickers/Mentorship.png"
                  />
                </figure>
                <p>
                  The WECE Mentorship Committee strives to build a welcoming and
                  supportive community within ECE! We foster mentorship through
                  a Peer Mentorship Program, Lean In Discussions, a Professional
                  Mentorship Program, and Graduate Student mentorship.
                </p>
              </div>
            </SectionBody>
          </div>
          <div className={styles["committee-text"]}>
            <h4>Outreach</h4>
            <SectionBody>
              <div className={styles["section-flex"]}>
                <figure>
                  <img
                    className={styles["committee-img"]}
                    src="../imgs/committeeStickers/Outreach.png"
                  />
                </figure>
                <p>
                  The outreach committee works with the surrounding community to
                  teach kids about ECE.
                </p>
                <p>
                <a href="https://ai-manoj12.github.io/outreach-website/">Visit the outreach website!</a>
                </p>
              </div>
            </SectionBody>
          </div>
          <div className={styles["committee-text"]}>
            <h4>Social</h4>
            <SectionBody>
              <div className={styles["section-flex"]}>
                <figure>
                  <img
                    className={styles["committee-img"]}
                    src="../imgs/committeeStickers/Social.png"
                  />
                </figure>
                <p>
                  Social Committee is all about fostering relationships. Whether
                  those relationships are friendships or professional
                  connections, we are here to get to know each other and social
                  committee is a great way to do that!
                </p>
              </div>
            </SectionBody>
          </div>
          <div className={styles["committee-text"]}>
            <h4>Technical</h4>
            <SectionBody>
              <div className={styles["section-flex"]}>
                <figure>
                  <img
                    className={styles["committee-img"]}
                    src="../imgs/committeeStickers/Technical.png"
                  />
                </figure>
                <p>
                  The WECE technical committee works on a project which is
                  presented at the Engineering Open House in March. The
                  technical committee also organizes technical workshops to
                  teach skills relevant in the industry. We aim to provide
                  valuable technical experiences for promoting involvement and
                  building resume.
                </p>
              </div>
            </SectionBody>
          </div>
          <div className={styles["committee-text"]}>
            <h4>WECEHacks</h4>
            <SectionBody>
              <div className={styles["section-flex"]}>
                <figure>
                  <img
                    className={styles["committee-img"]}
                    src="../imgs/committeeStickers/WECEHacks.png"
                  />
                </figure>
                <p>
                  The WECEHacks committee works organizing the official WECE
                  yearly hackathon in the spring.
                </p>
              </div>
            </SectionBody>
          </div>
          <div className={styles["committee-text"]}>
            <h4>GradWECE</h4>
            <SectionBody>
              <div className={styles["section-flex"]}>
                <figure>
                </figure>
                <p>
                  The GradWECE committee is dedicated to the grad students who are a part of WECE.
                </p>
              </div>
            </SectionBody>
          </div>
        </Container>
      </div>
    </Layout>
  );
}
