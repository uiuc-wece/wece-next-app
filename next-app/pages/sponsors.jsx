import Layout from "../components/layout";
import SectionBody from "../components/sectionbody";
import SectionHead from "../components/sectionhead";
import styles from "../styles/Sponsors.module.css";

import Container from "react-bootstrap/Container";

export default function Sponsors() {
  return (
    <Layout>
      <div className="content">
        <Container fluid className="section">
          <SectionHead title="WECE Sponsor_" top={true} />
          <SectionBody
            hoverEffect={true}
            link="https://www.microsoft.com/en-us/about"
          >
            <h1 className={styles["main-sponsor"]}>Microsoft</h1>
          </SectionBody>
          <SectionHead title="Donors_" top={true} />
          <h2 className={styles["sponsor-level"]}>Platinum level $2000+</h2>
          <SectionBody
            hoverEffect={true}
            link="https://www.chevron.com/technology/technology-ventures"
          >
            <h3 className={styles["donor-names"]}>
              Chevron Technology Ventures
            </h3>
          </SectionBody>
          <h2 className={styles["sponsor-level"]}>Gold level $1000+</h2>
          <SectionBody hoverEffect={true} link="https://www.bp.com/">
            <h3 className={styles["donor-names"]}>BP</h3>
          </SectionBody>
          <SectionBody hoverEffect={true} link="https://www.micron.com/">
            <h3 className={styles["donor-names"]}>Micron</h3>
          </SectionBody>
          <SectionBody hoverEffect={true} link="https://usa.visa.com/">
            <h3 className={styles["donor-names"]}>Visa</h3>
          </SectionBody>
          <SectionBody hoverEffect={true} link="https://www.zillow.com/">
            <h3 className={styles["donor-names"]}>Zillow</h3>
          </SectionBody>
          <h2 className={styles["sponsor-level"]}>Silver level $500+</h2>
          <SectionBody hoverEffect={true} link="https://www.accenture.com">
            <h3 className={styles["donor-names"]}>Accenture</h3>
          </SectionBody>
          {/* <h2 className="sponsor-level">Bronze level</h2> */}
        </Container>
      </div>
    </Layout>
  );
}
