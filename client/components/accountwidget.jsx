import React from "react";
import styles from "../styles/Accountwidget.module.css";

export default function AccountWidget({ children, className }) {
  return (
    <div className={`${styles["account-widget"]} ${className}`}>{children}</div>
  );
}
