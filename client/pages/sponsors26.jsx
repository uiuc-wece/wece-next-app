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

          <h2 className={styles["sponsor-level"]}>Platinum Level</h2>
          <SectionBody hoverEffect={true} link="https://www.amd.com/">
            <div>
              <img
                className={styles["sponsor-img"]
                  
                } style = {{'mixBlendMode': 'multiply'
                }}
                src="../imgs/26-27sponsors/amd.png"
              />
            </div>
          </SectionBody>
          

          <h2 className={styles["sponsor-level"]}>Silver Level</h2>

          <SectionBody hoverEffect={true} link="https://www.atlassian.com/">
            <div>
              <img
                className={styles["sponsor-img"]} style = {{'mixBlendMode': 'multiply'
                }}
                src="../imgs/26-27sponsors/atlassian.png"
              />
            </div>
          </SectionBody>

          <SectionBody hoverEffect={true} link="https://www.kla.com/">
            <div>
              <img
                className={styles["sponsor-img"]}
                style = {{'mixBlendMode': 'multiply'
                }}
                src="../imgs/26-27sponsors/kla.png"
              />
            </div>
          </SectionBody>

          <h2 className={styles["sponsor-level"]}>Bronze Level</h2>

          <SectionBody hoverEffect={true} link="https://www.asteralabs.com/">
            <div>
              <img
                className={styles["sponsor-img"]}
                src="../imgs/26-27sponsors/alabs.png"
              />
            </div>
          </SectionBody>

          <SectionBody hoverEffect={true} link="https://www.cdsmith.com/">
            <div>
              <img
                className={styles["sponsor-img"]}
                style = {{'mixBlendMode': 'multiply'
                }}
                src="../imgs/26-27sponsors/cdsmith.jpg"
              />
            </div>
          </SectionBody>

          <SectionBody hoverEffect={true} link="https://www.janestreet.com/">
          <div>
                  <img
                    className={styles["sponsor-img"]}
                    src="../imgs/janestreet.png"
                  />
          </div>
          </SectionBody>

          <SectionBody hoverEffect={true} link="https://www.micron.com/">
            <div>
              <img
                className={styles["sponsor-img"]}
                src="../imgs/26-27sponsors/micron.png"
              />
            </div>
          </SectionBody>

          <SectionBody hoverEffect={true} link="https://www.pwc.com/">
            <div>
              <img
                className={styles["sponsor-img"]}
                src="../imgs/26-27sponsors/pwc.png"
              />
            </div>
          </SectionBody>


        </Container>
      </div>
    </Layout>
  );
}