import Layout from "../components/layout";
import SectionBody from "../components/sectionbody";
import SectionHead from "../components/sectionhead";
import styles from "../styles/Forms.module.css";
import resetStyles from "../styles/Resetpassword.module.css";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { base_url } from "../constants.js";

const ResetPassword = () => {
  const [validated, setValidated] = useState(false);
  const [resetValidated, setResetValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [codeValues, setCodeValue] = useState({
    code1: "",
    code2: "",
    code3: "",
    code4: "",
    code5: "",
  });
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [modalSuccess, setModalSuccess] = useState(false);
  const [modalError, setModalError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const toggleSuccess = () => setModalSuccess(!modalSuccess);
  const toggleError = () => setModalError(!modalError);

  const router = useRouter();

  const redirect = () => {
    router.push("/login");
  };

  useEffect(() => {
    const codeForm = document.getElementById("code-form");
    const resetForm = document.getElementById("reset-form");

    codeForm.style.display = "block";
    resetForm.style.display = "none";
  }, []);

  const handleChange = (e) => {
    const { maxLength, value, name } = e.target;
    // const [fieldName, fieldIndex] = name.split("-");
    const [fieldIndex] = name.split("-");

    // Check if they hit the max character length
    if (value.length >= maxLength) {
      // Check if it's not the last input field
      if (parseInt(fieldIndex, 10) < 5) {
        // Get the next input field
        const nextSibling = document.querySelector(
          `input[name=code-${parseInt(fieldIndex, 10) + 1}]`
        );

        // If found, focus the next field
        if (nextSibling !== null) {
          nextSibling.focus();
        }
      }

      setCodeValue({ ...codeValues, [`code${fieldIndex}`]: value });
    }
  };

  const showResetPassword = () => {
    const codeForm = document.getElementById("code-form");
    const resetForm = document.getElementById("reset-form");

    codeForm.style.display = "none";
    resetForm.style.display = "block";
  };

  const handleSubmit = (event) => {
    const url = base_url + "/passwordreset/check";

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

      const code =
        codeValues["code1"] +
        codeValues["code2"] +
        codeValues["code3"] +
        codeValues["code4"] +
        codeValues["code5"];

      const postCheckCodeRequest = async () => {
        await axios
          .post(url, {
            email: email,
            code: code,
          })
          .then(() => {
            showResetPassword();
          })
          .catch((error) => {
            if (Object.keys(error.response.data).length > 0) {
              setErrorMessage(error.response.data);
            }
            toggleError();
          })
          .finally(() => {
            inputs.forEach((input) => (input.disabled = false));
            setValidated(false);
          });
      };

      postCheckCodeRequest();
    }
  };

  const handleResetSubmit = (event) => {
    const url = base_url + "/passwordreset/reset";

    const form = event.currentTarget;

    if (event.currentTarget.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setResetValidated(true);
    } else {
      event.preventDefault();
      setResetValidated(true);

      const inputs = form.querySelectorAll("input");
      inputs.forEach((input) => (input.disabled = true));

      const sendPasswordResetRequest = async () => {
        await axios
          .put(url, {
            email: email,
            password: password,
          })
          .then(() => {
            redirect();
          })
          .catch((error) => {
            if (Object.keys(error.response.data).length > 0) {
              setErrorMessage(error.response.data);
            }
            toggleError();
          })
          .finally(() => {
            inputs.forEach((input) => (input.disabled = false));
            setResetValidated(false);
          });
      };

      sendPasswordResetRequest();
    }
  };

  return (
    <Layout>
      <div className="content">
        <Container className="section">
          <SectionHead title="Reset Password_" top={true} />
          <SectionBody>
            <Form
              id="code-form"
              name="code-form"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <Form.Text className={resetStyles["help-text"]}>
                Enter your password reset code sent by email.
              </Form.Text>
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
              <Form.Label>Reset code</Form.Label>
              <Form.Row className={resetStyles["reset-code"]}>
                <Form.Group>
                  <Form.Control
                    required
                    type="text"
                    name="code-1"
                    maxLength="1"
                    htmlSize="1"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    required
                    type="text"
                    name="code-2"
                    maxLength="1"
                    htmlSize="1"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    required
                    type="text"
                    name="code-3"
                    maxLength="1"
                    htmlSize="1"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    required
                    type="text"
                    name="code-4"
                    maxLength="1"
                    htmlSize="1"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    required
                    type="text"
                    name="code-5"
                    maxLength="1"
                    htmlSize="1"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Form.Row>
              <Button className={styles["submit-form"]} type="submit">
                Submit
              </Button>
            </Form>
            <Form
              id="reset-form"
              name="reset-form"
              noValidate
              validated={resetValidated}
              onSubmit={handleResetSubmit}
            >
              <Form.Text className={resetStyles["help-text"]}>
                Enter your new password.
              </Form.Text>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
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
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
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
              <Button className={styles["submit-form"]} type="submit">
                Submit
              </Button>
            </Form>
            <Modal
              show={modalSuccess}
              onHide={toggleSuccess}
              onExited={redirect}
            >
              <Modal.Header closeButton>Success</Modal.Header>
              <Modal.Body>You have reset your password.</Modal.Body>
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
};

export default ResetPassword;
