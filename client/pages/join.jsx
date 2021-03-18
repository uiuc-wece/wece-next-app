import Layout from "../components/layout";
import SectionBody from "../components/sectionbody";
import SectionHead from "../components/sectionhead";
import styles from "../styles/Forms.module.css";

import { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { base_url } from "../constants.js";

export default function Join() {
  const [validated, setValidated] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [modalSubscribed, setModalSubscribed] = useState(false);
  const [modalError, setModalError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const toggleSubscribed = () => setModalSubscribed(!modalSubscribed);
  const toggleError = () => setModalError(!modalError);

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
          .post(url, {
            firstName: firstName,
            lastName: lastName,
            email: email,
          })
          .then((response) => {
            toggleSubscribed();
          })
          .catch((error) => {
            setErrorMessage(error.message);
            toggleError();
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
              <Form.Group>
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
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="first name"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your first name.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="last name"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your last name.
                </Form.Control.Feedback>
              </Form.Group>
              {/* <Form.Group controlId="formCommitteeInput">
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
                  name="marketing"
                  value="marketing"
                  label="Marketing"
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
              </Form.Group> */}
              <Button id={styles["submit-form"]} type="submit">
                Submit
              </Button>
            </Form>
            <Modal show={modalSubscribed} onHide={toggleSubscribed}>
              <Modal.Header closeButton>Successfully subscribed</Modal.Header>
              <Modal.Body>
                Thank you for subscribing to the WECE newsletter!
              </Modal.Body>
            </Modal>
            <Modal show={modalError} onHide={toggleError}>
              <Modal.Header closeButton>Error subscribing</Modal.Header>
              <Modal.Body>{errorMessage}</Modal.Body>
            </Modal>
          </SectionBody>
        </Container>
      </div>
    </Layout>
  );
}
