import Layout from "../components/layout";
import SectionBody from "../components/sectionbody";
import SectionHead from "../components/sectionhead";
import styles from "../styles/Forms.module.css";

import { useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { base_url } from "../constants.js";

export default function Unsubscribe() {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    const url = base_url + "/subscriber";

    const form = event.currentTarget;

    if (event.currentTarget.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      event.preventDefault();
      setValidated(true);

      const inputs = form.querySelectorAll("input");
      inputs.forEach((input) => (input.disabled = true));

      const postJoinRequest = async () => {
        await axios
          .put(url, { email: email })
          .then((response) => {
            alert("You have successfully unsubscribed.");
            console.log(response);
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
            <p>Enter your email to unsubscribe from the WECE mailing list.</p>
            <Form
              name="unsubscribe-form"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <Form.Group controlId="formNetId">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your email.
                </Form.Control.Feedback>
              </Form.Group>
              <Button className={styles["submit-form"]} type="submit">
                Submit
              </Button>
            </Form>
          </SectionBody>
        </Container>
      </div>
    </Layout>
  );
}
