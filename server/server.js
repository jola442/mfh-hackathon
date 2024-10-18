const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const usersRouter = require("./usersRouter");
const eventsRouter = require("./eventsRouter");
const User = require("./models/User");
const session = require('express-session');
const app = express();
const uri = "mongodb+srv://jolaajayi:jYYBYlnQPEccXwxN@cluster0.pllvr.mongodb.net/";


// const corsOptions = {
//     origin: 'http://localhost:5173', // Your frontend's origin
//     credentials: true, // Allow cookies and credentials
//     optionsSuccessStatus: 200, // Handle legacy browsers
//   };
// app.use(cors(corsOptions));

// Middleware setup
app.use(cors());
app.use(express.json()); // To parse JSON request bodies
// Initialize session middleware
app.use(session({
    secret: 'your-secret-key', // Replace with a strong secret
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60 * 60 * 24000 // Session duration (24 hours)
    }
}));

// Function to handle user sign-in
async function handleSignIn(req, res) {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        user.comparePassword(password, (err, isMatch) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: "Internal server error" });
            }

            if (!isMatch) {
                return res.status(401).json({ message: "Invalid credentials" });
            }

            // Store user information in the session
            req.session.user = { username: user.username, admin: user.admin, events: user.events };
            res.status(200).json({ message: "Login successful", user: req.session.user });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

const handleSignOut = async (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).json({ message: "Failed to log out" });
        }
        res.status(200).json({ message: "Logout successful" });
    });
};


// Function to handle user registration
async function handleRegistration(req, res) {
    const { username, password } = req.body;

    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(409).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}


// Route setup
app.use("/users", usersRouter);
app.use("/events", eventsRouter);
app.post("/signIn", handleSignIn);
app.post("/register", handleRegistration);
app.post('/logout', handleSignOut);

// MongoDB connection and server listening
async function main() {
    try {
        await mongoose.connect(uri);
        console.log('Database is connected successfully');

        app.listen(process.env.PORT || 5000, () => {
            console.log("Server listening at http://localhost:5000");
        });
    } catch (err) {
        console.error("Database connection error:", err);
    }
}



// Start the server
main();
