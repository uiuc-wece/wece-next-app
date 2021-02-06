import React from "react";
import styles from "../styles/Home.module.css";

export default function LinesSvg() {
  return (
    <svg
      version="1.1"
      className={styles.lines}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1000 1000"
      x="0px"
      y="0px"
      xmlSpace="preserve"
      preserveAspectRatio="none"
    >
      <path
        className={`${styles.path} ${styles.path1}`}
        d="M 0 150 H 250 L 600 350 H 1000"
      />
      <path
        className={`${styles.path} ${styles.path2}`}
        d="M 1000 100 H 800 L 400 400 H 0"
      />
      <path
        className={`${styles.path} ${styles.path3}`}
        d="M 0 600 H 50 L 300 700 H 1000"
      />
      <path
        className={`${styles.path} ${styles.path4}`}
        d="M 1000 400 H 700 L 300 800 H 0"
      />
      <path
        className={`${styles.path} ${styles.path5}`}
        d="M 0 550 L 150 475 H 1000"
      />
      <path
        className={`${styles.path} ${styles.path6}`}
        d="M 1000 275 H 250 L 50 75 H 0"
      />
    </svg>
  );
}
