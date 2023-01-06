import Layout from "../components/layout";
import SectionBody from "../components/sectionbody";
import SectionButton from "../components/sectionbutton";
import SectionHead from "../components/sectionhead";
import styles from "../styles/Committees.module.css";

import Container from "react-bootstrap/Container";

export default function Committees() {
  return (
    <Layout>
      <div className="content">
        <Container className="section">
          <SectionHead title="Committees_" top={true} />
          <SectionBody>
            <p>
              WECE has seven amazing committees for you to join and participate in!<br></br>
              Keep reading to find out what each of them do.<br></br>
              If you're interested in joining, fill out your committee preferences below! <br></br>
              We can't wait to work with you :)
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
                    src="../imgs/board/rawnie.JPG"
                  />
                  <figcaption>Rawnie Singh</figcaption>
                </figure>
                <figure>
                  <img
                    className={styles["committee-img"]}
                    src="../imgs/wece-logo-black.png"
                  />
                  <figcaption>Tanvika Boyineni</figcaption>
                </figure>
                <figure>
                  <img
                    className={styles["committee-img"]}
                    src="../imgs/wece-logo-black.png"
                  />
                  <figcaption>Alayna Wenting</figcaption>
                </figure>
                <figure>
                  <img
                    className={styles["committee-img"]}
                    src="../imgs/wece-logo-black.png"
                  />
                  <figcaption>Ishanvi Lakhani</figcaption>
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
                    src="../imgs/board/ellie.jpeg"
                  />
                  <figcaption>Ellie Popoca</figcaption>
                </figure>
                <figure>
                  <img
                    className={styles["committee-img"]}
                    src="../imgs/wece-logo-black.png"
                  />
                  <figcaption>Apoorva Sannasi</figcaption>
                </figure>
                <figure>
                  <img
                    className={styles["committee-img"]}
                    src="../imgs/wece-logo-black.png"
                  />
                  <figcaption>Emily Liu</figcaption>
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
                    src="../imgs/board/li.jpeg"
                  />
                  <figcaption>Li Padilla</figcaption>
                </figure>
                <figure>
                  <img
                    className={styles["committee-img"]}
                    src="../imgs/board/emily.jpg"
                  />
                  <figcaption>Emily Xu</figcaption>
                </figure>
                <figure>
                  <img
                    className={styles["committee-img"]}
                    src="../imgs/wece-logo-black.png"
                  />
                  <figcaption>Bhavana Chintala</figcaption>
                </figure>
                <figure>
                  <img
                    className={styles["committee-img"]}
                    src="../imgs/wece-logo-black.png"
                  />
                  <figcaption>Estela Medrano</figcaption>
                </figure>
                <figure>
                  <img
                    className={styles["committee-img"]}
                    src="../imgs/wece-logo-black.png"
                  />
                  <figcaption>Fiona Cashin</figcaption>
                </figure>
                <p>
                  The Marketing Committee advertises WECE events and creatively
                  supports the events through banners, posters, and logos. We
                  help expand WECE's presence on campus through social media by
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
                    src="../imgs/board/subha.JPG"
                  />
                  <figcaption>Subha Somaskandan</figcaption>
                </figure>
                <figure>
                  <img
                    className={styles["committee-img"]}
                    src="../imgs/wece-logo-black.png"
                  />
                  <figcaption>Ananya Kommalapati</figcaption>
                </figure>
                <figure>
                  <img
                    className={styles["committee-img"]}
                    src="../imgs/wece-logo-black.png"
                  />
                  <figcaption>Nicole Viz</figcaption>
                </figure>
                <figure>
                  <img
                    className={styles["committee-img"]}
                    src="../imgs/wece-logo-black.png"
                  />
                  <figcaption>Megha Esturi</figcaption>
                </figure>
                <figure>
                  <img
                    className={styles["committee-img"]}
                    src="../imgs/wece-logo-black.png"
                  />
                  <figcaption>Ramya Reddy</figcaption>
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
                    src="../imgs/board/matilde.jpeg"
                  />
                  <figcaption>Matilde Figueroa-Carillo</figcaption>
                </figure>
                <figure>
                  <img
                    className={styles["committee-img"]}
                    src="../imgs/wece-logo-black.png"
                  />
                  <figcaption>Anjali Aravindhan</figcaption>
                </figure>
                <figure>
                  <img
                    className={styles["committee-img"]}
                    src="../imgs/wece-logo-black.png"
                  />
                  <figcaption>Neha Joseph</figcaption>
                </figure>
                <figure>
                  <img
                    className={styles["committee-img"]}
                    src="../imgs/wece-logo-black.png"
                  />
                  <figcaption>Jenny Kim</figcaption>
                </figure>
                <p>
                  The outreach committee works with the surrounding community to
                  teach kids about ECE!
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
                    src="../imgs/board/apurva.jpg"
                  />
                  <figcaption>Apurva Perla</figcaption>
                </figure>
                <figure>
                  <img
                    className={styles["committee-img"]}
                    src="../imgs/wece-logo-black.png"
                  />
                  <figcaption>Varsha Mullangi</figcaption>
                </figure>
                <figure>
                  <img
                    className={styles["committee-img"]}
                    src="../imgs/wece-logo-black.png"
                  />
                  <figcaption>Aleena Majeed</figcaption>
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
                    src="../imgs/board/neha.jpg"
                  />
                  <figcaption>Neha Agarwal</figcaption>
                </figure>
                <figure>
                  <img
                    className={styles["committee-img"]}
                    src="../imgs/board/Kaitlin.jpg"
                  />
                  <figcaption>Kaitlin Gowens</figcaption>
                </figure>
                <figure>
                  <img
                    className={styles["committee-img"]}
                    src="../imgs/wece-logo-black.png"
                  />
                  <figcaption>Shrey Sharma</figcaption>
                </figure>
                <figure>
                  <img
                    className={styles["committee-img"]}
                    src="../imgs/wece-logo-black.png"
                  />
                  <figcaption>Amber Wilt</figcaption>
                </figure>
                <figure>
                  <img
                    className={styles["committee-img"]}
                    src="../imgs/wece-logo-black.png"
                  />
                  <figcaption>Gauthami Yenne</figcaption>
                </figure> 
                <figure>
                  <img
                    className={styles["committee-img"]}
                    src="../imgs/wece-logo-black.png"
                  />
                  <figcaption>Sneh Chandak</figcaption>
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
        </Container>
      </div>
    </Layout>
  );
}
