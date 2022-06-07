//EXPRESS
const express = require('express');
const app = express();

const loginRoute = require('./routes/login');
const registerRoute = require('./routes/register');
const postRoutes = require('./routes/posts');
//DOTENV
require('dotenv').config();
const DB_URI = process.env.DB_URI;

//MONGOOSE
const mongoose = require('mongoose');
const main = () => mongoose.connect(DB_URI, ()=>{console.log('Connected to DB!')});
main().catch(err => console.log(err));


//MIDDLEWARE
app.use(express.json());

//ROUTES

app.use('/api/user', loginRoute);
app.use('/api/user', registerRoute);
app.use('/api/posts', postRoutes);


app.listen(3000, ()=>{
    console.log('Server listening on port 3000')
})