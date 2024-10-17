const express = require('express');
const router = express.Router();
const Event = require('./models/Event');
const mongoose = require("mongoose")


// Route to get a specific event by ID
router.get("/:id", respondWithEvent);
// Route to get all events
router.get("/", respondWithEvents);





async function respondWithEvents(req, res) {
    try {
        const events = await Event.find(); // Fetch all events from the database
        // console.log(events)
        res.status(200).json(events); // Respond with the events as JSON
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to retrieve events." }); // Handle error
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
        res.status(200).json(event); // Respond with the event data
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to retrieve the event." }); // Handle error
    }
}

module.exports = router; // Export the router for use in other files
