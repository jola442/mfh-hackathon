import { useParams } from 'react-router-dom';
import { LuCalendarCheck2 } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import ScrollAnimation from '../../components/ScrollAnimation';
import { events } from '../../constants';



const Event = () => {
  const { id } = useParams(); // Get the event ID from URL parameters
  const event = events.find( (elem) => elem.name === id)
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = new Date(event.date).toLocaleDateString('en-US', options);

  const handleClick = (e) => {
    e.preventDefault();
    window.location.href = event.formLink;
  };

  return (
    <main className='relative background-overlay min-h-screen flex justify-center'>
      <section className='flex justify-center w-4/5 max-md:w-full'>
        <div className='flex flex-col justify-center items-center w-full p-10 max-sm:p-2'> 
          <ScrollAnimation width="full">
            <div className="flex flex-1 justify-center my-10 w-full rounded-[50px] relative overflow-hidden">
              <div className="absolute inset-0 bg-primary bg-opacity-30 backdrop-blur-lg shadow-xl z-0"></div>
              <div className="w-3/4 flex justify-center z-[5]">
                <img
                  className="w-full h-[45vh] object-cover rounded-[30px]"
                  src={event.poster}
                  alt="Event Poster"
                />
              </div>
            </div>
          </ScrollAnimation>
  
          <ScrollAnimation delay={0.2} width="full">
            <div className='flex flex-col flex-1 gap-4 self-start w-full'>
              <div className='flex justify-between w-full'>
                <p className='text-[5vw] text-primary'>{event.name}</p>
                <div className='shadow-lg p-3 rounded-xl flex flex-col overflow-hidden justify-around items-center w-[40%]'>
                  <p className='label'>{event.fee === 0 ? "Free" : "$" + event.fee}</p>
                  <div className='flex justify-center w-full'>
         
                      <>

                          {!event.recurring &&<button
                            className="bg-primary text-2xl max-lg:text-sm p-2 rounded-lg text-white w-[95%] button hover:bg-blue-500"
                            onClick={handleClick}
                          >
                            Register
                          </button>}
                      </>
                  </div>
                </div>
              </div>

              <p className='text-xl overflow-hidden text-ellipsis whitespace-normal max-h-40'>{event.summary}</p>
              <p className='label'>Date and time</p>
              <div className='flex gap-2 text-[2vw] text-primary'>
                <LuCalendarCheck2 className='text-[2vw] max-lg:text-[20px]'/>
                <p className="text-[2vw] max-lg:text-[20px]">{event.date instanceof Date? formattedDate:event.date}</p>
              </div>
              <p className='label'>Location</p>
              <div className='flex gap-2 text-[2vw] max-lg:text-[20px] text-primary'>
                <FaLocationDot />
                <p>{event.location}</p>
              </div>
              <p className='label'>About this event</p>
              <p
                className='text-xl text-ellipsis whitespace-normal'
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
