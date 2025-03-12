require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB Connection (Updated Code)
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected Successfully!"))
    .catch(err => console.error("MongoDB Connection Failed:", err));

app.get('/', (req, res) => {
    res.send('Express Server is running and MongoDB is connected!');
});

app.listen(PORT,() => {

    console.log(`Server is running on port ${PORT}`);
});
