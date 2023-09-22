import React from "react";
import Layout from "../components/layout";
import SectionBody from "../components/sectionbody";
import SectionHead from "../components/sectionhead";
import styles from "../styles/Forms.module.css";

import { useState } from "react";
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
  const [major, setMajor] = useState(""); // New state for major
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [modalSubscribed, setModalSubscribed] = useState(false);
  const [modalError, setModalError] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const toggleSubscribed = () => setModalSubscribed(!modalSubscribed);
  const toggleError = () => setModalError(!modalError);

  const handleSubmit = (event) => {
    const subscribeUrl = base_url + "/subscriber";
    const registerUrl = base_url + "/register";

    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      event.preventDefault();
      setValidated(true);

      const inputs = form.querySelectorAll("input");
      inputs.forEach((input) => (input.disabled = true));

      const subscribeRequest = axios.post(subscribeUrl, {
        firstName: firstName,
        lastName: lastName,
        email: email,
      });
      const registerRequest = axios.post(registerUrl, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        major: major, // Include major in the request
        password: password,
        accountType: "MEMBER",
      });

      Promise.all([subscribeRequest, registerRequest])
        .then(() => {
          setSuccessMessage(
            "You have successfully created a WECE account and subscribed to the WECE newsletter!"
          );
          toggleSubscribed();
        })
        .catch((errors) => {
          if (Object.keys(errors.response.data).length > 0) {
            setErrorMessage(errors.response.data);
          }
          toggleError();
        })
        .finally(() => {
          inputs.forEach((input) => (input.disabled = false));
          setValidated(false);
        });
    }
  };

  return (
    <Layout>
      <br />
      <div className="content">
        <Container className="section">
          <SectionHead title="Join WECE_" top={true} />
          <SectionBody>
            <p>
              Sign up here to create an account, get weekly newsletters with <br />
              general meetings, upcoming events, and more.
            </p>
            <Form
              name="join-form"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <Form.Group>
                <Form.Label
                  style={{
                    fontFamily: "Chivo, sans-serif",
                  }}
                >
                  Email
                </Form.Label>
                <Form.Control
                  style={{
                    fontFamily: "Chivo, sans-serif",
                  }}
                  required
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  isValid={email && email.indexOf("@") !== -1}
                  isInvalid={email && email.indexOf("@") === -1}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid email address.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label
                  style={{
                    fontFamily: "Chivo, sans-serif",
                  }}
                >
                  First Name
                </Form.Label>
                <Form.Control
                  style={{
                    fontFamily: "Chivo, sans-serif",
                  }}
                  required
                  type="text"
                  name="first name"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  isValid={firstName}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your first name.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label
                  style={{
                    fontFamily: "Chivo, sans-serif",
                  }}
                >
                  Last Name
                </Form.Label>
                <Form.Control
                  style={{
                    fontFamily: "Chivo, sans-serif",
                  }}
                  required
                  type="text"
                  name="last name"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  isValid={lastName}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your last name.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label
                  style={{
                    fontFamily: "Chivo, sans-serif",
                  }}
                >
                  Major
                </Form.Label>
                <Form.Control
                  style={{
                    fontFamily: "Chivo, sans-serif",
                  }}
                  required
                  type="text"
                  name="major"
                  placeholder="Enter Major"
                  value={major}
                  onChange={(e) => setMajor(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your major.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label
                  style={{
                    fontFamily: "Chivo, sans-serif",
                  }}
                >
                  Password
                </Form.Label>
                <Form.Control
                  style={{
                    fontFamily: "Chivo, sans-serif",
                  }}
                  required
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  isValid={password}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your password.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label
                  style={{
                    fontFamily: "Chivo, sans-serif",
                  }}
                >
                  Confirm Password
                </Form.Label>
                <Form.Control
                  style={{
                    fontFamily: "Chivo, sans-serif",
                  }}
                  required
                  type="password"
                  name="confirm password"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  pattern={"^" + password + "$"}
                  isValid={confirmPassword && password === confirmPassword}
                  isInvalid={confirmPassword && password !== confirmPassword}
                />
                <Form.Control.Feedback type="invalid">
                  Passwords do not match.
                </Form.Control.Feedback>
              </Form.Group>
              <br />
              <div>
                <Button
                  className={styles["submit-form"]}
                  type="submit"
                  style={{
                    fontFamily: "Chivo, sans-serif",
                    border: "none",
                  }}
                >
                  Add me to the WECE newsletter and create my WECE account!
                </Button>
              </div>
            </Form>
            <Modal show={modalSubscribed} onHide={toggleSubscribed}>
              <Modal.Header closeButton>Success</Modal.Header>
              <Modal.Body>{successMessage}</Modal.Body>
            </Modal>
            <Modal show={modalError} onHide={toggleError}>
              <Modal.Header closeButton>Error</Modal.Header>
              <Modal.Body>{errorMessage}</Modal.Body>
            </Modal>
          </SectionBody>
        </Container>
      </div>
    </Layout>
  );
}