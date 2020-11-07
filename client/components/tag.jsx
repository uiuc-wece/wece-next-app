import styles from "../styles/tag.module.css";
export default function tag() {
  return (
    <div className={styles["button"]}>
      <a className={styles["link-btn"]}>{buttonText}</a>
    </div>
  );
}
