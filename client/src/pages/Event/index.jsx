import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { LuCalendarCheck2 } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";

const Event = () => {
  const { id } = useParams(); // Get the event ID from URL parameters
  const [event, setEvent] = useState(null); // State to hold event data
  const [loading, setLoading] = useState(true); // State to handle loading



  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/events/${id}`);
        setEvent(response.data); 
      } catch (error) {
        console.error("Error fetching event:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchEvent();
  }, [id]); // Dependency array includes id to re-run effect if id changes

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }

  if (!event) {
    return <div>No event found</div>; // Handle case when no event is found
  }

  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  const formattedDate = new Date(event.date).toLocaleDateString('en-US', options);

  return (
    <main className='relative background-overlay min-h-screen flex justify-center'>
      <section className='flex justify-center w-4/5'>
        <div className='flex flex-col justify-center items-center w-full p-10'> 
          <div className="flex flex-1 justify-center my-10 w-full rounded-[50px] relative overflow-hidden">
            {/* Glassmorphism Background Layer */}
            <div className="absolute inset-0 bg-primary bg-opacity-30 backdrop-blur-lg shadow-xl z-0"></div>

            {/* Image Content */}
            <div className="w-3/4 flex justify-center z-10">
              <img className="w-full h-[45vh] object-cover rounded-[30px]" src={event.photo} alt="Event Poster" />
            </div>
          </div>

          <div className='flex flex-col flex-1 gap-4 self-start w-full'>
            <div className='flex justify-between w-full'>
              <p className='text-[5vw] text-primary'>{event.name}</p>
              <div className='shadow-lg p-3 rounded-xl flex flex-col items-center w-[40%]'>
                <p className='label'>{event.fee == 0?"Free":"$"+event.fee}</p>
                <div className='flex justify-center w-full'>
                  <button className="bg-primary text-2xl max-lg:text-sm p-2 rounded-lg text-white w-[95%]">
                    Register
                  </button>
                </div>
              </div>
            </div>

            <p className='text-xl overflow-hidden text-ellipsis whitespace-normal max-h-40'>{event.summary}</p>
            <p className='label'>Date and time</p>
            <div className='flex gap-2 text-[2vw] text-primary'>
              <LuCalendarCheck2 />
              <p>{formattedDate}</p>
            </div>
            <p className='label'>Location</p>
            <div className='flex gap-2 text-[2vw] text-primary'>
              <FaLocationDot />
              <p>{event.location}</p>
            </div>
            <p className='label'>About this event</p>
            <p className='text-xl text-ellipsis whitespace-normal max-h-40'>{event.description}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Event;
