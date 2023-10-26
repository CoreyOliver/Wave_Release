
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionsPlugin from "@fullcalendar/interaction";
import {handleDateClick} from '../function/calendarFunction'

export async function loader() {
  const res = await fetch("http://localhost:3000/calendarGet")
  const eventData = await res.json()
  return eventData
}

const CalendarContainer = () => {
  const eventData = useLoaderData()
  console.log(eventData)
  const [wsCalendarEvents, setWsCalendarEvents] = useState(eventData);

  useEffect(()=> console.log(wsCalendarEvents),[wsCalendarEvents])

  return (
    <div className="mt-32 mx-8">
      <FullCalendar
        height={1000}
        selectable={true}
        defaultAllDay={true}
        weekends={true}
        headerToolbar={{
          start: "today prev next",
          center: "title",
          end: "dayGridMonth dayGridWeek dayGridDay",
        }}
        events={wsCalendarEvents}
        plugins={[dayGridPlugin, interactionsPlugin]}
        initialView="dayGridMonth"
        dateClick={(date)=>handleDateClick(date)}
        
      />
    </div>
  );
};

export default CalendarContainer;
