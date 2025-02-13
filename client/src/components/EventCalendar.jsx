import { useState } from 'react';
import Calendar from 'react-calendar';
import { useNavigate } from 'react-router-dom';
import { FaCalendar } from 'react-icons/fa6';
import { events } from '../constants';

const EventCalendar = () => {
  const [value, setValue] = useState(new Date());
  const navigate = useNavigate()


  const upcomingEvents = events.filter((event)=>!event.recurring)
  const eventDates = upcomingEvents.map(event => (event.date).toDateString());

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
          {upcomingEvents.filter(event => new Date(event.date).toDateString() === value.toDateString()).map(event => (
            <li key={event._id} className='text-primary text-bold cursor-pointer hover:text-secondary transition-colors ease-in-out duration-300 inline-flex' onClick={() => navigate("/events/"+event.name)}>
              <FaCalendar className='mr-2'></FaCalendar>
              {event.name}
            </li>
          ))}
        </ul>
        {upcomingEvents.filter(event => new Date(event.date).toDateString() === value.toDateString()).length === 0 && (
          <p className='text-gray-500'>No events for this date.</p>
        )}
      </div>
    </div>
  );
};

export default EventCalendar;
