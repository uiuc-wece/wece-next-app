import React, { useState } from "react";
import styles from "../styles/WECEHacks.module.css";

const WECEHacksFAQ = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <li className={styles["accordion-item"]}>
        <div
          className={styles["accordion-toggle"]}
          onClick={() => setIsActive(!isActive)}
        >
          <p>{question}</p>
          <span>{isActive ? "-" : "+"}</span>
        </div>
        {isActive && (
          <div className={styles["accordion-content"]}>{answer}</div>
        )}
      </li>
    </>
  );
};

export default WECEHacksFAQ;
