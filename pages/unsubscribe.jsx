import Layout from "../components/layout";
import SectionBody from "../components/sectionbody";
import SectionHead from "../components/sectionhead";
import styles from "../styles/Forms.module.css";

import { useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Unsubscribe() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const url =
      "https://script.google.com/macros/s/AKfycbwyS4Us0lkzSDiFNLrikWOyYTSrAqYvqXhWRfw20l4fR6HtkGg/exec";

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
            alert("You have successfully unsubscribed.");
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
        <Container className="section">
          <SectionHead title="Unsubscribe_" top={true} />
          <SectionBody>
            <p>Enter your netID to unsubscribe from the WECE mailing list.</p>
            <Form
              name="unsubscribe-form"
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
