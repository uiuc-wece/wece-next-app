import EventCarousel from "../components/carousel";
import Layout from "../components/layout";
import LinesSvg from "../components/lines.svg";
import SectionHead from "../components/sectionhead";
import styles from "../styles/Home.module.css";

import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

export default function Home() {
  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      var pic_popup = document.getElementById("staff-pic-popup");
      if (pic_popup != null) {
        var offset = pic_popup.offsetTop - 250;
        if (
          document.body.scrollTop >= offset ||
          document.documentElement.scrollTop >= offset
        ) {
          document.getElementById("staff-pic").style.visibility = "visible";
          document.getElementById("staff-pic").style.opacity = 1;
        } else {
          document.getElementById("staff-pic").style.visibility = "hidden";
          document.getElementById("staff-pic").style.opacity = 0;
        }
      }
    }
  });
  return (
    <Layout>
      <div className={styles.container}>
        <LinesSvg></LinesSvg>
        <div className="content">
          <Container fluid>
            <div className={styles.title}>
              <div className={styles["front-img"]}>
                <Image
                  fluid
                  src="imgs/wece-logo-white.png"
                  alt="wece-logo-white"
                />
              </div>
            </div>
            <div className={styles.subheading}>
              <h4 className={styles["wece-title"]}>
                Women in Electrical and Computer Engineering
              </h4>
              <h6 className={styles["uiuc-subheading"]}>
                University of Illinois Urbana-Champaign
              </h6>
            </div>
          </Container>
          <div className={styles["staff-pic-popup"]} id="staff-pic-popup">
            <img
              className={`${styles["img-center"]} ${styles["staff-pic"]}`}
              id="staff-pic"
              src="imgs/board2019-20.png"
            />
          </div>
          <Container fluid className="section">
            <SectionHead title="About_"></SectionHead>
            <div className="section-body">
              <p>
                <span
                  style={{
                    color: "#2eb6ad",
                    fontWeight: 600,
                    fontFamily: "IBM Plex Mono",
                  }}
                >
                  We are WECE
                </span>{" "}
                - a student organization at the University of Illinois at
                Urbana-Champaign dedicated to supporting women within the
                Electrical and Computer Engineering department. We welcome
                members of all genders to be active in the group, and we strive
                to build communities amongst ourselves by hosting social,
                technical, outreach, and professional events.
              </p>
              <div className="button">
                <a href="about.html" className="link-btn">
                  Learn More
                </a>
              </div>
            </div>
            <SectionHead title="Events_"></SectionHead>
            <div class="section-body">
              <EventCarousel></EventCarousel>
            </div>
            <SectionHead title="Committees_"></SectionHead>
            <div className="section-body">
              <p>
                WECE has SEVEN different committees you can join and be a part
                of! Get involved with technical projects, mentor elementary
                students, plan fun events, and more!
              </p>
              <div className="button">
                <a href="committees.html" className="link-btn">
                  Learn More
                </a>
              </div>
            </div>
            <SectionHead title="Join Us_"></SectionHead>
            <div className="section-body">
              <p>
                If you are interested in learning more about WECE, fill out the
                form below to get added to our mailing list! An email with
                events and updates will be sent out every week.
              </p>
              <div className="button">
                <a href="join.html" className="link-btn">
                  Join us!
                </a>
              </div>
            </div>
          </Container>
          {/*<Container fluid className="section">
                <div className={styles["section-head"]}>
                    <div className="section-title">
                    <h3 className={styles["text-center"]}>Upcoming Events_</h3>
                    </div>
                </div>
                <div className="section-body">
                    <p></p>
                    <div className="button">
                    <a href="calendar.html" className="link-btn">Learn More</a>
                    </div>
                </div>
            </Container>*/}
        </div>
      </div>
    </Layout>
  );
}
