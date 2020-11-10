import React from "react";
import styles from "../styles/Boardcard.module.css";

export default function BoardCard({
  name,
  role,
  major,
  year,
  spiritAnimal,
  hobbies,
  quote,
  img,
}) {
  const flipCard = (event) => {
    const card = event.currentTarget;
    if (card.classList.contains(styles["active"])) {
      card.classList.remove(styles["active"]);
    } else {
      card.classList.add(styles["active"]);
    }
  };

  return (
    <div className={styles["img-card"]} onClick={flipCard}>
      <div className={styles["card-inner"]}>
        <div className={styles["flip-card"]}>
          <div className={styles["flip-text"]}>
            <h5>{major}</h5>
            <h6>{year}</h6>
            <div className={styles["flip-about"]}>
              <h5>About Me</h5>
              <h6>
                <span className={styles["flip-category"]}>Spirit Animal:</span>{" "}
                {spiritAnimal}
              </h6>
              <h6>
                <span className={styles["flip-category"]}>Hobbies:</span>{" "}
                {hobbies}
              </h6>
              <h6>
                <span className={styles["flip-category"]}>
                  Favorite inspirational quote:
                </span>{" "}
                {quote}
              </h6>
            </div>
          </div>
        </div>
        <img className={styles["exec-pic"]} src={img} />
        <div className={styles["exec-text"]}>
          <h5 className={styles["exec-name"]}>{name}</h5>
          <h6 className={styles["exec-desc"]}>{role}</h6>
        </div>
      </div>
    </div>
  );
}
