import Layout from "../components/layout";
import SectionBody from "../components/sectionbody";
import SectionHead from "../components/sectionhead";
import styles from "../styles/Sponsors.module.css";

import Container from "react-bootstrap/Container";

export default function Sponsors21() {
  return (
    <Layout>
      <div className="content">
        <Container className="section">
          <SectionHead title="WECE Sponsor_" top={true} />
          <SectionBody
            hoverEffect={true}
            link="https://www.microsoft.com/en-us/about"
          >
            <h1 className={styles["main-sponsor"]}>Microsoft</h1>
          </SectionBody>
          <SectionHead title="Donors_" top={true} />
          <h2 className={styles["sponsor-level"]}>Platinum level $2000+</h2>
            <SectionBody hoverEffect={true} link="https://www.intel.com/">
            <h3 className={styles["donor-names"]}>Intel</h3>
          </SectionBody>
          <h2 className={styles["sponsor-level"]}>Gold level $1000+</h2>
          <h2 className={styles["sponsor-level"]}>Bronze level</h2> 
          <SectionBody hoverEffect={true} link="https://www.capitalone.com/">
            <h3 className={styles["donor-names"]}>Capital One</h3>
          </SectionBody>
        </Container>
      </div>
    </Layout>
  );
}