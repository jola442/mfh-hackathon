import React from 'react'
import eventImage from '../assets/images/event1.jpeg'
import { Link, useNavigate } from 'react-router-dom'


  
  const EventCard = ({ eventName, date, photo }) => {
    const navigate = useNavigate();
    const handleClick=()=>{
        navigate('/EventPage', {state: {eventName, date, eventImage}})
    }
    return(

        <button onClick={handleClick} style={{display: 'flex', height: 250,width: 180, backgroundColor: 'white', marginBottom: 30, borderRadius: 30, flexDirection: 'column', alignItems: 'center'}}>
      <img src={eventImage} alt={`${eventName} photo`} style={{backgroundColor: 'yellow', height: '40%', marginBottom: 30, borderTopLeftRadius: 10, borderTopRightRadius: 10, width: '100%'}} />
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <h2 className='text-xl'>{eventName}</h2>
        <p style={{color: 'black'}}>{date}</p>
        <p style={{color:'black'}}>{'1724 Bank Street'}</p>
        <p style={{color:'black'}}>{'Free'}</p>
      </div>
      
    </button>
    )
    
    };
  
  export default EventCard;
