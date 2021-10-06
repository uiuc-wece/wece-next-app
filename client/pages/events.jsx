import Layout from "../components/layout";
import SectionHead from "../components/sectionhead";
import SectionBody from "../components/sectionbody";

import EventBox from "../components/widgets/eventbox";

import { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Loader from "react-loader-spinner";

import { base_url } from "../constants.js";

export default function Events() {
  const [loading, setLoading] = useState(true);
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
      })
      .finally(() => setLoading(false));
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
          {loading ? (
            <div className="loading-container">
              <Loader type="Oval" color="#ace8ac" height={50} width={50} />
            </div>
          ) : (
            <EventBox
              boxTitle={""}
              events={events}
              viewMode={true}
              showSavedOnly={false}
              handleUpdate={handleUpdate}
            />
          )}
        </Container>

        <Container fluid className="section">
          <SectionBody>
            <p>
              Events{" "}
              <a href="https://forms.gle/32M8qpMhVkz7at3j7" target="_blank">
                sign-in form
              </a>{" "}
              if token code does not work!
            </p>
            <p>
              Contact Joshmita Chintala at{" "}
              <a href="mailto:jchint2@illinois.edu">jchint2@illinois.edu</a> if
              your points need to be updated!
            </p>
          </SectionBody>
        </Container>
      </div>
    </Layout>
  );
}
