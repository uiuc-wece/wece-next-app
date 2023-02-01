import React from "react";
import Head from "next/head";
import Footer from "../../../components/footer";
import OutreachNavBar from "../../../components/outreach/OutreachNavBar";
import OutreachCodeBlock from "../../../components/outreach/OutreachCodeBlock";
import styles from "../../../styles/Markdown.module.css";
export default function OutreachHome({
  children,
  background_color = "#e6d3f2",
  title = "WECE @ Outreach | University of Illinois at Urbana-Champaign",
}) {
  return (
    <>
      {/* 
      ---------------
      This is the metadata for the Outreach page- No need to fix or change! 
      ---------------
       */}

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
      <div style={{ backgroundColor: background_color }}>
        <div id="container">
          <OutreachNavBar background_color={background_color}></OutreachNavBar>
          {children}
          <div className={styles["markdown-render"]}>
            <h1>Example of a build</h1>
            <p>
              This is an example of a build. This is an example of a build. This
              is an example of a build. This is an example of a build.
              <br />
              <br />
              This is an example of a build. This is an example of a build. This
            </p>
            <OutreachCodeBlock
              lang="Python"
              code={`import numpy as np
import pandas as pd

#Example Code Block

def example_function():
    print("Hello World!")
    return 0`}
            ></OutreachCodeBlock>
            <h2>Step 2</h2>
            <p>
              is an example of a build. This is an example of a build. This is
            </p>
          </div>

          <div className={styles["markdown-render"]}></div>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}
