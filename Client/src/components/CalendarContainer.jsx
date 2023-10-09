import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);

const startDate = '10/10/23'
const endDate = '10/14/23'
const myEventsList = [
  {
    start: moment(startDate).toDate(),
    end: moment(endDate).toDate(),
    title: "Some title",
  },
];

const CalendarContainer = () => {
  return (
    <div className="flex">
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        className="mx-auto mt-32 shadow-xl shadow-slate-600 rounded-sm"
        style={{ height: 900, width: 900 }}
      />
    </div>
  );
};

export default CalendarContainer;
