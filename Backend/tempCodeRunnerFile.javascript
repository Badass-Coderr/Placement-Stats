const mongoose = require('mongoose');
//const data = require('./Table_21_data.js'); // Ensure this path is correct
const data = require('./Table_23_data.js');
// Function to connect to MongoDB
async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/NITW-Placement', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ Connected to MongoDB");
    } catch (err) {
        console.error("❌ MongoDB Connection Error:", err);
        process.exit(1); // Exit process if connection fails
    }
}

