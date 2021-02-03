import AccountLayout from "../components/accountlayout";
import EventBox from "../components/widgets/eventbox";

import Container from "react-bootstrap/Container";
import Loader from "react-loader-spinner";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import axios from "axios";

import { base_url } from "../constants.js";

const EventManager = () => {
  const [loading, setLoading] = useState(true);
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
                boxTitle={"Event Manager"}
                events={events}
                viewMode={false}
                showSavedOnly={false}
                handleUpdate={handleUpdate}
              />
            )}
          </Container>
        </div>
      </div>
    </AccountLayout>
  );
};

export default EventManager;
