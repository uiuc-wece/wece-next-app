import Layout from "../components/layout";
import SectionHead from "../components/sectionhead";
import EventBox from "../components/widgets/eventbox";
import styles from "../styles/Calendar.module.css";

import { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";

import { base_url } from "../constants.js";

export default function Events() {
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    const eventsUrl = base_url + "/events";
    await axios
      .get(eventsUrl, { withCredentials: true })
      .then((res) => {
        setEvents(res.data);
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
    <Layout>
      <div className="content">
        <Container className="section">
          <SectionHead title="Events_" top={true} />
          <EventBox
            boxTitle={""}
            events={events}
            viewMode={true}
            showSavedOnly={false}
            handleUpdate={handleUpdate}
          />
        </Container>
      </div>
    </Layout>
  );
}
