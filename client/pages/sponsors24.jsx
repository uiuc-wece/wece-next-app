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

          <h2 className={styles["sponsor-level"]}>Platinum level $2000+</h2>
          <SectionBody hoverEffect={true} link="https://www.northropgrumman.com/">
            <div>
              <img
                className={styles["sponsor-img"]}
                src="../imgs/24-25sponsors/NorthropGrumman.png"
              />
            </div>
          </SectionBody>
          <SectionBody hoverEffect={true} link="https://www.collinsaerospace.com/">
            <div>
              <img
                className={styles["sponsor-img"]}
                src="../imgs/24-25sponsors/collinsaero.png"
              />
            </div>
          </SectionBody>
          <SectionBody hoverEffect={true} link="https://www.marvell.com/">
            <div>
              <img
                className={styles["sponsor-img"]}
                src="../imgs/24-25sponsors/marvell_Logo.png"
              />
            </div>
          </SectionBody>

          <h2 className={styles["sponsor-level"]}>Gold level $1000+</h2>
          <SectionBody hoverEffect={true} link="https://www.st.com/content/st_com/en.html">
            <div>
              <img
                className={styles["sponsor-img"]}
                src="../imgs/24-25sponsors/st_logo.png"
              />
            </div>
          </SectionBody>

          <h2 className={styles["sponsor-level"]}>Silver level $500+</h2>
          <SectionBody hoverEffect={true} link="https://www.ulsolutions.com/">
            <div>
              <img
                className={styles["sponsor-img"]}
                src="../imgs/ulsolutions.png"
              />
            </div>
          </SectionBody>
          <SectionBody hoverEffect={true} link="https://www.servicenow.com/">
            <div>
              <img
                className={styles["sponsor-img"]}
                src="../imgs/24-25sponsors/serviceNow.png"
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

          <h2 className={styles["sponsor-level"]}>Bronze level </h2>
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
                src="../imgs/24-25sponsors/MicronLogo.png"
              />
            </div>
          </SectionBody>
          <SectionBody hoverEffect={true} link="https://www.imc.com/us/who-we-are">
            <div>
              <img
                className={styles["sponsor-img"]}
                src="../imgs/24-25sponsors/IMC_Logo.png"
              />
            </div>
          </SectionBody>
        </Container>
      </div>
    </Layout>
  );
}
