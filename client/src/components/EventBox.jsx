import React from "react";
import "./comp-css/EventBox.css";

const EventBox = ({ event, openEventDetails,fetchEvents }) => {
  return (
    <div className="event-box">
      <img
        src={event.event_image_url}
        alt={event.event_name}
        className="event-img"
      />
      <div className="event-content">
        <h3>{event.event_name}</h3>
        <p>
          {event.event_date} | {event.event_time}
        </p>
        <p>{event.event_location}</p>
        <button className="view-more-btn" onClick={() => openEventDetails(event)}>
          View More
        </button>
      </div>
    </div>
  );
};

export default EventBox;
