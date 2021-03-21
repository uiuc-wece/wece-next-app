import styles from "../styles/tag.module.css";
import React from "react";
export default function Tag({word}) {
    return (
          <a className={styles["tag"]}> {word} </a>
    );
  }
