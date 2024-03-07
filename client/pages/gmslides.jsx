import Layout from "../components/layout";
import SectionBody from "../components/sectionbody";
import SectionHead from "../components/sectionhead";

import Container from "react-bootstrap/Container";

const monthSlides = [
  {
    month: "August",
    link: "https://docs.google.com/presentation/d/11MD2HiB8lX89Yom06Pmb-qnt3z2i1LLv06dnFcnIB3s/edit?usp=sharing",
  },
  {
    month: "October",
    link: "https://docs.google.com/presentation/d/1TykqeuWfRxc9R90Ha06-cYnsF0Y1wgGZkNozWU-4JFA/edit?usp=sharing",
  },
  {
    month: "March",
    link: "",
  },
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
                  <a href={slide.link} target="_blank">
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