import React from 'react'
import { LuCalendarCheck2 } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";

const Event = () => {
  const event =  
  { 
    name: "Big Give", 
    location:"Sandalwood Park",
    date:"10/20/24", 
    fee:"Free", 
    poster:"src/assets/images/event1.jpeg", 
    summary:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sapien lacus, dapibus vitae erat et, condimentum finibus urna. Proin nec eros at dui sodales accumsan. In hac habitasse platea dictumst. Fusce ornare lacus non sem ornare egestas. ", 
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sapien lacus, dapibus vitae erat et, condimentum finibus urna. Proin nec eros at dui sodales accumsan. In hac habitasse platea dictumst. Fusce ornare lacus non sem ornare egestas. Duis egestas quam vitae tristique finibus. Donec non convallis turpis. Vestibulum eu ex sed tortor hendrerit fermentum. Vestibulum aliquet metus magna. Nam quis libero turpis. Nunc venenatis purus eget felis venenatis rutrum. Nullam feugiat ligula sed eros auctor, non iaculis lorem pellentesque.",
    recurring:false,
  }

  return (
    <main className='relative background-overlay min-h-screen flex justify-center'>
      <section className='flex justify-center w-4/5'>
        <div className='flex flex-col justify-center items-center w-full p-10'> 
        <div className="flex flex-1 justify-center my-10 w-full rounded-[50px] relative overflow-hidden">
  {/* Glassmorphism Background Layer */}
  <div className="absolute inset-0 bg-primary bg-opacity-30 backdrop-blur-lg shadow-xl z-0"></div>

  {/* Image Content */}
  <div className="w-3/4 flex justify-center z-10">
    <img className="w-full h-[45vh] object-cover rounded-[30px]" src={event.poster} alt="Event Poster" />
  </div>
</div>

          <div className='flex flex-col flex-1 gap-4 self-start w-full'>
    
          {/* <p>{event.date}</p> */}
          <div className='flex justify-between w-full'>
            <p className='text-[5vw] text-primary'>{event.name}</p>
            <div className='border-solid bg-white p-3 border-2 rounded-xl flex flex-col items-center w-[40%]'>
              <p className='label'>Free</p>
              <div className='flex justify-center w-full'>
                <button className="bg-primary text-2xl p-2 rounded-lg text-white w-[95%]">
                  Register
                </button>
              </div>
            </div>
          </div>
         
          <p className='text-xl overflow-hidden text-ellipsis whitespace-normal max-h-40'>{event.summary}</p>
          <p className='label'>Date and time</p>
          <div className='flex gap-2 text-[2vw] text-primary'>
            <LuCalendarCheck2 />
            <p>{event.date}</p>
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
  )
}

export default Event