import { Link, useNavigate } from 'react-router-dom'
import ShareButton from './ShareButton'

const options = { year: 'numeric', month: 'long', day: 'numeric' };

const Card = ( {event} ) => {
  const {name, location, date, fee, recurring, poster, formLink} = event
  const navigate = useNavigate();
  const handleClick = (event) => {
    event.preventDefault();
    window.location.href = formLink;
};
  return (
      <Link to={"/events/"+ name} className='flex-col mx-10 text-ellipsis w-1/5'>
        <div className='h-1/2 flex-1 overflow-hidden'>
          <img src={[poster]} className='rounded-tl-[40px] rounded-tr-[40px] w-full h-full object-cover'></img>
        </div>

      <div className='bottom-half bg-white-400 rounded-bl-[40px] rounded-br-[40px] p-5 shadow-lg'>
          <p className='text-responsive text-[#00498f] h-10px text-ellipsis whitespace-nowrap overflow-hidden'>{name}</p>
          <p className='text-xl'>
          {date instanceof Date 
            ? date.toLocaleDateString('en-US', options) 
            : date}
        </p>
          <p className='text-xl'>{location}</p>
          <p className='text-xl'>{fee == 0?"Free":"$"+fee}</p>

        <div className={`flex ${!recurring?"justify-around":"justify-end"}`}>
            <ShareButton></ShareButton>
            {!recurring && <button className='button bg-primary hover:bg-blue-600' onClick={handleClick}>
              Register
            </button>}

            {/* {user && user.events.includes(_id) && <button className='button bg-secondary hover:bg-red-700' onClick={unRegisterForEvent}>
              Unregister
            </button>} */}

            {/* <button>
              Remove
            </button> */}
          </div>
      </div>
    </Link>
  )
}

export default Card