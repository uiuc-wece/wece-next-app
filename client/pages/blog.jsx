import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { MdKeyboardArrowRight } from "react-icons/md";

import FilteredBlogposts from "../components/filteredblogposts";
import Layout from "../components/layout";
import ListOfTags from "../components/listOfTags";
import styles from "../styles/Blog.module.css";

export default function Blog() {
  const [blogposts, setBlogposts] = useState([
    {
      tags: ["Infrastructure", "Academic"],
      heading: "All about React.js",
      author: "Eugenia Chen",
      description: `React (also known as React.js or ReactJS) is an open-source,
                    front end, JavaScript library for building user interfaces
                    or UI components. It is maintained by Facebook and a
                    community of individual developers and companies. React can
                    be used as a base in the development of single-page or
                    mobile applications.`,
    },
    {
      tags: ["Marketing"],
      heading: "All about React.js",
      author: "Eugenia Chen",
      description: `React (also known as React.js or ReactJS) is an open-source,
                    front end, JavaScript library for building user interfaces
                    or UI components. It is maintained by Facebook and a
                    community of individual developers and companies. React can
                    be used as a base in the development of single-page or
                    mobile applications.`,
    },
    {
      tags: ["Infrastructure"],
      heading: "All about React.js",
      author: "Eugenia Chen",
      description: `React (also known as React.js or ReactJS) is an open-source,
                    front end, JavaScript library for building user interfaces
                    or UI components. It is maintained by Facebook and a
                    community of individual developers and companies. React can
                    be used as a base in the development of single-page or
                    mobile applications.`,
    },
  ]);
  const [activeTags, setActiveTags] = useState([]);

  function filterBlogposts(e) {
    const tagName = e.target.innerHTML;
    if (activeTags.includes(tagName)) {
      setActiveTags(activeTags.filter((tag) => tag != tagName));
    } else {
      activeTags.push(tagName);
    }
    let newBlogposts = blogposts.filter((post) =>
      post.tags.every((tag) => activeTags.includes(tag))
    );
    console.log(newBlogposts);
    setBlogposts(newBlogposts);
  }

  return (
    <Layout>
      <div className={styles["blog-wrapper"]}>
        <div className={styles["header-wrapper"]}>
          <div className={styles["header"]}>
            <h1>WECE Blog</h1>
          </div>
          <div className={styles["searchbar"]}>Searchbar</div>
        </div>
        <Container>
          <div className={styles["featured-post"]}>
            <div className={styles["content"]}>
              <div className={styles["image"]}>
                <img src="https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/coding-vs-programming-2.jpg" />
              </div>
              <div className={styles["text"]}>
                <div className={styles["tag"]}>
                  <h3>Infrastructure</h3>
                </div>
                <div className={styles["heading"]}>
                  <h4>
                    <b>All about React.js</b>
                  </h4>
                </div>
                <div className={styles["author"]}>
                  <h5>By Eugenia Chen</h5>
                </div>
                <div className={styles["description"]}>
                  <p>
                    React (also known as React.js or ReactJS) is an open-source,
                    front end, JavaScript library for building user interfaces
                    or UI components. It is maintained by Facebook and a
                    community of individual developers and companies. React can
                    be used as a base in the development of single-page or
                    mobile applications.
                  </p>
                </div>
                <a href="#">
                  <div className={styles["read-more"]}>
                    Read More
                    <MdKeyboardArrowRight
                      className={styles["read-more-arrow"]}
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </Container>
        <Container>
          <div className={styles["popular-wrapper"]}>
            <div className={styles["popular-title"]}>
              <h2>Popular Posts</h2>
            </div>
            <div className={styles["popular-posts"]}>
              <div className={styles["popular-post"]}></div>
              <div className={styles["popular-post"]}></div>
              <div className={styles["popular-post"]}></div>
              <div className={styles["popular-post"]}></div>
            </div>
          </div>
        </Container>
        <Container>
          <div className={styles["filter"]}>
            <ListOfTags
              words={[
                "Academic",
                "Infrastructure",
                "Marketing",
                "Mentorship",
                "Outreach",
                "Social",
                "Technical",
              ]}
              filterBlogposts={filterBlogposts}
            />
          </div>
        </Container>
        <Container>
          <FilteredBlogposts blogposts={blogposts} />
        </Container>
      </div>
    </Layout>
  );
}
