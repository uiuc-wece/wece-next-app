import AccountWidget from "../accountwidget";

import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const Calendar = ({ events }) => {
  return (
    <AccountWidget>
      <BigCalendar
        localizer={localizer}
        events={events}
        defaultView="week"
        titleAccessor="title"
        startAccessor="startDate"
        endAccessor="endDate"
        style={{ height: 500 }}
      />
    </AccountWidget>
  );
};

export default Calendar;
