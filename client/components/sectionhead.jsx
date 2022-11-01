import React from "react";
import styles from "../styles/Sectionhead.module.css";

function SectionTop({ children }) {
  return <div className={styles["section-top"]}>{children}</div>;
}

export default function SectionHead({ title, top, wecehacks }) {
  if (top) {
    return (
      <SectionTop>
        <div className={styles["section-head"]}>
          <div className={styles["section-title"]}>
            <h3>{title}</h3>
          </div>
        </div>
      </SectionTop>
    );
  } else if (wecehacks) {
    return (
      <div className={styles["wecehacks-section-head"]}>
        <div className={styles["wecehacks-section-title"]}>
          <h3>{title}</h3>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles["section-head"]}>
        <div className={styles["section-title"]}>
          <h3>{title}</h3>
        </div>
      </div>
    );
  }
}
