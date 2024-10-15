import React from 'react'
import { Link } from 'react-router-dom'

const Card = ( {event}) => {
  const {name, location, date, fee, poster, recurring} = event

  return (
      <Link to="/events" className='flex-col mx-10 w-[250px] h-full max-h-[300px]'>
        <div className='h-1/2 flex-1 max-w-full'>
          <img src={poster} className='w-full rounded-tl-[40px] rounded-tr-[40px] h-full object-cover'></img>
        </div>

      <div className='bottom-half bg-white-400 rounded-bl-[40px] rounded-br-[40px] p-5 shadow-lg'>
          <p className='text-3xl text-[#00498f]'>{name}</p>
          <p className='text-xl'>{date}</p>
          <p className='text-xl'>{location}</p>
          <p className='text-xl'>{fee}</p>

          <div className='flex justify-end'>
            <button className='bg-primary text-white text-2xl p-4 rounded-[20px]'>
              Register
            </button>

            {/* <button>
              Remove
            </button> */}
          </div>
      </div>
    </Link>
  )
}

export default Card