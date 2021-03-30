import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Layout from "../components/layout";
import ListOfTags from "../components/listOfTags";
import styles from "../styles/Blog.module.css";

export default function Blog() {
  let blogposts = [];
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
          <div className={styles["featured-post"]}>Featured post</div>
        </Container>
        <Container>
          <div className={styles["popular-wrapper"]}>
            <div className={styles["popular-title"]}><h2>Popular Posts</h2></div>
            <div className={styles["popular-posts"]}>
              <div className={styles["popular-post"]}></div>
              <div className={styles["popular-post"]}></div>
              <div className={styles["popular-post"]}></div>
              <div className={styles["popular-post"]}></div>
            </div>
          </div>
        </Container>
        <Container>
          <Row>
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
                blogposts={blogposts}
              />
            </div>
          </Row>
        </Container>
        <Row>
          <div className={styles["posts-wrapper"]}>
            <div className={styles["posts"]}>
              <div className={styles["post"]}>post</div>
              <div className={styles["post"]}>post</div>
              <div className={styles["post"]}>post</div>
              <div className={styles["post"]}>post</div>
            </div>
          </div>
        </Row>
      </div>
    </Layout>
  );
}
