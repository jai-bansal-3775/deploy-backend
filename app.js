const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const itemRoutes = require('./routes/itemRoutes');
require('dotenv').config()
const PORT = process.env.PORT || 5000
const DB_URL = process.env.DB_URL
const app = express();
app.use(cors());
app.use(express.json());

// const app = express();
app.use(express.static('frontend'));


mongoose.connect(DB_URL, {
   
});

app.use('/auth', authRoutes);
app.use('/api', itemRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
