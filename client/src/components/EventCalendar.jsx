import React, { useContext, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';


const EventCalendar = () => {
  const { user } = useContext(UserContext); // Access user context
  const [events, setEvents] = useState([]);
  const [value, setValue] = useState(new Date()); // State to track selected date
  const navigate = useNavigate()

  useEffect(() => {
    const fetchEvents = async () => {
    if (user) {
        try {
          let requestURL = `http://localhost:5000/users/${user.username}/events`
          console.log(requestURL)
          const response = await axios.get(requestURL);
          setEvents(response.data); // Assuming the response contains an array of events
        } catch (error) {
          console.error("Error fetching user's events:", error);
        }
      }
    };

    fetchEvents();
  }, [user]);

  // Convert event dates to a more usable format for calendar
  const eventDates = events.map(event => (new Date(event.date).toDateString()));
  console.log(eventDates)

  return (
    <div className='calendar-wrapper flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md w-full h-full'>
      <h2 className='text-2xl font-semibold mb-4 text-primary'>Your Events</h2>
      <Calendar
        onChange={setValue}
        value={value}
        tileClassName={({ date }) => {
          if (eventDates.includes(date.toDateString())) {
            return 'bg-primary text-white rounded-full'; // Tailwind classes for highlight
        }
          return null;
        }}
      />
      {/* Optionally, display events for the selected date */}
      <div className='mt-4 w-full'>
        <h3 className='text-xl text-bold mb-2'>Events on {value.toDateString()}:</h3>
        <ul className='list-none text-primary text-xl pl-5'>
          {events.filter(event => new Date(event.date).toDateString() === value.toDateString()).map(event => (
            <li key={event._id} className='text-primary text-bold cursor-pointer hover:text-secondary transition-colors ease-in-out duration-300' onClick={() => navigate("/events/"+event._id)}>
              {event.name}
            </li>
          ))}
        </ul>
        {events.filter(event => new Date(event.date).toDateString() === value.toDateString()).length === 0 && (
          <p className='text-gray-500'>No events for this date.</p>
        )}
      </div>
    </div>
  );
};

export default EventCalendar;
