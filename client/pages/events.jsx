// the following is the old format of the events page. To incorporate the points method, go way down to line 122 and uncomment that code, but comment this code from line 2-120
import Layout from "../components/layout";
import SectionHead from "../components/sectionhead";
import styles from "../styles/Calendar.module.css";

import { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
// import SectionBody from "../components/sectionbody";

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
              {/* Use this during the summer when there are no events! */}
              {/* <SectionBody>
                <p>
                  There are no events scheduled for this month. Check back later! <br/> We are working hard to get more events to the calendar.
                </p>
              </SectionBody> */}
          </div>
        </Container>
      </div>
    </Layout>
  );
}

// the following is the events page format if you would like to incorporate members being able to type in points. comment the above code and uncomment the code below.
// import Layout from "../components/layout";
// import SectionHead from "../components/sectionhead";
// import SectionBody from "../components/sectionbody";

// import EventBox from "../components/widgets/eventbox";

// import { useEffect, useState } from "react";
// import axios from "axios";
// import Container from "react-bootstrap/Container";
// import Loader from "react-loader-spinner";

// import { base_url } from "../constants.js";

// export default function Events() {
//   const [loading, setLoading] = useState(true);
//   const [events, setEvents] = useState([]);

//   const getEvents = async () => {
//     const eventsUrl = base_url + "/events";
//     await axios
//       .get(eventsUrl, { withCredentials: true })
//       .then((res) => {
//         setEvents(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//       .finally(() => setLoading(false));
//   };

//   useEffect(() => {
//     getEvents();
//   }, []);

//   function handleUpdate() {
//     getEvents();
//   }

//   return (
//     <Layout>
//       <div className="content">
//         <Container className="section">
//           <SectionHead title="Events_" top={true} />
//           {loading ? (
//             <div className="loading-container">
//               <Loader type="Oval" color="#ace8ac" height={50} width={50} />
//             </div>
//           ) : (
//             <EventBox
//               boxTitle={""}
//               events={events}
//               viewMode={true}
//               showSavedOnly={false}
//               handleUpdate={handleUpdate}
//             />
//           )}
//         </Container>

//         <Container fluid className="section">
//           <SectionBody>
//             <p>
//               Events{" "}
//               <a href="https://forms.gle/32M8qpMhVkz7at3j7" target="_blank">
//                 sign-in form
//               </a>{" "}
//               if token code does not work!
//             </p>
//             <p>
//               Contact Joshmita Chintala at{" "}
//               <a href="mailto:jchint2@illinois.edu">jchint2@illinois.edu</a> if
//               your points need to be updated!
//             </p>
//           </SectionBody>
//         </Container>
//       </div>
//     </Layout>
//   );
// }
