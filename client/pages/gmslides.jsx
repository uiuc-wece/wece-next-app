import Layout from "../components/layout";
import SectionBody from "../components/sectionbody";
import SectionHead from "../components/sectionhead";

import Container from "react-bootstrap/Container";

const monthSlides = [
  {
    month: "September",
    link: "https://docs.google.com/presentation/d/1AJmCA--ZAHh1J992ApaFSs-CTgO-f_AOF1eYsKrmwwk/edit?usp=sharing",
  },
  {
    month: "October",
    link: "https://docs.google.com/presentation/d/16jV8JCms13o-T3MtBukn1y8R2qBhCNTY1R_gaGwxk4g/edit?usp=sharing",
  },
  {
    month: "November",
    link: "https://docs.google.com/presentation/d/10Pz5yy-awlLY1baT5P3p_1w2UHovSnmnaM45u3QaL6Y/edit?usp=sharing",
  },
  {
    month: "December",
    link: "https://docs.google.com/presentation/d/180Sd3Y99r9fshz6uVKHnpmR7fQaRGE0bmvzRZilPCwQ/edit?usp=sharing",
  },
  {
    month: "February",
    link: "https://docs.google.com/presentation/d/1qxkUp-AFdMdEGMn3FwPii1NR-uzzLPU5xSicJSmGNbM/edit?usp=sharing",
  },
  {
    month: "March",
    link: "https://docs.google.com/presentation/d/15J-PSPBiJ-IPoEdeBHU6ewHn1TB6ch_605T6tZJ_5_g/edit?usp=sharing",
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
