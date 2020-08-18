import Layout from "../components/layout";
import SectionHead from "../components/sectionhead";
import styles from "../styles/Sponsors.module.css";

import Container from "react-bootstrap/Container";

export default function Sponsors() {
  return (
    <Layout>
      <div className="content">
        <Container fluid className="section">
          <SectionHead title="WECE Sponsor_" top={true} />
          <a
            className={styles["sponsor-link"]}
            href="https://www.microsoft.com/en-us/about"
            target="_blank"
          >
            <div className={styles["sponsor-button"]}>
              <h1 className={styles["main-sponsor"]}>Microsoft</h1>
            </div>
          </a>
          <SectionHead title="Donors_" top={true} />
          <h2 className={styles["sponsor-level"]}>Platinum level $2000+</h2>
          <a
            className={styles["sponsor-link"]}
            href="https://www.chevron.com/technology/technology-ventures"
            target="_blank"
          >
            <div className={styles["sponsor-button"]}>
              <h3 className={styles["donor-names"]}>
                Chevron Technology Ventures
              </h3>
            </div>
          </a>
          <h2 className={styles["sponsor-level"]}>Gold level $1000+</h2>
          <a
            className={styles["sponsor-link"]}
            href="https://www.bp.com/"
            target="_blank"
          >
            <div className={styles["sponsor-button"]}>
              <h3 className={styles["donor-names"]}>BP</h3>
            </div>
          </a>
          <a
            className={styles["sponsor-link"]}
            href="https://www.micron.com/"
            target="_blank"
          >
            <div className={styles["sponsor-button"]}>
              <h3 className={styles["donor-names"]}>Micron</h3>
            </div>
          </a>
          <a
            className={styles["sponsor-link"]}
            href="https://usa.visa.com/"
            target="_blank"
          >
            <div className={styles["sponsor-button"]}>
              <h3 className={styles["donor-names"]}>Visa</h3>
            </div>
          </a>
          <a
            className={styles["sponsor-link"]}
            href="https://www.zillow.com/"
            target="_blank"
          >
            <div className={styles["sponsor-button"]}>
              <h3 className={styles["donor-names"]}>Zillow</h3>
            </div>
          </a>
          <h2 className={styles["sponsor-level"]}>Silver level $500+</h2>
          <a
            className={styles["sponsor-link"]}
            href="https://www.accenture.com"
            target="_blank"
          >
            <div className={styles["sponsor-button"]}>
              <h3 className={styles["donor-names"]}>Accenture</h3>
            </div>
          </a>
          {/* <h2 className="sponsor-level">Bronze level</h2> */}
        </Container>
      </div>
    </Layout>
  );
}
