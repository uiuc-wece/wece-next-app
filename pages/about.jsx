import Layout from "../components/layout";
import SectionBody from "../components/sectionbody";
import SectionHead from "../components/sectionhead";

import Container from "react-bootstrap/Container";

export default function About() {
  return (
    <Layout>
      <div className="container">
        <div className="content">
          <Container fluid className="section">
            <SectionHead title="Who We Are_" top={true} />
            <SectionBody>
              <p>
                In 2002, WECE was founded to promote and inspire women in
                Electrical and Computer Engineering. Our objective is not only
                to encourage women to pursue a degree in ECE, but to also be a
                source of assistance in reaching academic and career goals. The
                WECE organization provides members with opportunities to make
                social connections within the department, advance technical
                skills, and network professionally.
              </p>
              <p>
                Involvement with WECE gives members a chance to make new friends
                and contacts within the department. WECE hosts a number of
                social events such as the Fall Banquet and Spring Semi Formal as
                well as other regular social meetings. Whether you are an
                incoming freshman or graduate student, being a part of a
                community of people that supports women in ECE is a powerful
                tool in furthering your personal and academic success.
              </p>
              <p>
                Along with the social aspect, WECE is also committed to
                assisting the development of our member’s technical skills. WECE
                organizes various events each year including technical workshops
                and tech talks by companies such as Square and Google. We
                recognize the importance of having well-rounded, technical
                knowledge and strive to help our members gain as much relevant
                experience as possible.
              </p>
              <p>
                WECE helps its members form valuable professional connections.
                It can sometimes be difficult to attain positions in the
                corporate world, which is why WECE makes it a priority to
                establish relationships with companies in order to help members
                do the same. This includes hosting guest speakers and organizing
                luncheons with influential people in the field who support women
                in ECE. We also work in cooperation with various companies, such
                as Microsoft and Goldman Sachs, to provide our members with as
                many internship and job prospects as possible.
              </p>
            </SectionBody>
          </Container>
        </div>
      </div>
    </Layout>
  );
}
