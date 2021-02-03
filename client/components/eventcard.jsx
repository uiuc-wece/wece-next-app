import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import styles from "../styles/Eventcard.module.css";
import formStyles from "../styles/Forms.module.css";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import MultiSelect from "react-multi-select-component";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { CgPassword } from "react-icons/cg";
import { MdClose, MdEdit, MdMoreHoriz } from "react-icons/md";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";

import { base_url } from "../constants.js";
import { refreshAuth } from "../apihelper.js";

export default function EventCard({
  id,
  title,
  startDate,
  endDate,
  recurring,
  description,
  location,
  webConferenceLink,
  actionLink,
  token,
  hosts,
  committees,
  attendees,
  points,
  eventImage,
  users,
  onUpdate,
  viewMode,
  isSaved,
}) {
  const userId = useSelector((state) => state._id);
  const accountType = useSelector((state) => state.accountType);
  const [validated, setValidated] = useState(false);
  const [tokenValidated, setTokenValidated] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalMore, setModalMore] = useState(false);
  const [modalToken, setModalToken] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newStartDate, setNewStartDate] = useState(startDate);
  const [newEndDate, setNewEndDate] = useState(endDate);
  const [newRecurring, setNewRecurring] = useState(recurring);
  const [newDescription, setNewDescription] = useState(description);
  const [newLocation, setNewLocation] = useState(location);
  const [newWebConferenceLink, setNewWebConferenceLink] = useState(
    webConferenceLink
  );
  const [newActionLink, setNewActionLink] = useState(actionLink);
  const [newHosts, setNewHosts] = useState(hosts);
  const [newCommittees, setNewCommittees] = useState(committees);
  const [newPoints, setNewPoints] = useState(points);
  const eventImageRef = useRef();
  const [month, setMonth] = useState("");
  const [day, setDay] = useState();
  const [startTime, setStartTime] = useState("");
  const [heartHover, setHeartHover] = useState(false);
  const [codeValues, setCodeValue] = useState({
    code1: "",
    code2: "",
    code3: "",
    code4: "",
  });

  const getMonth = (date) => {
    const monthNames = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];
    return monthNames[date.getMonth()];
  };

  const getDay = (date) => {
    return date.getDate();
  };

  const getTime = (date) => {
    let hours =
      date.getHours() > 12
        ? date.getHours() - 12
        : date.getHours() === 0
        ? "12"
        : date.getHours();
    let minutes =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    let startTime = hours + ":" + minutes;
    startTime +=
      date.getHours() >= 12 ? (date.getHours() === 0 ? " AM" : " PM") : " AM";
    return startTime;
  };

  useEffect(() => {
    let jsStartDate = new Date(startDate);
    setMonth(getMonth(jsStartDate));
    setDay(getDay(jsStartDate));
    setStartTime(getTime(jsStartDate));
  }, [startDate]);

  const tokenExpiration = () => {
    let createdDate = new Date(token.created);
    const now = Date.now();
    const diffTime = Math.abs(now - createdDate);
    if (diffTime / (1000 * 60) > 60) {
      return null;
    }
    createdDate.setHours(createdDate.getHours() + 1);
    return getTime(createdDate);
  };

  const tokenPopover = (
    <Popover>
      <Popover.Title as="p">Create token</Popover.Title>
      <Popover.Content>
        Token is valid for event sign-in for 1 hour.
      </Popover.Content>
    </Popover>
  );

  const validTokenPopover = (expiration) => {
    return (
      <Popover>
        <Popover.Title as="p">Token</Popover.Title>
        <Popover.Content>
          {"Token is "}
          <span className={styles["token"]}>{token.token}</span>
          {". "}
          {"Expires at " + expiration + "."}
        </Popover.Content>
      </Popover>
    );
  };

  const checkTokenPopover = (
    <Popover>
      <Popover.Title as="p">Enter token</Popover.Title>
      <Popover.Content>
        Enter 4-digit token to get event points.
      </Popover.Content>
    </Popover>
  );

  const editPopover = (
    <Popover>
      <Popover.Title as="p">Edit Event</Popover.Title>
      <Popover.Content>Edit event details.</Popover.Content>
    </Popover>
  );

  const deletePopover = (
    <Popover>
      <Popover.Title as="p">Delete Event</Popover.Title>
      <Popover.Content>Delete the event.</Popover.Content>
    </Popover>
  );

  const morePopover = (
    <Popover>
      <Popover.Title as="p">More details</Popover.Title>
      <Popover.Content>See event details.</Popover.Content>
    </Popover>
  );

  const committeeOptions = [
    { label: "Academic", value: "academic" },
    { label: "Infrastructure", value: "infrastructure" },
    { label: "Marketing", value: "marketing" },
    { label: "Mentorship", value: "mentorship" },
    { label: "Outreach", value: "outreach" },
    { label: "Social", value: "social" },
    { label: "Technical", value: "technical" },
  ];

  const onClose = () => {
    setNewTitle(title);
    setNewStartDate(startDate);
    setNewEndDate(endDate);
    setNewRecurring(recurring);
    setNewDescription(description);
    setNewLocation(location);
    setNewWebConferenceLink(webConferenceLink);
    setNewActionLink(actionLink);
    setNewCommittees(committees);
    setNewHosts(hosts);
    setNewPoints(points);
    setModalEdit(!modalEdit);
  };

  const onShow = () => setModalEdit(!modalEdit);

  const toggleDelete = () => setModalDelete(!modalDelete);

  const toggleMore = () => setModalMore(!modalMore);

  const toggleToken = () => setModalToken(!modalToken);

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

  const handleSubmit = (e) => {
    const updateUrl = base_url + "/event/" + id;

    const form = e.currentTarget;
    const formValues = reduceFormValues(form.elements);
    const allFieldsValid = checkAllFieldsValid(formValues);

    if (!allFieldsValid) {
      e.preventDefault();
      e.stopPropagation();
      setValidated(true);
    } else {
      e.preventDefault();
      setValidated(true);

      const formData = new FormData();
      if (eventImageRef.current.files[0]) {
        formData.append("eventImage", eventImageRef.current.files[0]);
        axios
          .put(updateUrl, formData, {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          })
          .then(() => {})
          .catch((err) => {
            if (Object.keys(err.response.data).length > 0) {
              console.log(err.response.data);
            }
          })
          .finally(() => {
            inputs.forEach((input) => (input.disabled = false));
            setValidated(false);
            onUpdate();
          });
      }

      const newEvent = {
        title: newTitle,
        startDate: newStartDate ? newStartDate : "",
        endDate: newEndDate ? newEndDate : "",
        recurring: newRecurring,
        location: newLocation,
        webConferenceLink: newWebConferenceLink,
        actionLink: newActionLink,
        hosts: newHosts ? newHosts : [],
        committees: newCommittees ? newCommittees : [],
        points: newPoints ? newPoints : 0,
      };

      axios
        .put(updateUrl, newEvent, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })
        .then(() => {})
        .catch((err) => {
          if (Object.keys(err.response.data).length > 0) {
            console.log(err.response.data);
          }
        })
        .finally(() => {
          inputs.forEach((input) => (input.disabled = false));
          setValidated(false);
          onUpdate();
        });

      const inputs = form.querySelectorAll("input");
      inputs.forEach((input) => (input.disabled = true));
    }
  };

  const handleDelete = () => {
    const deleteUrl = base_url + "/event/" + id;
    axios
      .delete(deleteUrl, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then(() => {
        onUpdate();
      })
      .catch((err) => {
        if (Object.keys(err.response.data).length > 0) {
          console.log(err.response.data);
        }
      });
  };

  const handleToken = () => {
    const tokenUrl = base_url + "/event/" + id + "/token";
    axios
      .put(
        tokenUrl,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then(() => {
        onUpdate();
      })
      .catch((err) => {
        if (Object.keys(err.response.data).length > 0) {
          console.log(err.response.data);
        }
      });
  };

  const handleChange = (e) => {
    const { maxLength, value, name } = e.target;
    const [fieldName, fieldIndex] = name.split("-");

    // Check if they hit the max character length
    if (value.length >= maxLength) {
      // Check if it's not the last input field
      if (parseInt(fieldIndex, 10) < 4) {
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

  const handleCheckToken = (event) => {
    const checkTokenUrl = base_url + "/event/" + id + "/checktoken";

    const form = event.currentTarget;
    if (event.currentTarget.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setTokenValidated(true);
    } else {
      event.preventDefault();
      setTokenValidated(true);

      const inputs = form.querySelectorAll("input");
      inputs.forEach((input) => (input.disabled = true));

      const code =
        codeValues["code1"] +
        codeValues["code2"] +
        codeValues["code3"] +
        codeValues["code4"];

      const checkToken = async () =>
        await axios
          .put(
            checkTokenUrl,
            { code: code },
            {
              headers: {
                "Content-Type": "application/json",
              },
              withCredentials: true,
            }
          )
          .then(() => {
            refreshAuth();
          })
          .catch((err) => {
            if (Object.keys(err.response.data).length > 0) {
              console.log(err.response.data);
            }
          })
          .finally(() => toggleToken());
      checkToken();
    }
  };

  const saveEvent = () => {
    const saveUrl = base_url + "/user/" + userId + "/saveevent";
    axios
      .put(
        saveUrl,
        { eventId: id },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then(() => {
        refreshAuth();
        onUpdate();
      })
      .catch((err) => {
        if (Object.keys(err.response.data).length > 0) {
          console.log(err.response.data);
        }
      });
  };

  const unsaveEvent = () => {
    const unsaveUrl = base_url + "/user/" + userId + "/unsaveevent";
    axios
      .put(
        unsaveUrl,
        { eventId: id },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then(() => {
        refreshAuth();
        onUpdate();
      })
      .catch((err) => {
        if (Object.keys(err.response.data).length > 0) {
          console.log(err.response.data);
        }
      });
  };

  return (
    <div className={styles["event-card"]}>
      <div className={styles["event-card-body"]}>
        <div className={styles["top-buttons"]}>
          {!viewMode &&
          (accountType == "ADMIN" ||
            accountType == "BOARD" ||
            accountType == "CHAIR") ? (
            token && tokenExpiration() ? (
              <OverlayTrigger
                placement="bottom"
                overlay={validTokenPopover(tokenExpiration())}
              >
                <div
                  className={`${styles["token-button"]} ${styles["top-button"]}`}
                >
                  <CgPassword />
                </div>
              </OverlayTrigger>
            ) : (
              <OverlayTrigger placement="bottom" overlay={tokenPopover}>
                <div
                  className={`${styles["token-button"]} ${styles["top-button"]}`}
                >
                  <CgPassword onClick={handleToken} />
                </div>
              </OverlayTrigger>
            )
          ) : viewMode ? (
            <OverlayTrigger placement="bottom" overlay={checkTokenPopover}>
              <div
                className={`${styles["token-button"]} ${styles["top-button"]}`}
              >
                <CgPassword onClick={toggleToken} />
              </div>
            </OverlayTrigger>
          ) : (
            ""
          )}
          {!viewMode &&
          (accountType == "ADMIN" ||
            accountType == "BOARD" ||
            accountType == "CHAIR") ? (
            <OverlayTrigger placement="bottom" overlay={editPopover}>
              <div
                className={`${styles["edit-button"]} ${styles["top-button"]}`}
              >
                <MdEdit onClick={onShow} />
              </div>
            </OverlayTrigger>
          ) : (
            ""
          )}
          {!viewMode &&
          (accountType == "ADMIN" ||
            accountType == "BOARD" ||
            accountType == "CHAIR") ? (
            <OverlayTrigger placement="bottom" overlay={deletePopover}>
              <div
                className={`${styles["delete-button"]} ${styles["top-button"]}`}
              >
                <MdClose onClick={toggleDelete} />
              </div>
            </OverlayTrigger>
          ) : (
            ""
          )}
          <OverlayTrigger placement="bottom" overlay={morePopover}>
            <div className={`${styles["more-button"]} ${styles["top-button"]}`}>
              <MdMoreHoriz onClick={toggleMore} />
            </div>
          </OverlayTrigger>
        </div>
        <div className={styles["event-image"]}>
          <Image src={eventImage} />
        </div>
        <div className={styles["event-title"]}>
          <h2>{title}</h2>
        </div>
        <div className={styles["event-time"]}>starts at {startTime}</div>
      </div>
      <div className={styles["event-bottom"]}>
        <div className={styles["event-points"]}>
          <span className={styles["points-number"]}>{points}</span> points
        </div>
        <div className={styles["event-heart"]}>
          <div
            className={styles["heart-icon"]}
            onMouseEnter={() => setHeartHover(!heartHover)}
            onMouseLeave={() => setHeartHover(!heartHover)}
          >
            {isSaved ? (
              <IoMdHeart onClick={unsaveEvent} />
            ) : heartHover ? (
              <IoMdHeart onClick={saveEvent} />
            ) : (
              <IoMdHeartEmpty />
            )}
          </div>
        </div>
        <div className={styles["event-date"]}>
          <div className={styles["event-month"]}>{month}</div>
          <div className={styles["event-day"]}>{String(day)}</div>
        </div>
      </div>
      <Modal show={modalDelete} onHide={toggleDelete}>
        <Modal.Header>Delete Event</Modal.Header>
        <Modal.Body>
          <Button className={styles["cancel"]} onClick={toggleDelete}>
            Cancel
          </Button>
          <Button className={styles["delete"]} onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Body>
      </Modal>
      <Modal show={modalToken} onHide={toggleToken}>
        <Modal.Header closeButton>Enter Event Token</Modal.Header>
        <Modal.Body>
          <Form
            id="code-form"
            name="code-form"
            noValidate
            validated={tokenValidated}
            onSubmit={handleCheckToken}
          >
            <Form.Row className={styles["event-code"]}>
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
            </Form.Row>
            <Button className={styles["submit-form"]} type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <Modal show={modalMore} onHide={toggleMore}>
        <Modal.Header closeButton>{title}</Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={12} md={4} className={styles["more-key"]}>
              Start Date
            </Col>
            <Col xs={12} md={8} className={styles["more-value"]}>
              {startDate ? month + " " + day + " at " + startTime : "Not set"}
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4} className={styles["more-key"]}>
              End Date
            </Col>
            <Col xs={12} md={8} className={styles["more-value"]}>
              {endDate
                ? getMonth(new Date(endDate)) +
                  " " +
                  getDay(new Date(endDate)) +
                  " at " +
                  getTime(new Date(endDate))
                : "Not set"}
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4} className={styles["more-key"]}>
              Recurring
            </Col>
            <Col xs={12} md={8} className={styles["more-value"]}>
              {recurring ? "yes" : "no"}
            </Col>
          </Row>
          <hr />
          <Row>
            <Col xs={12} md={4} className={styles["more-key"]}>
              Description
            </Col>
            <Col xs={12} md={8} className={styles["more-value"]}>
              {description}
            </Col>
          </Row>
          <hr />
          <Row>
            <Col xs={12} md={4} className={styles["more-key"]}>
              Location
            </Col>
            <Col xs={12} md={8} className={styles["more-value"]}>
              {location}
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4} className={styles["more-key"]}>
              Online Link
            </Col>
            <Col xs={12} md={8} className={styles["more-value"]}>
              <a href={webConferenceLink} target="_blank">
                {webConferenceLink}
              </a>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4} className={styles["more-key"]}>
              Action Link
            </Col>
            <Col xs={12} md={8} className={styles["more-value"]}>
              <a href={actionLink} target="_blank">
                {actionLink}
              </a>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col xs={12} md={4} className={styles["more-key"]}>
              Points
            </Col>
            <Col xs={12} md={8} className={styles["more-value"]}>
              {points}
            </Col>
          </Row>
          <hr />
          <Row>
            <Col xs={12} md={4} className={styles["more-key"]}>
              Committees
            </Col>
            <Col xs={12} md={8} className={styles["more-value"]}>
              {committees.map((c) => c.label).join(", ")}
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4} className={styles["more-key"]}>
              Hosts
            </Col>
            <Col xs={12} md={8} className={styles["more-value"]}>
              {hosts.map((h) => h.label).join(", ")}
            </Col>
          </Row>
          {accountType == "ADMIN" ||
          accountType == "BOARD" ||
          accountType == "CHAIR" ? (
            <Row>
              <Col xs={12} md={4} className={styles["more-key"]}>
                Attendees
              </Col>
              <Col xs={12} md={8} className={styles["more-value"]}>
                {attendees ? attendees.join(", ") : ""}
              </Col>
            </Row>
          ) : (
            ""
          )}
          <hr />
          {accountType == "ADMIN" ||
          accountType == "BOARD" ||
          accountType == "CHAIR" ? (
            <Row>
              <Col xs={12} md={4} className={styles["more-key"]}>
                Event Token
              </Col>
              <Col xs={12} md={8} className={styles["more-value"]}>
                {token && tokenExpiration() ? token.token : ""}
              </Col>
            </Row>
          ) : (
            ""
          )}
        </Modal.Body>
      </Modal>
      <Modal show={modalEdit} onHide={onClose}>
        <Modal.Header closeButton>Edit Event</Modal.Header>
        <Modal.Body>
          <Form
            name="edit-form"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder={title}
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Start Time</Form.Label>
              <Form.Control
                type="datetime-local"
                name="start-time"
                placeholder={startDate}
                value={newStartDate}
                onChange={(e) => setNewStartDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>End Time</Form.Label>
              <Form.Control
                type="datetime-local"
                name="end-time"
                placeholder={endDate}
                value={newEndDate}
                onChange={(e) => setNewEndDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Check
                type="checkbox"
                label="Recurring"
                name="recurring"
                checked={newRecurring}
                onChange={(_) => setNewRecurring(!newRecurring)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                name="location"
                placeholder={location}
                value={newLocation}
                onChange={(e) => setNewLocation(e.target.value)}
              />
              <Form.Text>Leave empty if virtual event.</Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>Web Conference Link</Form.Label>
              <Form.Control
                type="text"
                name="web-link"
                placeholder={webConferenceLink}
                value={newWebConferenceLink}
                onChange={(e) => setNewWebConferenceLink(e.target.value)}
              />
              <Form.Text>E.g. Zoom, Google Meets, etc.</Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>Points</Form.Label>
              <Form.Control
                type="number"
                name="points"
                placeholder={points}
                value={newPoints}
                onChange={(e) => setNewPoints(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                placeholder={description}
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Action Link</Form.Label>
              <Form.Control
                type="text"
                name="action-link"
                placeholder={actionLink}
                value={newActionLink}
                onChange={(e) => setNewActionLink(e.target.value)}
              />
              <Form.Text>E.g. Google form, website link, etc.</Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>Committees</Form.Label>
              <MultiSelect
                options={committeeOptions}
                value={newCommittees}
                onChange={setNewCommittees}
                labelledBy={"Select committees"}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Event Hosts</Form.Label>
              <MultiSelect
                options={users}
                value={newHosts}
                onChange={setNewHosts}
                labelledBy={"Select hosts"}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="file"
                name="event-image"
                ref={eventImageRef}
              />
            </Form.Group>
            <Button className={formStyles["submit-form"]} type="submit">
              Update
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
