import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';

const Admin = () => {
  const [name, setName] = useState('');
  const [venue, setVenue] = useState('');
  const [fee, setFee] = useState('');
  const [date, setDate] = useState('');
  const [photo, setPhoto] = useState(null);
  const [summary, setSummary] = useState('');
  const [description, setDescription] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);

  const handleFileChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const addEvent = () => {
    const eventData = {
      name,
      venue,
      fee,
      date,
      photo,
      summary,
      description,
      isRecurring,
    };
    console.log('Event Data:', eventData);
  };

  return (
    <div className="flex justify-center w-full mb-[10vh]">
      <div className="my-20 py-5 px-10 flex flex-col gap-2 w-1/2">
        <p className="text-primary text-4xl max-sm:text-3xl text-center w-full border-b-2 pb-2">
          New Event
        </p>

        <label className="label" htmlFor="name">Event Name</label>
        <input
          id="name"
          className="input-field"
          type="text"
          placeholder="Enter event name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="label" htmlFor="venue">Location</label>
        <input
          id="venue"
          className="input-field"
          type="text"
          placeholder="Enter event location"
          value={venue}
          onChange={(e) => setVenue(e.target.value)}
        />

        <label className="label" htmlFor="fee">Fee</label>
        <input
          id="fee"
          className="input-field"
          type="number"
          placeholder="Enter event fee"
          value={fee}
          onChange={(e) => setFee(e.target.value)}
        />

        <label className="label" htmlFor="date">Date and Time</label>
        <input
          id="date"
          className="input-field"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <label className="label" htmlFor="photo">Event Photo</label>
        <input
          id="photo"
          className="input-field"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />

        <label className="label" htmlFor="summary">Summary</label>
        <input
          id="summary"
          className="input-field"
          type="text"
          placeholder="Enter event summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />

        <label className="label" htmlFor="description">Description</label>
        <div>
          <ReactQuill
            id="description"
            theme="snow"
            value={description}
            onChange={setDescription}
            placeholder="Enter event description..."
            className="custom-quill"
          />
        </div>
  

        <div className="flex items-center gap-2">
          <label className="label" htmlFor="isRecurring">Recurring Event?</label>
          <input
            id="isRecurring"
            className="w-5 h-5"
            type="checkbox"
            checked={isRecurring}
            onChange={(e) => setIsRecurring(e.target.checked)}
          />
        </div>

      <div>
        <button
            className="bg-primary text-white text-2xl p-3 rounded-lg"
            onClick={addEvent}
          >
            Add Event
          </button>
      </div>
    
      </div>
    </div>
  );
};

export default Admin;
