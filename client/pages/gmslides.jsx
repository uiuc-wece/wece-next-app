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
                <a href="https://docs.google.com/presentation/d/14cXtMZxfbV3bsjZH-7BnLMZ1C7IfwrRNue7dn9S37JY/edit?usp=sharing" target="_blank">
                  February
                </a>
            </p>
            <p>
                <a href="https://docs.google.com/presentation/d/1wULHWFUNW7JSa5GSx9S__Duft2_T_xeZcw9pxooh5gQ/edit?usp=sharing" target="_blank">
                  December
                </a>
            </p>
            <p>
                <a href="https://docs.google.com/presentation/d/17ZRVUvHA3b7W9v-Y9YMLG7wUK7i4X2RXRpqWjYrLq48/edit?usp=sharing" target="_blank">
                  October
                </a>
            </p>
            <p>
                <a href="https://docs.google.com/presentation/d/1C5Y2_xcKfFlSjMwP4QeNYdYb6EjtFqyd112_MJgesww/edit#slide=id.p" target="_blank">
                  August
                </a>
            </p>
            </SectionBody>
          </Container>
        </div>
      </div>
    </Layout>
  );
}
