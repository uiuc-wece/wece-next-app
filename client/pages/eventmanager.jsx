import AccountLayout from "../components/accountlayout";
import EventBox from "../components/widgets/eventbox";

import Container from "react-bootstrap/Container";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import axios from "axios";

import { base_url } from "../constants.js";

const EventManager = () => {
  const authenticated = useSelector((state) => state.authenticated);
  const accountType = useSelector((state) => state.accountType);
  const [events, setEvents] = useState([]);

  if (!authenticated) {
    const router = useRouter();
    router.push("/login");
  }

  const getEvents = async () => {
    const eventsUrl = base_url + "/events";
    await axios
      .get(eventsUrl, { withCredentials: true })
      .then((res) => {
        const allEvents = res.data;
        if (accountType === "CHAIR" || accountType === "BOARD") {
          const createdEventsUrl = base_url + "/user/createdevents";
          axios.get(createdEventsUrl, { withCredentials: true }).then((res) => {
            const created = res.data;
            let filtered = allEvents.filter(function (e) {
              return created.indexOf(e._id) !== -1;
            });
            setEvents(filtered);
          });
        } else {
          setEvents(allEvents);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getEvents();
  }, []);

  function handleUpdate() {
    getEvents();
  }

  return (
    <AccountLayout>
      <div className="container">
        <div className="content">
          <Container fluid className="section">
            <EventBox
              boxTitle={"Event Manager"}
              events={events}
              viewMode={false}
              showSavedOnly={false}
              handleUpdate={handleUpdate}
            />
          </Container>
        </div>
      </div>
    </AccountLayout>
  );
};

export default EventManager;
