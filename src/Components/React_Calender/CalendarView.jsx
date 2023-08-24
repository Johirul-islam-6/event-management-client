
import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const CalendarView = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  // You can replace this mock data with your actual event data
  const events = [
    { date: "2023-08-26", title: "Event 1" },
    { date: "2023-08-27", title: "Event 2" },
    // ... Add more events
  ];

  const eventElements = events.map((event) => (
    <div key={event.date}>
      <strong>{event.title}</strong>
    </div>
  ));

  return (
    <div>
      <h1>Event Calendar</h1>
      <div className="calendar-container">
        <Calendar
          onChange={setSelectedDate}
          defaultValue={selectedDate}
          tileContent={({ date }) => {
            const event = events.find(
              (event) => event.date === date.toISOString().split("T")[0]
            );
            return event ? <div className="event-marker"></div> : null;
          }}
        />
      </div>
      <div className="event-list">
        <h2>Events on {selectedDate.toDateString()}</h2>
        {eventElements.length > 0 ? (
          eventElements
        ) : (
          <p>No events for this date.</p>
        )}
      </div>
    </div>
  );
};

export default CalendarView;
