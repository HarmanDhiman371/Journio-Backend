const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config(); 
// const bodyParser = require('body-parser'); 
const bookingRoutes = require('./routes/booking');
const authRoutes = require('./routes/auth');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'Public', 'journio')));

app.use('/api', bookingRoutes);
app.use('/api/auth', authRoutes);


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'journio', 'index.html'));
});
app.get('/hotel', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'journio', 'hotel.html'));
});
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'journio', 'login.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
