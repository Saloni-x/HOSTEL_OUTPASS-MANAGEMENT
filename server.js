const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const outpassRoutes = require('./routes/outpass');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/hosteloutpass', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"));

app.use('/api/auth', authRoutes);
app.use('/api/outpass', outpassRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));