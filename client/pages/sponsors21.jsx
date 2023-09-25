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
          <SectionBody hoverEffect={true} link="https://www.synchrony.com/">
            <div>
              <img
                className={styles["sponsor-img"]}
                src="../imgs/synchrony-logo.png"
                alt="Synchrony Logo"
              />
            </div>
          </SectionBody>
          <SectionBody hoverEffect={true} link="https://www.intel.com/">
            <div>
              <img
                className={styles["sponsor-img"]}
                src="../imgs/intel.png"
                alt="Intel Logo"
              />
            </div>
          </SectionBody>

          <h2 className={styles["sponsor-level"]}>Bronze level </h2>
          <SectionBody hoverEffect={true} link="https://www.capitalone.com/">
            <div>
              <img
                className={styles["sponsor-img"]}
                src="../imgs/capitalone.png"
                alt="Capital One Logo"
              />
            </div>
          </SectionBody>
        </Container>
      </div>
    </Layout>
  );
}
