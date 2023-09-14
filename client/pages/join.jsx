import React, { useState } from "react";
import Layout from "../components/layout";
import SectionBody from "../components/sectionbody";
import SectionHead from "../components/sectionhead";
import styles from "../styles/Forms.module.css";
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
  const [major, setMajor] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [modalSubscribed, setModalSubscribed] = useState(false);
  const [modalError, setModalError] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const toggleSubscribed = () => setModalSubscribed(!modalSubscribed);
  const toggleError = () => setModalError(!modalError);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    
    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }

    try {
      const subscribeUrl = base_url + "/subscriber";
      const registerUrl = base_url + "/register";

      const requestData = {
        firstName,
        lastName,
        major,
        email,
        password,
        accountType: "MEMBER",
      };

      const [subscribeResponse, registerResponse] = await Promise.all([
        axios.post(subscribeUrl, requestData),
        axios.post(registerUrl, requestData),
      ]);

      if (subscribeResponse.status === 200 && registerResponse.status === 200) {
        setSuccessMessage("You have successfully created a WECE account and subscribed to the WECE newsletter!");
        toggleSubscribed();
      } else {
        setErrorMessage("An error occurred during registration.");
        toggleError();
      }
    } catch (error) {
      setErrorMessage("An error occurred during registration.");
      toggleError();
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
              Sign up here to create an account, get weekly newsletters with
              <br />
              general meetings, upcoming events, and more.
            </p>
            <Form
              name="join-form"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              {/* Add your form fields here */}
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Form.Group>
              {/* Add other form fields like Last Name, Email, Major, Password, and Confirm Password */}
              {/* ... */}
              <Button
                className={styles["submit-form"]}
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </SectionBody>
        </Container>
      </div>
      {/* Modals for success and error messages */}
      <Modal show={modalSubscribed} onHide={toggleSubscribed}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>{successMessage}</Modal.Body>
      </Modal>

      <Modal show={modalError} onHide={toggleError}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>{errorMessage}</Modal.Body>
      </Modal>
    </Layout>
  );
}