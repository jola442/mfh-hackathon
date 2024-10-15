import { useState } from 'react'
import { events } from '../../constants';
import Card from '../../components/Card';
import { v4 as uuidv4 } from 'uuid'
import Slider from '../../components/Slider';

function Home() {


  return (
    <main className='relative background-overlay min-h-screen overflow-x-hidden flex justify-center'>
      <section className='flex justify-center overflow-x-hidden w-[80vw]'>
        <div className='flex-col items-start overflow-x-hidden'>
          <div className="bento-box">
              What does my Father's House have in store for you?
          </div>
        <section className='event-box font-fjalla text-primary'>
          <div className='text-4xl mx-10 ml-0 my-10'>Upcoming Events</div>
          {/* <div className='events-container flex'>
            {events.map( (event) =>(
              !event.recurring && <Card key={uuidv4()} event={event}></Card>
            ))}
          </div> */}

          <Slider events={events}/>

        </section>

        <section className="flex justify-start gap-2">
          <div className="bento-box w-full">
            Join us for our weekly events!
          </div>

          <div className="bento-box w-full">
            Don't miss a beat!
          </div>
      </section>

    <div className='text-4xl mx-10 ml-0 text-primary my-10'>Weekly Events</div>
    <Slider className="my-20" events={events}/>
   

    </div>
    

    </section>
  
  </main>
  )
}

export default Home
