import Layout from "../components/layout";
import SectionBody from "../components/sectionbody";
import SectionHead from "../components/sectionhead";
import styles from "../styles/Forms.module.css";
import loginStyles from "../styles/Login.module.css";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { base_url } from "../constants.js";

import { refreshAuth } from "../apihelper.js";

const Login = () => {
  const [validated, setValidated] = useState(false);
  const [forgotValidated, setForgotValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalLogin, setModalLogin] = useState(false);
  const [modalError, setModalError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const toggleLogin = () => setModalLogin(!modalLogin);
  const toggleError = () => setModalError(!modalError);

  const router = useRouter();

  const redirect = () => {
    router.push("/account");
  };

  useEffect(() => {
    const loginForm = document.getElementById("login-form");
    const forgotForm = document.getElementById("forgot-form");

    loginForm.style.display = "block";
    forgotForm.style.display = "none";
  }, []);

  const handleSubmit = (event) => {
    const url = base_url + "/login";

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

      const postLoginRequest = async () => {
        await axios
          .post(
            url,
            {
              email: email,
              password: password,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
              withCredentials: true,
            }
          )
          .then((response) => {
            toggleLogin();
            refreshAuth();
          })
          .catch((error) => {
            setErrorMessage(error.response.data);
            toggleError();
          })
          .finally(() => {
            inputs.forEach((input) => (input.disabled = false));
            setValidated(false);
          });
      };

      postLoginRequest();
    }
  };

  const showForgotPassword = () => {
    const loginForm = document.getElementById("login-form");
    const forgotForm = document.getElementById("forgot-form");

    loginForm.style.display = "none";
    forgotForm.style.display = "block";
  };

  const handleForgotSubmit = (event) => {
    const url = base_url + "/sendpasswordreset";

    const form = event.currentTarget;

    if (event.currentTarget.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setForgotValidated(true);
    } else {
      event.preventDefault();
      setForgotValidated(true);

      const inputs = form.querySelectorAll("input");
      inputs.forEach((input) => (input.disabled = true));

      const sendEmailRequest = async () => {
        await axios
          .post(
            url,
            {
              email: email,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
              withCredentials: true,
            }
          )
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            inputs.forEach((input) => (input.disabled = false));
            setForgotValidated(false);
          });
      };

      sendEmailRequest();
    }
  };

  return (
    <Layout>
      <div className="content">
        <Container className="section">
          <SectionHead title="Login_" top={true} />
          <SectionBody>
            <Form
              id="login-form"
              name="login-form"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <Form.Text className={loginStyles["help-text"]}>
                Login to your WECE account.
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
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Form.Text
                  className={loginStyles["forgot-password-text"]}
                  onClick={showForgotPassword}
                >
                  Forgot password?
                </Form.Text>
                <Form.Control.Feedback type="invalid">
                  Please enter your password.
                </Form.Control.Feedback>
              </Form.Group>
              <Button id={styles["submit-form"]} type="submit">
                Submit
              </Button>
            </Form>
            <Form
              id="forgot-form"
              name="forgot-form"
              noValidate
              validated={forgotValidated}
              onSubmit={handleForgotSubmit}
            >
              <Form.Group>
                <Form.Text className={loginStyles["help-text"]}>
                  Enter your email to receive a code to reset your password.
                </Form.Text>
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
              <Button id={styles["submit-form"]} type="submit">
                Submit
              </Button>
            </Form>
            <Modal show={modalLogin} onHide={toggleLogin} onExited={redirect}>
              <Modal.Header closeButton>Successfully logged in</Modal.Header>
              <Modal.Body>You have logged in.</Modal.Body>
            </Modal>
            <Modal show={modalError} onHide={toggleError}>
              <Modal.Header closeButton>Error logging in</Modal.Header>
              <Modal.Body>{errorMessage}</Modal.Body>
            </Modal>
          </SectionBody>
        </Container>
      </div>
    </Layout>
  );
};

export default Login;
