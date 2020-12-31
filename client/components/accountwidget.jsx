import React from "react";
import styles from "../styles/Accountwidget.module.css";

export default function AccountWidget({ children }) {
  return <div className={styles["account-widget"]}>{children}</div>;
}
