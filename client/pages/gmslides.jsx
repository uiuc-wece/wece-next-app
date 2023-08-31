import Layout from "../components/layout";
import SectionBody from "../components/sectionbody";
import SectionHead from "../components/sectionhead";

import Container from "react-bootstrap/Container";

export default function gmslides() {
  return (
    <Layout>
      <div className="container">
        <div className="content">
          <Container fluid className="section">
            <SectionHead title="GM Slides" top={true} />
            <SectionBody>
              <p>
                Access past General Meeting slides here:{" "}
              </p>
              <p>
                <a href="https://docs.google.com/presentation/d/11MD2HiB8lX89Yom06Pmb-qnt3z2i1LLv06dnFcnIB3s/edit?usp=sharing" target="_blank">
                  New Slides
                </a>
              </p>
            </SectionBody>
          </Container>
        </div>
      </div>
    </Layout>
  );  
}
