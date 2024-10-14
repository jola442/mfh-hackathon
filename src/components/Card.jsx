import React from 'react'

const Card = ( {event}) => {
  const {name, location, date, fee, poster, recurring} = event

  return (
      <div className='flex-col mx-10 w-[250px]'>
        <div className='h-1/2'>
          <img src={poster} className='w-full rounded-tl-[10px] rounded-tr-[10px] h-full'></img>
        </div>

      <div className='bottom-half bg-white-400 rounded-bl-[10px] rounded-br-[10px] p-5 shadow-lg'>
          <p className='text-3xl text-[#00498f]'>{name}</p>
          <p className='text-xl'>{date}</p>
          <p>{location}</p>
          <p>{fee}</p>

          <div className='flex justify-end'>
            <button className='bg-primary text-white p-3 rounded-[20px]'>
              Register
            </button>

            {/* <button>
              Remove
            </button> */}
          </div>
      </div>
    </div>
  )
}

export default Card