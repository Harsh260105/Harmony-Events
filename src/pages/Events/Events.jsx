import React from 'react';
import { useNavigate } from 'react-router-dom';
import moun from '../../assets/mountain.jpeg';
import Footer from '../../components/Footer';
import Party from '../../assets/party.jpeg';
import Navratri from '../../assets/navratri.jpeg';
import Standup from '../../assets/standup.jpeg';
import Bday from '../../assets/birthday.jpeg';
import Wedding from '../../assets/wedding.jpeg';
import Navbar from '../../components/Navbar';
import './Events.css';

const Events = () => {
  const navigate = useNavigate();

  const events = [
    { id: 1, title: 'Party', image: Party, description: 'A fun party event.', date: '2024-09-10', location: 'City Center' },
    { id: 2, title: 'Navratri', image: Navratri, description: 'Celebrate Navratri with us.', date: '2024-10-15', location: 'Town Hall' },
    { id: 3, title: 'Standup Comedy', image: Standup, description: 'Laugh out loud at our comedy night.', date: '2024-11-20', location: 'Comedy Club' },
    { id: 4, title: 'Birthday', image: Bday, description: 'Join us for a grand birthday celebration.', date: '2024-12-05', location: 'Private Venue' },
    { id: 5, title: 'Wedding', image: Wedding, description: 'Celebrate love and unity.', date: '2024-12-25', location: 'Banquet Hall' }
  ];

  const handleEventClick = (event) => {
    navigate(`/event/${event.id}`, { state: { event } });
  };

  return (
    <>
      <Navbar />
      <div className='outermost'>
        <div className="first">
          <img src={moun} alt="mountain" />
          <div className="headercontent">
            <h3 className="all">H A R M O N I &nbsp; E V E N T S &nbsp; </h3>
            <h3 className="aa">
              <span className="ab">HARMONI </span> &nbsp;{" "}
              <span className="har">EVENTS</span>
            </h3>
            <p className="bc">Home &nbsp;|&nbsp; Harmoni Events</p>
          </div>
        </div>
        <div className="evimg">
          {events.map((event) => (
            <div key={event.id} className='ev a' onClick={() => handleEventClick(event)}>
              <img src={event.image} alt={event.title} />
              <p>{event.title}</p>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Events;
