import styles from "../styles/ListOfTags.module.css";
import React from "react";
import Tag from "./tag";

export default function ListOfTags({ words, filterBlogposts }) {
  const getAllBlogposts = () => {
    // get all the blogposts
    axios.get("url/blogposts").then((res) => (blogposts = res.data));
  };

  return (
    <div className={styles["list"]}>
      {words.map((word) => (
        <Tag word={word} onClick={filterBlogposts}>
          {" "}
        </Tag>
      ))}
    </div>
  );
}
