import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { LuCalendarCheck2 } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import ScrollAnimation from '../../components/ScrollAnimation';
import { UserContext } from '../../contexts/UserContext';

const Event = () => {
  const { id } = useParams(); // Get the event ID from URL parameters
  const [event, setEvent] = useState(null); // State to hold event data
  const [loading, setLoading] = useState(true); // State to handle loading
  const { user, setUser } = useContext(UserContext); // Access user context

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

  const registerForEvent = async (e) => {
    e.preventDefault();
    if (!user) return; // Check if the user is logged in
    const updatedEvents = [...user.events, event._id]; // Create a new array with the registered event

    try {
      const response = await axios.put(
        `http://localhost:5000/users/${user.username}/events`,
        { events: updatedEvents }
      );
      console.log(response.data);

      // Create a new user object with updated events and set it in state
      const updatedUser = { ...user, events: updatedEvents };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      alert("Event added successfully!")
    } catch (error) {
      console.error('Error updating user events', error);
    }
  };

  const unRegisterForEvent = async (e) => {
    e.preventDefault();
    if (!user) return; // Check if the user is logged in
    const updatedEvents = user.events.filter((eventId) => eventId !== event._id); // Filter out the unregistered event

    try {
      const response = await axios.put(
        `http://localhost:5000/users/${user.username}/events`,
        { events: updatedEvents }
      );
      console.log(response.data);

      // Create a new user object with updated events and set it in state
      const updatedUser = { ...user, events: updatedEvents };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    } catch (error) {
      console.error('Error updating user events', error);
    }
  };

  return (
    <main className='relative background-overlay min-h-screen flex justify-center'>
      <section className='flex justify-center w-4/5 max-md:w-full'>
        <div className='flex flex-col justify-center items-center w-full p-10 max-sm:p-2'> 
          <ScrollAnimation className="w-full">
            <div className="flex flex-1 justify-center my-10 w-full rounded-[50px] relative overflow-hidden">
              <div className="absolute inset-0 bg-primary bg-opacity-30 backdrop-blur-lg shadow-xl z-0"></div>
              <div className="w-3/4 flex justify-center z-[5]">
                <img
                  className="w-full h-[45vh] object-cover rounded-[30px]"
                  src={event.photo.startsWith("src") ? "/" + event.photo : event.photo}
                  alt="Event Poster"
                />
              </div>
            </div>
          </ScrollAnimation>
  
          <ScrollAnimation delay={0.2}>
            <div className='flex flex-col flex-1 gap-4 self-start w-full'>
              <div className='flex justify-between w-full'>
                <p className='text-[5vw] text-primary'>{event.name}</p>
                <div className='shadow-lg p-3 rounded-xl flex flex-col overflow-hidden justify-around items-center w-[40%]'>
                  <p className='label'>{event.fee === 0 ? "Free" : "$" + event.fee}</p>
                  <div className='flex justify-center w-full'>
                    {user ? (
                      <>
                        {!user.events.includes(event._id) ? (
                          <button
                            className="bg-primary text-2xl max-lg:text-sm p-2 rounded-lg text-white w-[95%]"
                            onClick={registerForEvent}
                          >
                            Register
                          </button>
                        ) : (
                          <button
                            className="bg-secondary text-2xl max-lg:text-sm p-2 rounded-lg text-white w-[95%]"
                            onClick={unRegisterForEvent}
                          >
                            Unregister
                          </button>
                        )}
                      </>
                    ) : (
                      <p className='text-secondary text-xl'>Sign in to register</p>
                    )}
                  </div>
                </div>
              </div>

              <p className='text-xl overflow-hidden text-ellipsis whitespace-normal max-h-40'>{event.summary}</p>
              <p className='label'>Date and time</p>
              <div className='flex gap-2 text-[2vw] text-primary'>
                <LuCalendarCheck2 className='text-[2vw] max-lg:text-[20px]'/>
                <p className="text-[2vw] max-lg:text-[20px]">{formattedDate}</p>
              </div>
              <p className='label'>Location</p>
              <div className='flex gap-2 text-[2vw] max-lg:text-[20px] text-primary'>
                <FaLocationDot />
                <p>{event.location}</p>
              </div>
              <p className='label'>About this event</p>
              <p
                className='text-xl text-ellipsis whitespace-normal max-h-40'
                dangerouslySetInnerHTML={{ __html: event.description }}
              ></p>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
}

export default Event;
