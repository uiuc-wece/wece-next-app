cal_id = "pmtthq7beefrulnrjbd9nj9e5s@group.calendar.google.com";
api_key = "AIzaSyDCdsXt9s_kxJp3SUjzzHng1Flgbao7jpc";

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

document.addEventListener("DOMContentLoaded", function(event) {
  EVENTS_DIV = document.getElementById("events");
  dateNow = new Date();
  $.ajax({
    url:
      "https://www.googleapis.com/calendar/v3/calendars/" +
      cal_id +
      "/events" +
      "?key=" +
      api_key,
    data: {
      timeMin: dateNow.toISOString(),
      timeMax: new Date(dateNow.setMonth(dateNow.getMonth() + 1)).toISOString(),
      orderBy: "startTime",
      singleEvents: true
    },
    success: function(data) {
      events = data.items;
      events.forEach(e => {
        console.log(e);
        startTime = e.start.dateTime
          ? new Date(e.start.dateTime)
          : new Date(e.start.date);
        endTime = e.end.dateTime
          ? new Date(e.end.dateTime)
          : new Date(e.end.date);
        startDate = startTime.toDateString();
        endDate = endTime.toDateString();
        startTimeString =
          startTime && startTime.getHours() ? formatTime(startTime) : "";
        endTimeString =
          endTime && endTime.getHours() ? formatTime(endTime) : "";
        timeString = endTimeString
          ? `${startTimeString} - ${endTimeString}`
          : startTimeString;

        dateString =
          startDate == endDate
            ? `${startDate}, ${timeString}`
            : `${startDate}, ${startTimeString} - ${endDate}, ${endTimeString}`;
        locationString = e.location ? `${e.location}` : "";
        card = `
      <a href="${e.htmlLink}" target="_blank"><div class="event-card">
        <h4>${e.summary}</h4>
        <h5>${locationString}</h5>
        <h6>${dateString}</h6>
      </div></a>
      `;
        EVENTS_DIV.innerHTML += card;
      });
    }
  });
});
