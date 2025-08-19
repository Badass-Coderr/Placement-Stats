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

// Define Schema
const placementSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    Roll_no: { type: String }, // Made required to avoid `null` duplicates
    Year: { type: String, required: true },
    Course: { type: String, required: true }, 
    Branch: { type: String, required: true },
    Specialization: { type: String },
    Company: { type: String, required: true }
}, { timestamps: true }); // Add timestamps for tracking insertion time

// Unique Compound Index
placementSchema.index({ Name: 1, Year: 1, Course: 1, Branch: 1, Specialization: 1, Company: 1 }, { unique: true });

// Define Models
const Table_21 = mongoose.model("Placement_21", placementSchema);
const Table_20 = mongoose.model("Placement_20", placementSchema);
const Table_23 = mongoose.model("Placement_23", placementSchema);

// Insert Data After Connection
// main().then(async () => {
//     try {
//         await Table_23.insertMany(data);
//         console.log("✅ Data successfully inserted into Placement_21");
//     } catch (err) {
//         console.error("❌ Data Insertion Error:", err);
//     } finally {
//         mongoose.connection.close(); // Close connection after insertion
//     }
// });
module.exports = { Table_21, Table_20, Table_23 };

