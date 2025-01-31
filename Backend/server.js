const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes'); 
const app = express();


app.use(express.json()); 
app.use(cors()); 


app.use('/api/auth', authRoutes);


mongoose.connect('mongodb+srv://Arjun:arjun@movie.myyad.mongodb.net/?retryWrites=true&w=majority&appName=movie', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
