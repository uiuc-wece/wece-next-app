import AccountWidget from "../accountwidget";
import styles from "../../styles/Updateaccount.module.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";

import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import { base_url } from "../../constants.js";

import { refreshAuth } from "../../apihelper.js";

const UpdateAccountWidget = () => {
  const [validated, setValidated] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [major, setMajor] = useState("");
  const [graduationDate, setGraduationDate] = useState("");
  const [studentStatus, setStudentStatus] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [modalSuccess, setModalSuccess] = useState(false);
  const [modalError, setModalError] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const existEmail = useSelector((state) => state.email);
  const existFirstName = useSelector((state) => state.firstName);
  const existLastName = useSelector((state) => state.lastName);
  const existMajor = useSelector((state) => state.major);
  let existGraduationDate = useSelector((state) => state.graduationDate);
  const existStudentStatus = useSelector((state) => state.studentStatus);

  useEffect(() => {
    if (existGraduationDate) {
      existGraduationDate = new Date(existGraduationDate);
      const dateString =
        existGraduationDate.getFullYear() +
        "-" +
        (existGraduationDate.getMonth() + 1 < 10
          ? "0" + (existGraduationDate.getMonth() + 1)
          : existGraduationDate.getMonth() + 1);
      setGraduationDate(dateString);
    }
  }, [existGraduationDate]);

  const toggleSuccess = () => setModalSuccess(!modalSuccess);
  const toggleError = () => setModalError(!modalError);

  const reduceFormValues = (formElements) => {
    const arrElements = Array.prototype.slice.call(formElements);
    const formValues = arrElements
      .filter((elem) => elem.name.length > 0)
      .map((x) => {
        const { name, type, value } = x;
        return {
          name,
          type,
          value,
          valid: x.checkValidity(),
        };
      });
    return formValues;
  };
  const checkAllFieldsValid = (formValues) => {
    return !Object.keys(formValues)
      .map((x) => formValues[x])
      .some((field) => !field.valid);
  };

  const handleSubmit = (event) => {
    const subscribeUrl = base_url + "/subscriber";
    const updateUrl = base_url + "/user";

    const form = event.currentTarget;
    const formValues = reduceFormValues(form.elements);
    const allFieldsValid = checkAllFieldsValid(formValues);

    if (!allFieldsValid) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      event.preventDefault();
      setValidated(true);

      const inputs = form.querySelectorAll("input");
      inputs.forEach((input) => (input.disabled = true));

      let requests = [];

      if (email != "") {
        // email is changed so resubscribe to newsletter
        const subscribeRequest = axios.post(subscribeUrl, {
          firstName: firstName != "" ? firstName : existFirstName,
          lastName: lastName != "" ? lastName : existLastName,
          email: email,
        });
        requests.push(subscribeRequest);

        // unsubscribe old email
        const unsubscribeRequest = axios.put(subscribeUrl, {
          email: existEmail,
        });
        requests.push(unsubscribeRequest);
      }

      let formattedGraduationDate = new Date();
      formattedGraduationDate =
        graduationDate +
        "-01T" +
        formattedGraduationDate.toTimeString().slice(0, 8);

      const newProfile = {
        firstName: firstName != "" ? firstName : null,
        lastName: lastName != "" ? lastName : null,
        email: email != "" ? email : null,
        password: password != "" ? password : null,
        major: major != "" ? major : null,
        graduationDate:
          graduationDate != "" ? new Date(formattedGraduationDate) : null,
        studentStatus: studentStatus != "" ? studentStatus : null,
      };

      const updateProfileRequest = axios.put(updateUrl, newProfile, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      requests.push(updateProfileRequest);

      Promise.all(requests)
        .then((res) => {
          setSuccessMessage("You have successfully updated your account.");
          refreshAuth();
          toggleSuccess();
        })
        .catch((errors) => {
          setErrorMessage(errors.response.data);
          toggleError();
        })
        .finally(() => {
          inputs.forEach((input) => (input.disabled = false));
          setValidated(false);
        });
    }
  };

  return (
    <AccountWidget>
      <div className={styles["title"]}>Update Account Information</div>
      <hr className={styles["form-divider"]} />
      <Form
        name="join-form"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Form.Group>
          <Form.Label className={styles["form-label"]}>Email</Form.Label>
          <div className={styles["form-input"]}>
            <Form.Control
              type="email"
              name="email"
              placeholder={existEmail}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isValid={email && email.indexOf("@") != -1}
              isInvalid={email && email.indexOf("@") == -1}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a correct email.
            </Form.Control.Feedback>
          </div>
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col} md="6">
            <Form.Label className={styles["form-label"]}>First Name</Form.Label>
            <div className={styles["form-input"]}>
              <Form.Control
                type="text"
                name="first name"
                placeholder={existFirstName}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                isInvalid={!firstName && !existFirstName}
              />
            </div>
          </Form.Group>
          <Form.Group as={Col} md="6">
            <Form.Label className={styles["form-label"]}>Last Name</Form.Label>
            <div className={styles["form-input"]}>
              <Form.Control
                type="text"
                name="last name"
                placeholder={existLastName}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                isInvalid={!lastName && !existLastName}
              />
            </div>
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Label className={styles["form-label"]}>Major</Form.Label>
          <div className={styles["form-input"]}>
            <Form.Control
              type="text"
              name="major"
              placeholder={existMajor}
              value={major}
              onChange={(e) => setMajor(e.target.value)}
            />
          </div>
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col} md="6">
            <Form.Label className={styles["form-label"]}>
              Student Status
            </Form.Label>
            <div className={styles["form-input"]}>
              <Form.Control
                as="select"
                name="student status"
                defaultValue={existStudentStatus}
                onChange={(e) => setStudentStatus(e.target.value)}
              >
                <option>NONE</option>
                <option>UNDERGRADUATE</option>
                <option>GRADUATE</option>
                <option>ALUMNI</option>
              </Form.Control>
            </div>
          </Form.Group>
          <Form.Group as={Col} md="6">
            <Form.Label className={styles["form-label"]}>
              Graduation Date
            </Form.Label>
            <div className={styles["form-input"]}>
              <Form.Control
                type="month"
                name="month"
                value={graduationDate}
                onChange={(e) => setGraduationDate(e.target.value)}
              />
            </div>
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Label className={styles["form-label"]}>
            Change Password
          </Form.Label>
          <div className={styles["form-input"]}>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </Form.Group>
        <Form.Group>
          <div className={styles["form-input"]}>
            <Form.Control
              type="password"
              name="confirm password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              pattern={"^" + password + "$"}
              isInvalid={password && confirmPassword !== password}
            />
            <Form.Control.Feedback type="invalid">
              Passwords do not match.
            </Form.Control.Feedback>
          </div>
        </Form.Group>
        <Button className={styles["submit-button"]} type="submit">
          Update
        </Button>
      </Form>
      <Modal show={modalSuccess} onHide={toggleSuccess}>
        <Modal.Header closeButton>Success</Modal.Header>
        <Modal.Body>{successMessage}</Modal.Body>
      </Modal>
      <Modal show={modalError} onHide={toggleError}>
        <Modal.Header closeButton>Error</Modal.Header>
        <Modal.Body>{errorMessage}</Modal.Body>
      </Modal>
    </AccountWidget>
  );
};

export default UpdateAccountWidget;
