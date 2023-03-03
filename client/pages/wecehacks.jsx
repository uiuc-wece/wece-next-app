import React from "react";
import { scrollSpy } from "react-scroll";
// import { ReactTypeformEmbed } from "react-typeform-embed";
import { useEffect } from "react";
import WECEHacksLayout from "../components/wecehacksLayout";
import styles from "../styles/WECEHacks.module.css";

import Button from "react-bootstrap/Button";
import CustomCursor from "custom-cursor-react";
import "custom-cursor-react/dist/index.css";
// import { BiRightArrowCircle } from "react-icons/bi";
import SectionHead from "../components/sectionhead";
import WECEHacksTeam from "../components/wecehacksTeam";
import WECEHacksClouds from "../components/wecehacksClouds";

export default function WECEHacks() {
  // const [typeForm, setTypeForm] = useState(null);

  useEffect(() => {
    scrollSpy.update();
  }, []);

  // const typeFormRef = useCallback((tf) => {
  //   console.log(tf);
  //   if (tf !== null) {
  //     setTypeForm(tf);
  //   }
  // }, []);

  // const openForm = () => {
  //   console.log("click");
  //   if (typeForm) {
  //     typeForm.typeform.open();
  //   }
  // };

  return (
    <WECEHacksLayout background_color="#a890fe">
      <CustomCursor // custom cursor component
        customClass={styles["cursor"]}
        targets={["#nav", "#button"]}
        targetScale={2}
        dimensions={8}
        strokeColor="#b1f4c5"
        strokeWidth={8}
        fill="#6fb183"
        smoothness={{ movement: 1, scale: 0.6, opacity: 0.8 }}
        opacity={1}
      />
      {/* <div className={styles["wece-hacks-wrapper"]}>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdzmXRpaYpndoNDi_EhmQT3pSJk3793_6XBkAPYIU_bzbJWdg/viewform?usp=sf_link">
          <div className={styles["wece-hacks-content"]}>
            <div className={styles["wece-hacks-text"]}>
              Volunteer to be a mentor or judge for the hackathon here!
            </div>
            <div className={styles["wece-hacks-icon"]}>
              <BiRightArrowCircle />
            </div>
          </div>
        </a>
      </div> */}
      <div className={styles["pages"]}>
        <div className={styles["wecehacks-logo-wrapper"]}>
          <img
            className={styles["wece-hacks-bee"]}
            src="/../../imgs/Asset 2.png"
            alt="wecehacks bee logo"
          />
          <img
            className={styles["wece-hacks-text"]}
            src="/../../imgs/wece-hacks-text.png"
            alt="wecehacks-logo"
          />
        </div>
        <SectionHead title="April 8-9, 2022" top={false} wecehacks={true} />
        <div className={styles["wecehacks-center-wrapper"]}>
          <Button
            className={styles["wecehacks-button"]}
            href="https://forms.gle/3WdcHSGjdRYK3ygq6"
            variant="outline-light"
            style={{
              fontFamily: "Press Start 2P, cursive",
            }}
          >
            Notify Me
          </Button>
          <div>
            <h2
              className={styles["wecehacks-text-h2"]}
              style={{
                marginInline: "2em",
                marginTop: "20px",
                textAlign: "center",
              }}
            >
              WECEHacks is The University of Illinois' Electrical and Computer
              Engineering Department's hackathon! We are a 24-hour hackathon,
              inspriring you to create something new and exciting.
            </h2>
          </div>
        </div>
      </div>
      <WECEHacksTeam />
    </WECEHacksLayout>
  );
}
