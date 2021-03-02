import styles from "../styles/listOfTags.module.css";
import React from "react";
import Tag from "./tag";
import listOfTagsStories from "../stories/listOfTags.stories";

export default function ListOfTags({words}) {
  return(
    <div className={styles["list_style"]}>
      {
        words.map(word => <Tag word={word}> </Tag>)
      }
    </div>
  );
  
}