import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Slider from '../../components/Slider';
import ScrollAnimation from '../../components/ScrollAnimation';
import { UserContext } from '../../contexts/UserContext';
import EventCalendar from '../../components/EventCalendar';
import 'react-calendar/dist/Calendar.css';

function Home() {
  const [events, setEvents] = useState([]);
  const { user } = useContext(UserContext)

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

   // Define fade-in animation variants
   const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <main className='relative background-overlay min-h-screen flex justify-center'>
      {/* <ScrollAnimation> */}
        <section className='flex justify-center w-[80vw]'>
          <div className='flex-col items-start w-full'>
            <ScrollAnimation>
              <div className="bento-box">
                What does my Father's House have in store for you?
              </div>
            </ScrollAnimation>
     
            <section className='font-fjalla text-primary'>
              <div className='text-4xl mx-10 ml-0 my-10'>Upcoming Events</div>
              {/* Slider for non-recurring events */}
              {/* <motion.div    initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut"}} // Duration of the fade-in
            variants={fadeIn}><Slider events={upcomingEvents} /></motion.div> */}
            <ScrollAnimation delay={0.5}><Slider events={upcomingEvents}></Slider></ScrollAnimation>
            </section>

          <ScrollAnimation>
          <section className="flex gap-5 max-sm:flex-col">
            {user && <div className='relative h-full max-sm:flex-1 max-sm:w-full w-[35%] font-fjalla'>
                <EventCalendar></EventCalendar>
                </div>
          }
            {user?  <div className='flex flex-col flex-1 justify-between gap-5'>
              <div className="bento-box flex-1 w-full">
                  Join us for our weekly events!
                </div>

                <div className="bento-box flex-1 w-full">
                  Don't miss a beat!
                </div>
            </div>:
             <div className='flex flex-1 justify-between gap-5 w-full'>
             <div className="bento-box flex-1 w-full">
                 Join us for our weekly events!
               </div>

               <div className="bento-box flex-1 w-full">
                 Don't miss a beat!
               </div>
           </div>
            }
          
      

        
            </section>
          </ScrollAnimation>


            <div className='text-4xl mx-10 ml-0 text-primary my-10'>Weekly Events</div>
            {/* Slider for recurring events */}
            <ScrollAnimation><Slider className="my-20" events={weeklyEvents}/></ScrollAnimation>

      
       
          </div>

   
        </section>
      {/* </ScrollAnimation> */}
     
    </main>
  );
}

export default Home;
