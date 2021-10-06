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
          <SectionBody
            hoverEffect={true}
            link="https://www.chevron.com/technology/technology-ventures"
          >
            <h3 className={styles["donor-names"]}>
              Chevron Technology Ventures
            </h3>
          </SectionBody>
          <SectionBody hoverEffect={true} link="https://www.intel.com/">
            <h3 className={styles["donor-names"]}>Intel</h3>
          </SectionBody>
          <h2 className={styles["sponsor-level"]}>Gold level $1000+</h2>
          <SectionBody hoverEffect={true} link="https://www.accenture.com">
            <h3 className={styles["donor-names"]}>Accenture</h3>
          </SectionBody>

          <h2 className={styles["sponsor-level"]}>Silver level $500+</h2>
          <SectionBody hoverEffect={true} link="https://www.anduril.com/">
            <h3 className={styles["donor-names"]}>Anduril</h3>
          </SectionBody>
          <h2 className={styles["sponsor-level"]}>Bronze level </h2>
          <SectionBody hoverEffect={true} link="https://www.palantir.com/">
            <h3 className={styles["donor-names"]}>Palantir</h3>
          </SectionBody>
          <SectionBody hoverEffect={true} link="https://www.capitalone.com/">
            <h3 className={styles["donor-names"]}>Capital One</h3>
          </SectionBody>
          {/* <h2 className="sponsor-level">Bronze level</h2> */}
        </Container>
      </div>
    </Layout>
  );
}
