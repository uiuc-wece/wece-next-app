import Navbar from "react-bootstrap/Navbar";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <Navbar className={styles.footer} variant="dark">
      <Navbar.Text className={styles["navbar-text-left"]}>
        © 2018 UIUC WECE. All rights reserved.
      </Navbar.Text>
      <Navbar.Text className={styles["navbar-text-right"]}>
        1016 ECEB, 306 North Wright Street, Urbana, IL 61801
      </Navbar.Text>
    </Navbar>
  );
}
