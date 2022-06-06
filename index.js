//EXPRESS
const express = require('express');
const app = express();

const authRoutes = require('./routes/auth');
//DOTENV
require('dotenv').config();
const DB_URI = process.env.DB_URI;

//MONGOOSE
const mongoose = require('mongoose');
mongoose.connect(DB_URI, ()=>{console.log('Connected to DB!')});


//MIDDLEWARE
app.use(express.json());

//ROUTES

app.use('/api/user', authRoutes);


app.listen(3000, ()=>{
    console.log('Server listening on port 3000')
})