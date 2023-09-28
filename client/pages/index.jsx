import React from "react";
import EventCarousel from "../components/carousel";
import Layout from "../components/layout";
import LinesSvg from "../components/lines.svg";
import SectionBody from "../components/sectionbody";
import SectionButton from "../components/sectionbutton";
import SectionHead from "../components/sectionhead";
import styles from "../styles/Home.module.css";

import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
// import { BiRightArrowCircle } from "react-icons/bi";

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
      <LinesSvg />
      <div className="content">
        <div className={styles["top"]}>
          <Container>
            <div className={styles.title}>
              <div className={styles["front-img"]}>
                <Image src="imgs/wece-logo-white.png" alt="wece-logo-white" />
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
        </div>
        <Container className="section">
          <SectionHead title="About_" top={false} />
          <SectionBody>
            <p>
              <span
                style={{
                  color: "#bf7380", // text color of the first phrase in the paragraph
                  fontWeight: 600,
                  fontFamily: "IBM Plex Mono",
                }}
              >
                We are WECE, the Women in Electrical and Computer Engineering
              </span>{" "}
              - a student organization at the University of Illinois at
              Urbana-Champaign dedicated to supporting women within the
              Illinois ECE department. We welcome members
              of all genders to be active in the group, and we strive to build
              communities amongst ourselves by hosting social, technical,
              outreach, and professional events!
            </p>
            <SectionButton buttonText="Explore WECE" buttonLink="about" />
          </SectionBody>
          <SectionHead title="Events_" top={false} />
          <SectionBody>
            <EventCarousel></EventCarousel>
          </SectionBody>
          <SectionHead title="Committees_" top={false} />
          <SectionBody>
            <p>
              WECE has SEVEN different committees that dedicate themselves to 
              organize events, socials, and other activities! Explore building and 
              harware with Technical, Learn Software with Infrastructure, and mentor
              students through Mentorship! 
            </p>
            <SectionButton buttonText="Learn More" buttonLink="committees" />
          </SectionBody>
          <SectionHead title="Stay Connected_" top={false} />
          <SectionBody>
            <p>
              If you are interested in learning more about WECE, fill out the
              form below to get added to our mailing list! An email with events
              and updates will be sent out every week throughout the academic year.
            </p>
            <SectionButton buttonText="Sign Up" buttonLink="join" />
          </SectionBody>
        </Container>
        {/* Moved the image to the bottom of the page */}
        <div className={styles["staff-pic-popup"]} id="staff-pic-popup">
          <img
            className={`${styles["img-center"]} ${styles["staff-pic"]}`}
            id="staff-pic"
            src="imgs/board2019-20-green.png"
          />
        </div>
      </div>
    </Layout>
  );
};