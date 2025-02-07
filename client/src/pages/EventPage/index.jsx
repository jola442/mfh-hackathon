import React from 'react'
import {useLocation} from 'react-router-dom'
import eventImage from '../../assets/images/weekly_prayers.jpg'


const EventPage = () => {
    const location = useLocation();
    const {eventName, date, photo} = location.state 
    console.log(photo)
    const handleClick = () => {
      window.location.href = "https://mfhyoungadults.fillout.com/t/pVZgPJJLMRus";
    };
  
  return (
    <div style={{display: 'flex', justifyContent: 'center', flex: 1, flexDirection: 'column',padding: 30 }}>
       

       
            <div style={{display: 'flex', backgroundColor: 'grey', width: '90%', alignItems: 'center', marginBottom: '5%'}}>
            <img
                src={eventImage}
                alt={eventName}
                style={{ width: '100%',objectFit:'fill', borderWidth: 2 }}
            />
           
            </div>

             <div style={{display: 'flex', flexDirection: 'column'}}>
                <div>
                <h1 style={{fontSize: 44}}>{eventName}</h1>
                <h1>Date</h1>
                <h1>{date}</h1>
                <h1>Time</h1>
                <h1>{'7:00 PM'}</h1>
                <h1>Location</h1>
                <h1>Church - 1724 Bank Street</h1>
                </div>
                
                <div style={{marginLeft: '50%'}}>
                <button onClick={handleClick} style={{width: '100%',backgroundColor: 'blue', borderRadius: 20, padding: 30, marginTop: '10%', color: 'white'}}>Register</button>
                </div>
                
             </div>
        
    </div>
  )
}
export default EventPage;