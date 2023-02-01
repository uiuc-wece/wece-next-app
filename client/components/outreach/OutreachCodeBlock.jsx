import React from "react";
import styles from "../../styles/Markdown.module.css";

export default function OutreachCodeBlock({ code, lang }) {
  return (
    <div className={styles["code-container"]}>
      <div className={styles["code-header"]}>
        <p>{lang}</p>
      </div>
      <div>
        <p>{code}</p>
      </div>
    </div>
  );
}
