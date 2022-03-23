import Layout from "../components/layout";
import SectionBody from "../components/sectionbody";
import SectionHead from "../components/sectionhead";

import Container from "react-bootstrap/Container";

export default function googlecal() {
  return (
    <Layout>
      <div className="container">
        <div className="content">
          <Container fluid className="section">
            <SectionHead title="WECE Google Calendar" top={true} />
            <SectionBody>
            <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&src=amNoaW50MkBpbGxpbm9pcy5lZHU&src=Y19lOWF0ZWtpdmNlcG9xdThoMWdrM2t0dWdwb0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=cG10dGhxN2JlZWZydWxucmpiZDluajllNXNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23D81B60&color=%233F51B5&color=%2333B679&color=%230B8043&color=%23F4511E" style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"></iframe>
            </SectionBody>
          </Container>
        </div>
      </div>
    </Layout>
  );
}

