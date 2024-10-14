import { useState } from 'react'
import Nav from '../../components/nav'
import { events } from '../../constants';
import Card from '../../components/Card';
import { v4 as uuidv4 } from 'uuid'

function Home() {


  return (
    <main className='relative background-overlay min-h-screen'>
      <section className='flex justify-center'>
        <div className='flex-col items-start'>
          <div className="bento-box">
              What does my Father's House have in store for you?
          </div>
        <section className='event-box font-fjalla text-primary'>
          <div className='text-4xl mx-10 my-10'>Upcoming Events</div>
          <div className='events-container flex'>
            {events.map( (event) =>(
              !event.recurring && <Card key={uuidv4()} event={event}></Card>
            ))}
          </div>

        </section>

        <section className="flex justify-start gap-2">
          <div className="bento-box w-full">
            Join us for our weekly events!
          </div>

          <div className="bento-box w-full">
            Don't miss a beat!
          </div>

      </section>

    <div className='text-4xl mx-10 text-primary my-10'>Recurring Events</div>
      <div className='events-container flex'>
          {events.map( (event) =>(
            !event.recurring && <Card key={uuidv4()} event={event}></Card>
          ))}
      </div>

    </div>
    

    </section>
  
  </main>
  )
}

export default Home
