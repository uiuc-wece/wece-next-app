import AccountLayout from "../components/accountlayout";
import AccountWidget from "../components/accountwidget";
import styles from "../styles/PointsUpdate.module.css";
import formStyles from "../styles/Forms.module.css";

import { AiOutlineCheckCircle } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import MultiSelect from "react-multi-select-component";
import Loader from "react-loader-spinner";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import axios from "axios";

import { base_url } from "../constants.js";

const PointsUpdate = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [events, setEvents] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [validated, setValidated] = useState(false);
  const authenticated = useSelector((state) => state.authenticated);

  if (!authenticated) {
    const router = useRouter();
    router.push("/login");
  }

  const getUsers = async () => {
    const usersUrl = base_url + "/users";
    await axios
      .get(usersUrl, { withCredentials: true })
      .then((res) => {
        const userOptions = res.data.map((user) => ({
          label: user.firstName + " " + user.lastName,
          value: { email: user.email, id: user._id },
        }));
        setUsers(userOptions);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getEvents = async () => {
    const eventsUrl = base_url + "/events";
    await axios
      .get(eventsUrl, { withCredentials: true })
      .then((res) => {
        const eventOptions = res.data.map((event) => ({
          label: event.title + " " + event.startDate,
          value: event._id,
        }));
        setEvents(eventOptions);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getRequestToAddPoints = async (pointsUrl, userEmail, eventId) => {
    return axios.put(
      pointsUrl,
      { email: userEmail, eventId: eventId },
      { withCredentials: true }
    );
  };

  const addPoints = (event) => {
    setLoading(true);

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

      let requests = [];
      selectedUsers.forEach((user) => {
        let userId = user.value.id;
        let userEmail = user.value.email;
        selectedEvents.forEach((event) => {
          let eventId = event.value;
          let pointsUrl = base_url + "/user/" + userId + "/addpoints";
          requests.push(getRequestToAddPoints(pointsUrl, userEmail, eventId));
        });
      });

      Promise.all(requests)
        .then(() => {
          setSuccess(true);
        })
        .catch((errors) => {
          console.log(errors.response.data);
        })
        .finally(() => {
          inputs.forEach((input) => (input.disabled = false));
          setValidated(false);
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    getUsers();
    getEvents();
  }, []);

  return (
    <AccountLayout>
      <div className="container">
        <div className="content">
          <Container fluid className="section">
            <AccountWidget className={styles["account-widget"]}>
              <div className={styles["points-update-wrapper"]}>
                {success ? (
                  <div
                    className={styles["success"]}
                    onClick={() => setSuccess(false)}
                  >
                    <AiOutlineCheckCircle />
                  </div>
                ) : loading ? (
                  <Loader type="Oval" color="#ace8ac" height={50} width={50} />
                ) : (
                  <Form
                    name="points-form"
                    noValidate
                    validated={validated}
                    onSubmit={addPoints}
                  >
                    <Form.Group>
                      <Form.Label>User</Form.Label>
                      <MultiSelect
                        className={styles["multi-select"]}
                        options={users}
                        value={selectedUsers}
                        onChange={setSelectedUsers}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Event</Form.Label>
                      <MultiSelect
                        className={styles["multi-select"]}
                        options={events}
                        value={selectedEvents}
                        onChange={setSelectedEvents}
                      />
                    </Form.Group>
                    <Button className={formStyles["submit-form"]} type="submit">
                      Submit
                    </Button>
                  </Form>
                )}
              </div>
            </AccountWidget>
          </Container>
        </div>
      </div>
    </AccountLayout>
  );
};

export default PointsUpdate;
