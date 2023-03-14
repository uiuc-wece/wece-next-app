import React from "react";
import { SocialIcon } from "react-social-icons";
import styles from "../styles/Footer.module.css";

export default function WECEHacksFooter() {
  return (
    <div className={styles["wecehacks-footer"]}>
      <div className={styles["wecehacks-footer-content"]}>
        <div className={styles["wecehacks-navbar-text-left"]}>
          <SocialIcon
            style={{
              width: "4em",
              height: "4em",
            }}
            network="instagram"
            url="https://www.instagram.com/wecehac.ks/"
            fgColor="white"
            bgColor="transparent"
          />
          <SocialIcon
            style={{
              width: "4em",
              height: "4em",
            }}
            network="email"
            url="mailto:wece.uiuc@gmail.com"
            fgColor="white"
            bgColor="transparent"
          />
        </div>
        <div className={styles["wecehacks-navbar-text-right"]}>
          <p>© WECEHacks Team 2023</p>
          <a
            style={{
              color: "#FED8DF",
              fontSize: "1.2em",
              textDecoration: "underline",
            }}
            href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
          >
            MLH Code of Conduct
          </a>
          <p>
            Women in Electrical and Computer Engineering <br />
            <p>1016 ECEB, 306 North Wright Street, Urbana, IL 61801</p>
          </p>
        </div>
      </div>
    </div>
  );
}
