/* eslint-disable react/prop-types */
import React from "react";
import Head from "next/head";
import WECEHacksFooter from "./wecehacksFooter";
import WECEHacksNav from "./wecehacksNav";
import styles from "../styles/WECEHacks.module.css";

export default function WECEHacksLayout({
  children,
  background_color = "radial-gradient(circle, rgba(168,144,254,1) 0%, rgba(198,143,202,1) 66%, rgba(244,126,126,1) 100%)",
  title = "WECEHacks 23 | University of Illinois at Urbana-Champaign",
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono|Roboto"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossOrigin="anonymous"
        />
      </Head>

      <div className={styles["bg-wece-hacks"]}>
        <div id="container">
          <WECEHacksNav background_color={background_color}></WECEHacksNav>
          {children}
        </div>
        <WECEHacksFooter></WECEHacksFooter>
      </div>
    </>
  );
}
