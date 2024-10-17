const express = require('express');
const User = require('./models/User');
const router = express.Router();

// GET all users
router.get("/", respondWithUsers);

// GET a specific user by username
router.get("/:username", respondWithUser);

// PUT - update events for a specific user
router.put("/:username/events", updateEvents);

// Handler: Get all users
async function respondWithUsers(req, res) {
  try {
    const users = await User.find().populate('events'); // Populate events
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving users", error });
  }
}

// Handler: Get user by username
async function respondWithUser(req, res) {
  const { username } = req.params;

  try {
    const user = await User.findOne().byUsername(username).populate('events');
    if (!user) {
      return res.status(404).json({ message: `User '${username}' not found` });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving user", error });
  }
}

// Handler: Update user events
async function updateEvents(req, res) {
    const { username } = req.params;
    const { events } = req.body; // Array of event IDs

    try {
        const user = await User.findOne().byUsername(username);
        if (!user) {
            return res.status(404).json({ message: `User '${username}' not found` });
        }

        
        user.events = events

        await user.save(); // Save updated user
        console.log(user)

        res.status(200).json({ message: "Events updated successfully", user });
    } 

    catch (error) {
        res.status(500).json({ message: "Error updating events", error });
    }
}

module.exports = router;
