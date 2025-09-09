import Layout from "../components/layout";
import SectionBody from "../components/sectionbody";
import SectionHead from "../components/sectionhead";

import Container from "react-bootstrap/Container";

const monthSlides = [
  {
    month: "September 5th, 2025",
    link: "https://docs.google.com/presentation/d/1RS0A3af7b4IDOXSpBu-uZD0fsGt--lYPitYA6b8N4mU/edit?usp=sharing",
  }
];

export default function gmslides() {
  return (
    <Layout>
      <div className="container">
        <div className="content">
          <Container fluid className="section">
            <SectionHead title="GM Slides" top={true} />
            <SectionBody>
              {monthSlides.map((slide, index) => (
                <p key={index}>
                  Access past General Meeting slides for{" "}
                  <a href={slide.link} target="_blank" rel="noreferrer">
                    {slide.month}
                  </a>
                </p>
              ))}
            </SectionBody>
          </Container>
        </div>
      </div>
    </Layout>
  );
}
