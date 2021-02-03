import AccountLayout from "../components/accountlayout";
import EventBox from "../components/widgets/eventbox";

import Container from "react-bootstrap/Container";
import Loader from "react-loader-spinner";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import axios from "axios";

import { base_url } from "../constants.js";

const MyEvents = () => {
  const [loading, setLoading] = useState(true);
  const authenticated = useSelector((state) => state.authenticated);
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
        const savedAttendedEventsUrl = base_url + "/user/savedattendedevents";
        axios
          .get(savedAttendedEventsUrl, { withCredentials: true })
          .then((res) => {
            const saved = res.data;
            let filtered = allEvents.filter(function (e) {
              return saved.indexOf(e._id) !== -1;
            });
            setEvents(filtered);
          });
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
    <AccountLayout>
      <div className="container">
        <div className="content">
          <Container fluid className="section">
            {loading ? (
              <div className="loading-container">
                <Loader type="Oval" color="#ace8ac" height={50} width={50} />
              </div>
            ) : (
              <EventBox
                boxTitle={"My Events"}
                events={events}
                viewMode={true}
                showSavedOnly={true}
                handleUpdate={handleUpdate}
              />
            )}
          </Container>
        </div>
      </div>
    </AccountLayout>
  );
};

export default MyEvents;
