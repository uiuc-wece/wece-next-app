import React from "react";
import styles from "../styles/Sectionbutton.module.css";

import Link from "next/link";

export default function SectionButton({ buttonText, buttonLink }) {
  return (
    <div className={styles["button"]}>
      <Link href={buttonLink}>
        <a className={styles["link-btn"]}>{buttonText}</a>
      </Link>
    </div>
  );
}
