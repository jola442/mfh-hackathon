import React, { useState, useRef } from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ScrollAnimation from '../../components/ScrollAnimation';

const Admin = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [fee, setFee] = useState('');
  const [date, setDate] = useState('');
  const [photo, setPhoto] = useState(null);
  const [summary, setSummary] = useState('');
  const [description, setDescription] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);
  const quillRef = useRef(null); // Use ref for ReactQuill instance
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const addEvent = async () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('location', location);
    formData.append('fee', fee);
    formData.append('date', date);
    formData.append('summary', summary);
    formData.append('description', description);
    formData.append('isRecurring', isRecurring);
    formData.append('photo', photo); // Append photo to form data

    try {
      const response = await axios.post('http://localhost:5000/events', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Added event successfully!');
      navigate('/');
      console.log(response.data.message);
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  return (
    <ScrollAnimation>
      <div className="flex justify-center w-full mb-[10vh]">
        <div className="my-20 py-5 px-10 flex flex-col gap-2 w-1/2 max-lg:w-4/5">
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

          <label className="label" htmlFor="location">Location</label>
          <input
            id="location"
            className="input-field"
            type="text"
            placeholder="Enter event location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
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
          <div className="photo-input-wrapper">
            <input
              id="photo"
              className="text-2xl"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>

          <label className="label" htmlFor="summary">Summary</label>
          <input
            id="summary"
            className="input-field"
            type="textarea"
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
              ref={quillRef} // Attach the ref to ReactQuill
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
              className="button bg-primary hover:bg-blue-500"
              onClick={addEvent}
            >
              Add Event
            </button>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default Admin;
