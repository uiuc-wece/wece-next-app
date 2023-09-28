import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Layout from "../components/layout";
import SectionBody from "../components/sectionbody";
import SectionHead from "../components/sectionhead";
import styles from "../styles/Calendar.module.css";

export default function Calendar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    function formatTime(date) {
      // Placeholder code for time formatting
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
      // Placeholder code for fetching events
      const cal_id = "your-calendar-id";
      const api_key = "your-api-key";
      var dateNow = new Date();

      const result = await axios.get(
        "https://www.googleapis.com/calendar/v3/calendars/" +
          cal_id +
          "/events" +
          "?key=" +
          api_key,
        {
          params: {
            timeMin: dateNow.toISOString(),
            timeMax: new Date(dateNow.setMonth(dateNow.getMonth() + 1)).toISOString(),
            orderBy: "startTime",
            singleEvents: true,
          },
        }
      );

      var events = [];
      if (result.data.items) {
        const eventItems = result.data.items;
        eventItems.forEach((e) => {
          // Placeholder code for parsing event data
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
      setEvents(events);
    };
    fetchEvents();
  }, []);

  // Define the paths to all images, including both previous and new ones
  const imagePaths = [
    // Previous images (replace with actual paths)
    "path/to/previous/image1.png",
    "path/to/previous/image2.png",
    // New images
    "events/GM/August GM 2023.png",
    "events/tech talks/UL1.png",
    "events/tech talks/UL2.png",
    "events/tech talks/UL3.png",
    "events/tech talks/UL4.png",
  ];

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
          <SectionHead title="Images_" top={true} />
          <div id="images">
            {/* Render all the images */}
            {imagePaths.map((imagePath, index) => (
              <img
                key={index}
                src={`/${imagePath}`}
                alt={`Image ${index + 1}`}
                className={styles["event-image"]} // Define appropriate CSS class for styling
              />
            ))}
          </div>
        </Container>
      </div>
    </Layout>
  );
}
