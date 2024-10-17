import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../components/Card';
import { v4 as uuidv4 } from 'uuid';
import Slider from '../../components/Slider';

function Home() {
  const [events, setEvents] = useState([]);

  // Fetch events from the API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:5000/events"); // Adjust the URL as needed
        setEvents(response.data); // Assuming response.data contains the array of events
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []); // Empty dependency array to run only on mount

  // Format event dates and filter recurring and non-recurring events
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  
  // Create a new array with formatted dates
  const formattedEvents = events.map(event => ({
    ...event,
    date: new Date(event.date).toLocaleDateString('en-US', options)
  }));

  // Filter events
  const upcomingEvents = formattedEvents.filter(event => !event.isRecurring);
  const weeklyEvents = formattedEvents.filter(event => event.isRecurring);
  
  console.log("Weekly", weeklyEvents);

  return (
    <main className='relative background-overlay min-h-screen flex justify-center'>
      <section className='flex justify-center w-[80vw]'>
        <div className='flex-col items-start w-full'>
          <div className="bento-box">
            What does my Father's House have in store for you?
          </div>
          
          <section className='font-fjalla text-primary'>
            <div className='text-4xl mx-10 ml-0 my-10'>Upcoming Events</div>
            {/* Slider for non-recurring events */}
            <Slider events={upcomingEvents} />
          </section>

          <section className="flex justify-start gap-2">
            <div className="bento-box w-1/2">
              Join us for our weekly events!
            </div>

            <div className="bento-box w-1/2">
              Don't miss a beat!
            </div>
          </section>

          <div className='text-4xl mx-10 ml-0 text-primary my-10'>Weekly Events</div>
          {/* Slider for recurring events */}
          <Slider className="my-20" events={weeklyEvents}/>
        </div>
      </section>
    </main>
  );
}

export default Home;
