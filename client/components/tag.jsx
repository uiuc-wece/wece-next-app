import styles from "../styles/Tag.module.css";
import React from "react";
export default function Tag({word}) {
    return (
          <a className={styles["tag_style"]}>{word}</a>
    );
  }
