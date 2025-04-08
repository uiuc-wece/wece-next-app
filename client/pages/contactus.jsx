import Layout from "../components/layout";
import SectionBody from "../components/sectionbody";
import SectionHead from "../components/sectionhead";
import styles from "../styles/Contactus.module.css"; // Import your CSS module
import Container from "react-bootstrap/Container";
//import Image from 'next/image';

export default function ContactUs() {
  return (
    <Layout>
      <div className="content">
        <Container className="section">
          <SectionHead title="Contact Us_" top={true} />
          <SectionBody hoverEffect={true} link="mailto:wece.uiuc@gmail.com?subject=WECE%20Contact%20Us">
            <h2 className={styles["contact-title"]}>Email</h2>
            <p className={styles["contact-desc"]}>
              Contact us with any questions at wece.uiuc@gmail.com
            </p>
          </SectionBody>
          <SectionBody hoverEffect={true} link="https://discord.gg/pWTv3QXRrb">
            <div className={styles["icon-box"]}>
              <div className="description">
                <h2 className={styles["contact-title"]}>
                  Join us on Discord!
                </h2>
              </div>
              <img
                className={styles["icon"]}
                alt="discord"
                src="imgs/weceDiscord.png"
              />
            </div>
          </SectionBody>
          <SectionBody hoverEffect={true} link="https://www.instagram.com/wece.uiuc/">
            <div className={styles["icon-box"]}>
              <div className="description">
                <h2 className={styles["contact-title"]}>
                  Follow us on Instagram!
                </h2>
              </div>
              <img
                className={styles["icon"]}
                alt="instagram"
                src="imgs/weceInsta.png"
              />
            </div>
          </SectionBody>
        </Container>
      </div>
    </Layout>
  );
}