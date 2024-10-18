const express = require('express');
const router = express.Router();
const Event = require('./models/Event');
const mongoose = require("mongoose")
const multer = require("multer")
const sanitizeHtml = require('sanitize-html');


// Multer configuration: Store uploaded file in memory as a buffer
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Route to get a specific event by ID
router.get("/:id", respondWithEvent);
// Route to get all events
router.get("/", respondWithEvents);
router.post("/", upload.single("photo"), addEvent)

async function addEvent(req, res){
    try {
        const { name, location, fee, date, summary, description, isRecurring } = req.body;
        const sanitizedDescription = sanitizeHtml(description);

        // Create a new event with binary photo data from the uploaded file
        const event = new Event({
            name,
            location,
            fee,
            date,
            summary,
            description:sanitizedDescription,
            isRecurring,
            photo: req.file ? req.file.buffer.toString('base64') : null, 
        });

        await event.save(); // Save event to the database

        res.status(201).json({ message: 'Event added successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error adding event' });
    }
  };

async function respondWithEvents(req, res) {
    try {
        const events = await Event.find(); // Fetch all events from the database
    // Convert photo buffer to base64 for each event
    const eventsWithImages = events.map((event) => ({
        ...event._doc,
        photo: event.photo.startsWith("src")?event.photo:`data:image/jpeg;base64,${event.photo.toString('base64')}`
      }));
  
      res.status(200).json(eventsWithImages);
    } catch (error) {
      console.error('Error fetching events:', error);
      res.status(500).json({ message: 'Error fetching events' });
    }
}

async function respondWithEvent(req, res) {
    const { id } = req.params; // Get the event ID from the request parameters

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid event ID format." });
        }
        const event = await Event.findById(id); // Fetch the event by ID
        if (!event) {
            return res.status(404).json({ message: "Event not found." }); // Handle case where event doesn't exist
        }
        // console.log(event)
        event.photo = event.photo.startsWith("src")?event.photo:`data:image/jpeg;base64,${event.photo.toString('base64')}`
        res.status(200).json(event); // Respond with the event data
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to retrieve the event." }); // Handle error
    }
}

module.exports = router; // Export the router for use in other files
