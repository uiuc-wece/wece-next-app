import { MdKeyboardArrowRight } from "react-icons/md";

import styles from "../styles/Blog.module.css";
import React from "react";

export default function FilteredBlogposts({ blogposts }) {
  function Blogpost({ tags, heading, author, description }) {
    return (
      <div className={styles["post"]}>
        <div className={styles["content"]}>
          <div className={styles["image"]}>
            <img src="https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/coding-vs-programming-2.jpg" />
          </div>
          <div className={styles["text"]}>
            <div className={styles["tag"]}>
              {tags.map((tag) => (
                <h3>{tag}</h3>
              ))}
            </div>

            <div className={styles["heading"]}>
              <h4>
                <b>{heading}</b>
              </h4>
            </div>
            <div className={styles["author"]}>
              <h5>By {author}</h5>
            </div>
            <div className={styles["description"]}>
              <p>{description}</p>
            </div>
            <a href="#">
              <div className={styles["read-more"]}>
                Read More
                <MdKeyboardArrowRight className={styles["read-more-arrow"]} />
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles["posts-wrapper"]}>
      <div className={styles["posts"]}>
        {blogposts.map((post, idx) => (
          <Blogpost
            key={idx}
            tags={post.tags}
            heading={post.heading}
            author={post.author}
            description={post.description}
          />
        ))}
      </div>
    </div>
  );
}
