import styles from "../styles/tag.module.css";
import React from "react";
export default function Tag({ word, onClick }) {
  return (
    <a className={styles["tag"]} onClick={onClick} value={word}>
      {word}
    </a>
  );
}
