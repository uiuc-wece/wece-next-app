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
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [major, setMajor] = useState(""); // New state for major
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
        password: password,
        major: major, // Include major in the request
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
              {/* ... (previous form groups) */}
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
              {/* ... (remaining form groups and submit button) */}
            </Form>
            {/* ... (modals for success and error) */}
          </SectionBody>
        </Container>
      </div>
    </Layout>
  );
}