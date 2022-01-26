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
          <SectionBody hoverEffect={true} link="https://www.chevron.com/technology/technology-ventures">
          <div>
                  <img
                    className={styles["sponsor-img"]}
                    src="../imgs/chevron.png"
                  />
          </div>
          </SectionBody>
          <SectionBody hoverEffect={true} link="https://www.intel.com/">
            <div>
                  <img
                    className={styles["sponsor-img"]}
                    src="../imgs/intel.png"
                  />
          </div>
          </SectionBody>
          <h2 className={styles["sponsor-level"]}>Gold level $1000+</h2>
          <SectionBody hoverEffect={true} link="https://www.accenture.com">
          <div>
                  <img
                    className={styles["sponsor-img"]}
                    src="../imgs/accenture.png"
                  />
          </div>
          </SectionBody>

          <h2 className={styles["sponsor-level"]}>Silver level $500+</h2>
          <SectionBody hoverEffect={true} link="https://www.anduril.com/">
            <div>
                  <img
                    className={styles["sponsor-img"]}
                    src="../imgs/anduril.png"
                  />
          </div>
          </SectionBody>
          <SectionBody hoverEffect={true} link="https://www.janestreet.com/">
          <div>
                  <img
                    className={styles["sponsor-img"]}
                    src="../imgs/janestreet.png"
                  />
          </div>          </SectionBody>
          <h2 className={styles["sponsor-level"]}>Bronze level </h2>
          <SectionBody hoverEffect={true} link="https://www.palantir.com/">
          <div>
                  <img
                    className={styles["sponsor-img"]}
                    src="../imgs/palantir.png"
                  />
          </div>
          </SectionBody>
          <SectionBody hoverEffect={true} link="https://www.capitalone.com/">
          <div>
                  <img
                    className={styles["sponsor-img"]}
                    src="../imgs/capitalone.png"
                  />
          </div>
          </SectionBody>
        </Container>
      </div>
    </Layout>
  );
}
