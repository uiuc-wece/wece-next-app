import styles from "../styles/ListOfTags.module.css";
import React from "react";
import Tag from "./tag";

export default function ListOfTags({words}) {
  return(
    <div className={styles["list"]}>
      {
        words.map(word => <Tag key={index} word={word}> </Tag>)
      }
    </div>
  );
  
}
