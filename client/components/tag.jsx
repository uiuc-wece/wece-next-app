import styles from "../styles/tag.module.css";
import React from "react";
export default function tag({word}) {
    return (
      <div className={styles["button"]}>
          <a className={styles["link-btn"]}>{buttonText}</a>
      </div>
    );
  }
