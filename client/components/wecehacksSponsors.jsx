import React from "react";
import styles from "../styles/WECEHacks.module.css";
import SectionHead from "./sectionhead";

export default function WECEHacksSponsors() {
  return (
    <>
      <SectionHead title="Sponsors_" top={false} wecehacks={true} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <a href="https://www.statefarm.com/">
          <img
            src="../imgs/wecehacks/statefarm.png"
            alt="StateFarm logo"
            style={{
              width: "20em",
            }}
          ></img>
        </a>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginInline: "3em",
        }}
      >
        <a href="https://www.intel.com/content/www/us/en/homepage.html">
          <img
            src="../imgs/wecehacks/intel.png"
            alt="Intel logo"
            style={{
              width: "10em",
              maxWidth: "100%",
            }}
          ></img>
        </a>
        <a href="https://www2.deloitte.com/us/en.html">
          <img
            src="../imgs/wecehacks/Deloitte_Logo.png"
            alt="Deloitte logo"
            style={{
              width: "12em",
              maxWidth: "100%",
            }}
          ></img>
        </a>
        <a href="https://www.codedex.io/">
          <img
            src="../imgs/wecehacks/codedex.png"
            alt="codedex logo"
            style={{
              width: "15em",
              maxWidth: "100%",
            }}
          ></img>
        </a>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <a href="https://hackp.ac/mlh-standoutstickers-hackathons">
          <img
            src="../imgs/wecehacks/Standout.png"
            alt="Standout Stickers Logo"
            style={{
              width: "12em",
              marginLeft: "1em",
            }}
          ></img>
        </a>
        <a>
          <img
            src="../imgs/accenture.png"
            alt="Accenture Logo"
            style={{
              width: "13em",
              paddingLeft: "3em",
            }}
          ></img>
        </a>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          paddingTop: "3em",
        }}
      >
        <a href="https://ece.illinois.edu/">
          <img
            src="../imgs/wecehacks/ECE_logo.png"
            alt="University of Illinois ECE Logo"
            style={{
              width: "20em",
            }}
          ></img>
        </a>
      </div>
    </>
  );
}
