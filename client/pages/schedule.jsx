import React from "react";
import { scrollSpy } from "react-scroll";
import { useEffect } from "react";
import WECEHacksLayout from "../components/wecehacksLayout";
import styles from "../styles/WECEHacks.module.css";

import CustomCursor from "custom-cursor-react";
import "custom-cursor-react/dist/index.css";
import SectionHead from "../components/sectionhead";
import Container from "react-bootstrap/Container";

export default function Schedule() {
  useEffect(() => {
    scrollSpy.update();
  }, []);

  return (
    <WECEHacksLayout background_color="#a890fe">
      <CustomCursor // custom cursor component
        customClass={styles["cursor"]}
        targets={["#nav", "#button"]}
        targetScale={2}
        dimensions={8}
        strokeColor="#b1f4c5"
        strokeWidth={8}
        fill="#6fb183"
        smoothness={{ movement: 1, scale: 0.6, opacity: 0.8 }}
        opacity={1}
      />
      <div className={styles["pages"]}>
        <div className={styles["schedule-title-wrapper"]}>
          <div className={styles["schedule-col"]}>
            <img
              className={styles["wece-hacks-schedule-bee"]}
              src="/../../imgs/Asset 2.png"
              alt="wecehacks bee logo"
            />
          </div>
          <div className={styles["schedule-col"]}>
            <SectionHead title="Schedule" top={false} wecehacks={true} />
          </div>
          <br />
        </div>
      </div>
      <div id="events">
        <Container className="section">
          <div className={styles["wecehacks-center-wrapper"]}>
            <h3 className={styles["schedule-text-h3"]}>Day 1: April 8</h3>
          </div>
          <div id="day 1 events">
            <div className={styles["event-card"]}>
              <h4>Check In Starts</h4>
              <h6>9:00 am</h6>
            </div>
            <div className={styles["event-card"]}>
              <h4>Opening Ceremony</h4>
              <h6>11:00 am</h6>
            </div>
            <div className={styles["event-card"]}>
              <h4>Hacking Starts</h4>
              <h6>12:00 pm</h6>
            </div>
            <div className={styles["event-card"]}>
              <h4>Lunch: TBD</h4>
              <h6>1:00 pm</h6>
            </div>
            <div className={styles["event-card"]}>
              <h4>Workshop </h4>
              <h6>2:00 pm</h6>
            </div>
            <div className={styles["event-card"]}>
              <h4>SNYK MLH Event </h4>
              <h6>3:00 pm</h6>
            </div>
            <div className={styles["event-card"]}>
              <h4>Workshop </h4>
              <h6>4:00 pm</h6>
            </div>
            <div className={styles["event-card"]}>
              <h4>Workshop </h4>
              <h6>6:00 pm</h6>
            </div>
            <div className={styles["event-card"]}>
              <h4>Dinner: TBD</h4>
              <h6>7:00 pm</h6>
            </div>
            <div className={styles["event-card"]}>
              <h4>MLH Mini Event</h4>
              <h6>8:00 pm</h6>
            </div>
            <div className={styles["event-card"]}>
              <h4>ECEB Closes</h4>
              <h6>9:00 pm</h6>
            </div>
          </div>
          <div className={styles["wecehacks-center-wrapper"]}>
            <h3 className={styles["schedule-text-h3"]}>Day 2: April 9</h3>
          </div>
          <div id="day 2 events">
            <div className={styles["event-card"]}>
              <h4>Breakfast: TBD</h4>
              <h6>9:00 am</h6>
            </div>
            <div className={styles["event-card"]}>
              <h4>Soft Deadline on Devpost</h4>
              <h6>12:00 pm</h6>
            </div>
            <div className={styles["event-card"]}>
              <h4>Hacking Ends and Lunch: TBD</h4>
              <h6>1:00 pm</h6>
            </div>
            <div className={styles["event-card"]}>
              <h4>Project Demo's!</h4>
              <h6>2:00 pm</h6>
            </div>
            <div className={styles["event-card"]}>
              <h4>Judging and Outreach Event (TBD)</h4>
              <h6>3:00 pm</h6>
            </div>
            <div className={styles["event-card"]}>
              <h4>Closing Ceremony</h4>
              <h6>4:00 pm</h6>
            </div>
            <div className={styles["event-card"]}>
              <h4>WECE Hacks Ends</h4>
              <h6>5:00 pm</h6>
            </div>
          </div>
        </Container>
      </div>
    </WECEHacksLayout>
  );
}
