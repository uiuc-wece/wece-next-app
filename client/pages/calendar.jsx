import Layout from "../components/layout";
import SectionHead from "../components/sectionhead";
import styles from "../styles/Calendar.module.css";

import { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";

export default function Calendar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    function formatTime(date) {
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? "pm" : "am";
      hours = hours % 12;
      hours = hours ? hours : 12;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      var strTime = hours + ":" + minutes + " " + ampm;
      return strTime;
    }

    const fetchEvents = async () => {
      const cal_id = "pmtthq7beefrulnrjbd9nj9e5s@group.calendar.google.com";
      const api_key = "AIzaSyDCdsXt9s_kxJp3SUjzzHng1Flgbao7jpc";

      var dateNow = new Date();

      const result = await axios
        .get(
          "https://www.googleapis.com/calendar/v3/calendars/" +
            cal_id +
            "/events" +
            "?key=" +
            api_key,
          {
            params: {
              timeMin: dateNow.toISOString(),
              timeMax: new Date(
                dateNow.setMonth(dateNow.getMonth() + 1)
              ).toISOString(),
              orderBy: "startTime",
              singleEvents: true,
            },
          }
        )
        .then((response) => {
          var events = [];
          if (response.data.items) {
            const eventItems = response.data.items;
            eventItems.forEach((e) => {
              var startTime = e.start.dateTime
                ? new Date(e.start.dateTime)
                : new Date(e.start.date);
              var endTime = e.end.dateTime
                ? new Date(e.end.dateTime)
                : new Date(e.end.date);
              var startDate = startTime.toDateString();
              var endDate = endTime.toDateString();
              var startTimeString =
                startTime && startTime.getHours() ? formatTime(startTime) : "";
              var endTimeString =
                endTime && endTime.getHours() ? formatTime(endTime) : "";
              var timeString = endTimeString
                ? `${startTimeString} - ${endTimeString}`
                : startTimeString;

              var dateString =
                startDate == endDate
                  ? `${startDate}, ${timeString}`
                  : `${startDate}, ${startTimeString} - ${endDate}, ${endTimeString}`;
              var locationString = e.location ? `${e.location}` : "";
              events.push({
                id: e.id,
                htmlLink: e.htmlLink,
                summary: e.summary,
                locationString: locationString,
                dateString: dateString,
              });
            });
          }
          return events;
        });

      setEvents(result);
    };
    fetchEvents();
  }, []);

  return (
    <Layout>
      <div className="content">
        <Container className="section">
          <SectionHead title="Events_" top={true} />
          <div id="events">
            {events
              ? events.map((e, ind) => (
                  <a key={e.id} href={e.htmlLink} target="_blank">
                    <div
                      className={
                        ind % 2 == 1
                          ? `${styles["event-card"]} ${styles["alternate-color"]}`
                          : `${styles["event-card"]}`
                      }
                    >
                      <h4>{e.summary}</h4>
                      <h6>{e.locationString}</h6>
                      <h6>{e.dateString}</h6>
                    </div>
                  </a>
                ))
              : null}
          </div>
        </Container>
      </div>
    </Layout>
  );
}
