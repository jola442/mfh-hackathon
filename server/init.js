const mongoose = require("mongoose");
const uri = "mongodb+srv://jolaajayi:jYYBYlnQPEccXwxN@cluster0.pllvr.mongodb.net/";
const User = require("./models/User");
const Event = require("./models/Event")


const events = [
    { name: "Big Give", location: "Sandalwood Park", date: "2024-07-31", fee: 0, photo: "src/assets/images/big_give.jpg", isRecurring: false, summary: "Lorem ipsum dolor sit amet.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { name: "She Leads", location: "1724 Bank St", date: "2024-07-22", fee: 0, photo: "src/assets/images/she_leads.jpg", isRecurring: false, summary: "Lorem ipsum dolor sit amet.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { name: "Thanksgiving Potluck", location: "1724 Bank St", date: "2024-05-01", fee: 0, photo: "src/assets/images/potluck.jpg", isRecurring: false, summary: "Lorem ipsum dolor sit amet.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { name: "Back to School BBQ", location: "1724 Bank St", date: "2024-07-25", fee: 0, photo: "src/assets/images/back_to_school_bbq.jpg", isRecurring: false, summary: "Lorem ipsum dolor sit amet.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { name: "Youth Hangout", location: "1724 Bank St", date: "2024-06-17", fee: 0, photo: "src/assets/images/youth_hangout.jpg", isRecurring: true, summary: "Lorem ipsum dolor sit amet.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { name: "Archery Tag", location: "Archery Games", date: "2024-10-16", fee: 35, photo: "src/assets/images/archery_tag.jpg", isRecurring: false, summary: "Lorem ipsum dolor sit amet.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { name: "Gold Cup", location: "RA Centre", date: "2024-09-23", fee: 0, photo: "src/assets/images/gold_cup.jpg", isRecurring: false, summary: "Lorem ipsum dolor sit amet.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { name: "Wednesday Prayer Meeting", location: "1724 Bank St", date: "2024-08-05", fee: 0, photo: "src/assets/images/weekly_prayers.jpg", isRecurring: true, summary: "Lorem ipsum dolor sit amet.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { name: "Saturday Prayer Meeting", location: "1724 Bank St", date: "2024-10-10", fee: 0, photo: "src/assets/images/weekly_prayers.jpg", isRecurring: true, summary: "Lorem ipsum dolor sit amet.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { name: "Children's Connect Group", location: "1724 Bank St", date: "2024-10-11", fee: 0, photo: "src/assets/images/children_connect.jpg", isRecurring: true, summary: "Lorem ipsum dolor sit amet.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { name: "Youth Service", location: "1724 Bank St", date: "2024-10-14", fee: 0, photo: "src/assets/images/youth_service.jpg", isRecurring: true, summary: "Lorem ipsum dolor sit amet.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { name: "Choir Practice", location: "1724 Bank St", date: "2024-10-07", fee: 0, photo: "src/assets/images/choir_practice.jpg", isRecurring: true, summary: "Lorem ipsum dolor sit amet.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { name: "Main Service", location: "1724 Bank St", date: "2024-10-15", fee: 0, photo: "src/assets/images/main_service.jpg", isRecurring: true, summary: "Lorem ipsum dolor sit amet.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
];

try{
    mongoose.connect(uri, {useNewUrlParser: true});
    db = mongoose.connection;

    db.on('connected', function() {
        console.log('database is connected successfully');
    });
    db.on('disconnected',function(){
        console.log('database is disconnected successfully');
    })
    db.on('error', console.error.bind(console, 'connection error:'));

    db.once('open', async function() {
        await mongoose.connection.db.dropDatabase();
        await initialize();
    });
}

catch{
    console.log(err);
}

finally{
    return;
}


async function initialize(){
    try {
        const eventResult = await Event.insertMany(events);
        console.log("Events inserted successfully:", eventResult);
    
        const adminUser = { username: "jolaajayi", password: "rccgmfh", admin: true };
        const userResult = await User.create(adminUser);
        console.log("Admin user inserted successfully:", userResult);
      } catch (err) {
        console.error("Error inserting events and admin:", err);
      } finally {
        mongoose.connection.close();
      }
}

// username: {
//     type: String, 
//     required: true,
//     unique: true,
//     minlength: 3,
//     maxlength: 50
// },
// password: {
//     type: String,
//     required: true
// },
// admin: {
//     type: Boolean,
//     default: false, 
// },

// events: [{type:Schema.Types.ObjectId, ref: 'Event'}],