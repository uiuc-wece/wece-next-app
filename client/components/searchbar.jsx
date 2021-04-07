import React from "react";

import styles from "../styles/Searchbar.module.css";

export default function SearchBar() {
  return (
    <div className={styles["container"]}>
      <input className={styles["input"]} type="text" placeholder="Search..." />
      <div className={styles["search"]}></div>
    </div>
  );
}
