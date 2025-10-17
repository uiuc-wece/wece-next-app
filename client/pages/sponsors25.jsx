import Layout from "../components/layout";
import SectionBody from "../components/sectionbody";
import SectionHead from "../components/sectionhead";
import styles from "../styles/Sponsors.module.css";
import Container from "react-bootstrap/Container";

export default function Sponsors() {
  return (
    <Layout>
      <div className="content">
        <Container className="section">
          <SectionHead title="WECE Sponsors_" top={true} />

          <h2 className={styles["sponsor-level"]}>Platinum 2000+</h2>
          <SectionBody hoverEffect={true} link="https://about.deere.com/">
            <div>
              <img
                className={styles["sponsor-img"]
                  
                } style = {{'mixBlendMode': 'multiply'
                }}
                src="../imgs/25-26sponsors/johndeere.png"
              />
            </div>
          </SectionBody>
          

          <h2 className={styles["sponsor-level"]}>Silver level $500+</h2>
          <SectionBody hoverEffect={true} link="https://www.micron.com/">
            <div>
              <img
                className={styles["sponsor-img"]} style = {{'mixBlendMode': 'multiply'
                }}
                src="../imgs/25-26sponsors/micron.png"
              />
            </div>
          </SectionBody>
          <SectionBody hoverEffect={true} link="https://www.kla.com/">
            <div>
              <img
                className={styles["sponsor-img"]}
                style = {{'mixBlendMode': 'multiply'
                }}
                src="../imgs/25-26sponsors/kla.png"
              />
            </div>
          </SectionBody>
          <SectionBody hoverEffect={true} link="https://www.capitalone.com/">
            <div>
              <img
                className={styles["sponsor-img"]}
                src="../imgs/capitalone.png"
                alt="Capital One Logo"
              />
            </div>
          </SectionBody>
          <SectionBody hoverEffect={true} link="https://www.accenture.com/">
            <div>
              <img
                className={styles["sponsor-img"]}
                style = {{'mixBlendMode': 'multiply'
                }}
                src="../imgs/25-26sponsors/accenture.png"
              />
            </div>
          </SectionBody>

          <SectionBody hoverEffect={true} link="https://www.cdsmith.com/">
            <div>
              <img
                className={styles["sponsor-img"]}
                style = {{'mixBlendMode': 'multiply'
                }}
                src="../imgs/25-26sponsors/cdsmith.jpg"
              />
            </div>
          </SectionBody>

          <SectionBody hoverEffect={true} link="https://www.up.com/">
            <div>
              <img
                className={styles["sponsor-img"]}
                style = {{'mixBlendMode': 'multiply'
                }}
                src="../imgs/25-26sponsors/up.png"
              />
            </div>
          </SectionBody>

          

          <h2 className={styles["sponsor-level"]}>Bronze level </h2>
          <SectionBody hoverEffect={true} link="https://www.janestreet.com/">
          <div>
                  <img
                    className={styles["sponsor-img"]}
                    src="../imgs/janestreet.png"
                  />
          </div>
          </SectionBody>
          <SectionBody hoverEffect={true} link="https://www.ul.com/">
            <div>
              <img
                className={styles["sponsor-img"]}
                src="../imgs/25-26sponsors/ul.png"
              />
            </div>
          </SectionBody>
          <SectionBody hoverEffect={true} link="https://www.atlassian.com/">
            <div>
              <img
                className={styles["sponsor-img"]}
                src="../imgs/25-26sponsors/atlassian.png"
              />
            </div>
          </SectionBody>

          <SectionBody hoverEffect={true} link="https://www.asteralabs.com/">
            <div>
              <img
                className={styles["sponsor-img"]}
                src="../imgs/25-26sponsors/alabs.png"
              />
            </div>
          </SectionBody>

          <SectionBody hoverEffect={true} link="https://www.servicenow.com/">
            <div>
              <img
                className={styles["sponsor-img"]}
                src="../imgs/25-26sponsors/servicenow.png"
              />
            </div>
          </SectionBody>
        </Container>
      </div>
    </Layout>
  );
}