import Layout from "../components/layout";
import SectionBody from "../components/sectionbody";
import SectionHead from "../components/sectionhead";

import Container from "react-bootstrap/Container";

//testing

const monthSlides = [
  {
    month: "ECE 110 Resources",
    link: "https://docs.google.com/document/d/1THfgMo_wEWTyV8ULg37BCM1N-mnoRfFAVlnvQYNqK7I/edit?usp=sharing",
  },
  {
    month: "ECE 120 Resources",
    link: "https://docs.google.com/document/d/1bXK6tr8EzZuz3QnUEVgpui4BZU2wOK-KTIh4nDdLLqE/edit?usp=sharing",
  }
];

export default function gmslides() {
  return (
    <Layout>
      <div className="container">
        <div className="content">
          <Container fluid className="section">
            <SectionHead title="ECE Academic Resources!" top={true} />
            <SectionBody>
              {monthSlides.map((slide, index) => (
                <p key={index}>
                  {" "}
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