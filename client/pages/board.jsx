import BoardCard from "../components/boardcard";
import BoardData from "../data/boarddata";
import Layout from "../components/layout";
import SectionHead from "../components/sectionhead";
import styles from "../styles/Board.module.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function Board() {
  return (
    <Layout>
      <div className="content">
        <Container className={styles["section"]}>
          <SectionHead title="Meet the Board_" top={true} />
          <div className={styles["section"]}>
            <Container fluid>
              <Row className={styles["board-cards"]}>
                {BoardData.board.map((member) => (
                  <BoardCard
                    key={member.name}
                    name={member.name}
                    role={member.role}
                    major={member.major}
                    year={member.year}
                    about={member.about}
                    contact={member.contact}
                    linkedin={member.linkedin}
                    img={member.img}
                  />
                ))}
              </Row>
            </Container>
          </div>
        </Container>
      </div>
    </Layout>
  );
}
