import React from "react";
import { SocialIcon } from "react-social-icons";
import styles from "../styles/Footer.module.css";

export default function WECEHacksFooter() {
  return (
    <div className={styles["wecehacks-footer"]} >
      <div className={styles["wecehacks-footer-content"]}>
      <div className={styles["wecehacks-navbar-text-left"]}> 
        <SocialIcon style={{
            width: "4em",
            height: "4em",
          }} 
          network="instagram"
          url="https://www.instagram.com/wecehac.ks/"
          fgColor="white"
          bgColor="transparent" 
        />
        <SocialIcon style={{
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
        <p>Women in Electrical and Computer Enginerring <br/>
        <p>1016 ECEB, 306 North Wright Street, Urbana, IL 61801</p>
        </p>
        </div>
        </div>
    </div>
  );
}
