import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import { UserContext } from '../contexts/UserContext'
import ShareButton from './ShareButton'

const Card = ( {event}) => {
  const {_id, name, location, fee, date, photo} = event
  const {user, setUser} = useContext(UserContext);
  const navigate = useNavigate();
  // console.log(event)

  const registerForEvent = async (e) => {
    e.preventDefault();
    const updatedEvents = [...user.events, _id]; // Create a new array

    try {
      const response = await axios.put(
        `http://localhost:5000/users/${user.username}/events`, 
        { events: updatedEvents }
      );
      console.log(response.data);

      // Create a new user object with updated events and set it in state
      const updatedUser = { ...user, events: updatedEvents };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    } catch (error) {
      console.error('Error updating user events', error);
    }
  };

  const unRegisterForEvent = async (e) =>{
    e.preventDefault();
    const updatedEvents = user.events.filter( (event) => (event !== _id)); 
    try {
      const response = await axios.put(
        `http://localhost:5000/users/${user.username}/events`, 
        { events: updatedEvents }
      );
      console.log(response.data);

      // Create a new user object with updated events and set it in state
      const updatedUser = { ...user, events: updatedEvents };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    } catch (error) {
      console.error('Error updating user events', error);
    }
  };


  return (
      <Link to={"/events/"+_id} className='flex-col mx-10 text-ellipsis w-1/5'>
        <div className='h-1/2 flex-1 overflow-hidden'>
          <img src={photo} className='rounded-tl-[40px] rounded-tr-[40px] w-full h-full object-cover'></img>
        </div>

      <div className='bottom-half bg-white-400 rounded-bl-[40px] rounded-br-[40px] p-5 shadow-lg'>
          <p className='text-responsive text-[#00498f] h-10px text-ellipsis whitespace-nowrap overflow-hidden'>{name}</p>
          <p className='text-xl'>{date}</p>
          <p className='text-xl'>{location}</p>
          <p className='text-xl'>{fee == 0?"Free":"$"+fee}</p>

          <div className='flex justify-around'>
            {!user && <div className='text-secondary text-xl flex justify-center items-center hover:text-primary transition-colors ease-in-out duration-300' onClick={(e) => {e.preventDefault();navigate("/signIn")}}>Sign in to register </div>}
            {/* flex items-center px-4 py-2 bg-blue-500 text-white rounded-md 
hover:bg-blue-600 transition-colors duration-300 */}
            <ShareButton></ShareButton>
            {user && !user.events.includes(_id) && <button className='button bg-primary hover:bg-blue-600' onClick={registerForEvent}>
              Register
            </button>}

            {user && user.events.includes(_id) && <button className='button bg-secondary hover:bg-red-700' onClick={unRegisterForEvent}>
              Unregister
            </button>}

            {/* <button>
              Remove
            </button> */}
          </div>
      </div>
    </Link>
  )
}

export default Card