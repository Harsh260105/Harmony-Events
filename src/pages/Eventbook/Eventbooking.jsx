import React from 'react';
import { useLocation } from 'react-router-dom';
import './Eventbooking.css';

const Eventbooking = () => {
  const { state } = useLocation();
  const { event } = state || {};  

  if (!event) {
    return <div>No event data available.</div>;
  }

  return (
    <div className="event-page">
      <header className="event-header">
        <img src={event.image} alt={event.title} className="event-image" />
        <div className="event-title">{event.title}</div>
      </header>
      <div className="event-details">
        <h2>Event Details</h2>
        <p>{event.description}</p>
        <div className="event-meta">
          <div className="event-date">Date: {event.date}</div>
          <div className="event-location">Location: {event.location}</div>
        </div>
      </div>
      <button className="book-button">Book Now</button>
    </div>
  );
};

export default Eventbooking;
