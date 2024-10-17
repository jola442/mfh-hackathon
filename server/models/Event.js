const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  fee: {
    type: Number,
    required: true,
    min: 0,
  },
  date: {
    type: Date,
    required: true,
  },
  photo: {
    type: String, // Stores Base64 string for image
    required: true,
  },
  summary: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String, // Can store HTML or rich text content
    required: true,
  },
  isRecurring: {
    type: Boolean,
    default: false,
  },
});


const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
