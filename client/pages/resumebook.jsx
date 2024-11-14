import Layout from "../components/layout";
import SectionBody from "../components/sectionbody";
import SectionHead from "../components/sectionhead";

import Container from "react-bootstrap/Container";

export default function resumebook() {
  return (
    <Layout>
      <div className="container">
        <div className="content">
          <Container fluid className="section">
            <SectionHead title="Resume Book" top={true} />
            <SectionBody>
              <p>
                Upload your resume to our resume book that we send to sponsors{" "}
                <a href="https://forms.gle/26xYeYhrop6yeDdH7" target="_blank" rel="noreferrer">
                  here
                </a>
                !
              </p>
            </SectionBody>
          </Container>
        </div>
      </div>
    </Layout>
  );
}
