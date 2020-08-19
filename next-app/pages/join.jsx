import Layout from "../components/layout";
import SectionBody from "../components/sectionbody";
import SectionHead from "../components/sectionhead";
import styles from "../styles/Join.module.css";

import { useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Join() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const url =
      "https://script.google.com/macros/s/AKfycbz1yXFCt7nFu-zpkEfLgMtQjXEMgN_aV_GXVbQ3-guQxRwmhAE/exec";

    const form = event.currentTarget;

    if (event.currentTarget.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      event.preventDefault();
      setValidated(true);

      const formData = new FormData(form);
      const inputs = form.querySelectorAll("input");
      inputs.forEach((input) => (input.disabled = true));

      const postJoinRequest = async () => {
        const result = await axios
          .post(url, formData)
          .then((response) => {
            alert("Your netID was recorded. Thanks!");
          })
          .catch((error) => {
            alert("Error: " + error.message);
          })
          .finally(() => {
            inputs.forEach((input) => (input.disabled = false));
            setValidated(false);
          });
      };

      postJoinRequest();
    }
  };

  return (
    <Layout>
      <div className="content">
        <Container fluid className="section">
          <SectionHead title="Join WECE_" top={true} />
          <SectionBody>
            <p>
              Sign up here to get weekly newsletters with general meetings,
              upcoming events, and more.
            </p>
            <Form
              name="join-form"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <Form.Group controlId="formNetId">
                <Form.Label>NetId</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="netID"
                  placeholder="Enter NetId"
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your NetID.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formCommitteeInput">
                <Form.Label>
                  Check the committees you are interested in:
                </Form.Label>
                <Form.Check
                  type="checkbox"
                  name="academic"
                  value="academic"
                  label="Academic"
                />
                <Form.Check
                  type="checkbox"
                  name="infrastructure"
                  value="infrastructure"
                  label="Infrastructure"
                />
                <Form.Check
                  type="checkbox"
                  name="mentorship"
                  value="mentorship"
                  label="Mentorship"
                />
                <Form.Check
                  type="checkbox"
                  name="outreach"
                  value="outreach"
                  label="Outreach"
                />
                <Form.Check
                  type="checkbox"
                  name="marketing"
                  value="marketing"
                  label="Marketing"
                />
                <Form.Check
                  type="checkbox"
                  name="social"
                  value="social"
                  label="Social"
                />
                <Form.Check
                  type="checkbox"
                  name="technical"
                  value="technical"
                  label="Technical"
                />
              </Form.Group>
              <Button id={styles["submit-form"]} type="submit">
                Submit
              </Button>
            </Form>
          </SectionBody>
        </Container>
      </div>
    </Layout>
  );
}
