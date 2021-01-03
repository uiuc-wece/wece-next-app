import AccountWidget from "../accountwidget";
import styles from "../../styles/Profilewidget.module.css";

import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BiCamera } from "react-icons/bi";

import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import { base_url } from "../../constants.js";

import { refreshAuth } from "../../apihelper.js";

const ProfileWidget = () => {
  const profileImageRef = useRef();
  const [modal, setModal] = useState(false);
  const {
    email,
    firstName,
    lastName,
    accountType,
    studentStatus,
    major,
    graduationDate,
    profileImage,
    totalPoints,
  } = useSelector((state) => state);

  const toggle = () => setModal(!modal);

  const handleSubmit = (event) => {
    const updateUrl = base_url + "/user";
    if (profileImageRef.current.files[0]) {
      const formData = new FormData();
      formData.append("profileImage", profileImageRef.current.files[0]);
      axios
        .put(updateUrl, formData, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })
        .then(() => {
          refreshAuth();
        })
        .catch((err) => {
          console.log(err.response.data);
        })
        .finally(() => {
          toggle();
        });
    }
  };

  const education = () => {
    if (studentStatus != "NONE" && studentStatus && major) {
      return (
        <div className={styles["education"]}>
          <div className={styles["student-status"]}>{studentStatus}</div>
          <div className={styles["education-divider"]}>|</div>{" "}
          <div className={styles["major"]}>{major}</div>
        </div>
      );
    } else if (!major) {
      return (
        <div className={styles["education"]}>
          <div className={styles["student-status"]}>{studentStatus}</div>
        </div>
      );
    } else {
      return (
        <div className={styles["education"]}>
          <div className={styles["major"]}>{major}</div>
        </div>
      );
    }
  };

  let jsGradDate = new Date(graduationDate);
  const monthNames = [
    "Jan.",
    "Feb.",
    "Mar.",
    "Apr.",
    "May",
    "Jun.",
    "Jul.",
    "Aug.",
    "Sept.",
    "Oct.",
    "Nov.",
    "Dec.",
  ];
  const formattedGraduationDate =
    monthNames[jsGradDate.getMonth()] + " " + jsGradDate.getFullYear();

  return (
    <AccountWidget>
      <div className={styles["profile-info"]}>
        <div className={styles["profile-left"]}>
          <div className={styles["profile-image"]} onClick={toggle}>
            <div className={styles["camera"]}>
              <BiCamera />
            </div>
            <Image src={profileImage} roundedCircle />
          </div>
          <div className={styles["name"]}>{`${firstName} ${lastName}`}</div>
          <div className={styles["email"]}>{email}</div>
          <div className={styles["account-type"]}>{accountType}</div>
        </div>
        <div className={styles["profile-right"]}>
          {education()}
          {graduationDate ? (
            <div className={styles["graduation"]}>
              Graduation{" "}
              <div className={styles["graduation-date"]}>
                {formattedGraduationDate}
              </div>
            </div>
          ) : (
            ""
          )}
          <hr className={styles["right-division"]} />
          <div className={styles["points"]}>
            <span className={styles["points-number"]}>{totalPoints}</span>{" "}
            points
          </div>
        </div>
      </div>
      <Modal show={modal} onHide={toggle}>
        <Modal.Header className={styles["image-modal-header"]} closeButton>
          Upload new profile picture
        </Modal.Header>
        <Modal.Body className={styles["image-modal"]}>
          <Form name="picture-form">
            <Form.Group>
              <Form.Control
                className={styles["modal-input"]}
                type="file"
                name="image"
                ref={profileImageRef}
              />
              <Button
                id={styles["submit-form"]}
                type="button"
                onClick={handleSubmit}
              >
                Upload
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </AccountWidget>
  );
};

export default ProfileWidget;
