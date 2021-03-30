import styles from "../styles/ListOfTags.module.css";
import React from "react";
import Tag from "./tag";

export default function ListOfTags({words, blogposts}) {
  const getAllBlogposts = () => {
    // get all the blogposts
    axios.get("url/blogposts").then((res) => blogposts = res.data);
  }

  const clickedTag = (e) => {
    // do some filtering here
    const tagName = e.target.value;
    blogposts = blogposts.filter((post) => post.committeeTags.includes(tagName))
  }
  return (
    <div className={styles["list"]}>
      {words.map((word) => (
        <Tag word={word} onClick={clickedTag}>
          {" "}
        </Tag>
      ))}
    </div>
  );
  
}
