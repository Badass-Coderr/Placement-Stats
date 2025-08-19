const express = require('express');
const { Table_21, Table_20, Table_23 } = require('./CampusPlacementData.js');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send("It is working");
});
app.get('/detail/:year', async (req, res) => {
  try {
    const { year } = req.params;
    console.log(`📡 Fetching data for Placement_${year}...`);

    let table;
    if (year === '2023') table = Table_23;
    else if (year === '2021') table = Table_21;
    else if (year === '2020') table = Table_20;
    else return res.status(400).json({ error: "Invalid year selected" });

    const data = await table.find({}, { Name: 1, Branch: 1, Company: 1, _id: 0 });
    if (!data.length) return res.status(404).json({ message: `No placement data found in Placement_${year}` });

    res.json(data);
  } catch (error) {
    console.error(`❌ Error fetching data for Placement_${year}:`, error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Route to fetch data from Placement_21
app.get('/detail21', async (req, res) => {
  try {
    console.log("📡 Fetching data from Placement_21...");
    const data = await Table_21.find({}, { Name: 1, Branch: 1, Company: 1, _id: 0 });
    if (!data.length) {
      return res.status(404).json({ message: "No placement data found in Placement_21" });
    }
    res.json(data);
  } catch (error) {
    console.error("❌ Error fetching data from Placement_21:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to fetch data from Placement_20
app.get('/detail20', async (req, res) => {
  try {
    console.log("📡 Fetching data from Placement_20...");
    const data = await Table_20.find(
      { Name: { $ne: null }, Company: { $ne: null }, Branch: { $ne: null } }, 
      { Name: 1, Branch: 1, Company: 1, _id: 0 }
    );
        if (!data.length) {
      return res.status(404).json({ message: "No placement data found in Placement_20" });
    }
    res.json(data);
  } catch (error) {
    console.error("❌ Error fetching data from Placement_20:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to fetch data from Placement_23
app.get('/detail23', async (req, res) => {
  try {
    console.log("📡 Fetching data from Placement_23...");
    const data = await Table_23.find({}, { Name: 1, Branch: 1, Company: 1, _id: 0 });
    if (!data.length) {
      return res.status(404).json({ message: "No placement data found in Placement_23" });
    }
    res.json(data);
  } catch (error) 
    console.error("❌ Error fetching data from Placement_23:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to fetch data from all tables combined
app.get('/all-details', async (req, res) => {
  try {
    console.log("📡 Fetching data from all placement tables...");
    
    const data21 = await Table_21.find({}, { Name: 1, Branch: 1, Company: 1, _id: 0 });
    const data20 = await Table_20.find({}, { Name: 1, Branch: 1, Company: 1, _id: 0 });
    const data23 = await Table_23.find({}, { Name: 1, Branch: 1, Company: 1, _id: 0 });

    const allData = [...data21, ...data20, ...data23];

    if (!allData.length) {
      return res.status(404).json({ message: "No placement data found in any table" });
    }

    res.json(allData);
  } catch (error) {
    console.error("❌ Error fetching data from all tables:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// MongoDB Connection
const connectToDatabase = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/NITW-Placement');
    console.log("✅ Connected to MongoDB");

    // Start the server only after successful database connection
    app.listen(5000, () => console.log("🚀 Server running on port 5000"));
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1);
  }
};

connectToDatabase();
