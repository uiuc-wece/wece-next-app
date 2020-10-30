import Layout from "../components/layout";
import SectionBody from "../components/sectionbody";
import SectionHead from "../components/sectionhead";
import styles from "../styles/Design.module.css";

import Container from "react-bootstrap/Container";

export default function Design() {
  return (
    <Layout>
      <div className="container">
        <div className="content">
          <Container fluid className="section">
            <SectionHead title="Design_" top={true} />
            <SectionBody>
              <h2>Website Colors 1.0</h2>
              <div className={styles["color-blocks"]}>
                <div className={`${styles["color-block"]} ${styles["accent"]}`}>
                  Accent Color
                  <br />
                  #2eb6ad
                </div>
                <div
                  className={`${styles["color-block"]} ${styles["accent-shadow"]}`}
                >
                  Accent Color Shadow
                  <br />
                  #0e968d
                </div>
                <div
                  className={`${styles["color-block"]} ${styles["accent-text"]}`}
                >
                  Accent Text Color
                  <br />
                  #175b56
                </div>
                <div
                  className={`${styles["color-block"]} ${styles["neutral"]}`}
                >
                  Neutral Color
                  <br />
                  #dee3e3
                </div>
                <div
                  className={`${styles["color-block"]} ${styles["neutral-shadow"]}`}
                >
                  Neutral Color Shadow
                  <br />
                  #bec3c3
                </div>
                <div
                  className={`${styles["color-block"]} ${styles["dark-background"]}`}
                >
                  Dark Background Color
                  <br />
                  #20272f
                </div>
                <div
                  className={`${styles["color-block"]} ${styles["light-text"]}`}
                >
                  Light Text Color
                  <br />
                  #ffffff
                </div>
                <div
                  className={`${styles["color-block"]} ${styles["dark-text"]}`}
                >
                  Dark Text Color
                  <br />
                  #20272f
                </div>
              </div>
            </SectionBody>
            <SectionBody>
              <h2>Font Families 1.0</h2>
              <div className={styles["fonts"]}>
                <div className={styles["sans-serif"]}>
                  Sans serif font.
                  <br />
                  The quick brown fox jumps over the lazy dog.
                  <br />
                  Use this font for large bodies of text.
                </div>
                <div className={styles["serif"]}>
                  Serif font.
                  <br />
                  The quick brown fox jumps over the lazy dog.
                  <br />
                  Use this font for headings and text to stand out from regular
                  copy (e.g. for buttons, navigation, etc.).
                </div>
              </div>
            </SectionBody>
          </Container>
        </div>
      </div>
    </Layout>
  );
}
