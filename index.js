//EXPRESS
const express = require('express');
const app = express();

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
const registerRoute = require('./routes/register');
app.use('/api/user', registerRoute);

const loginRoute = require('./routes/login');
app.use('/api/user', loginRoute);

const profileRoute = require('./routes/get.profile')
app.use('/api/user', profileRoute);

const postTurdRoute = require('./routes/post.turd')
app.use('/api/user/postturd', postTurdRoute);

const allTurdsRoute = require('./routes/get.turds')
app.use('/api/dashboard', allTurdsRoute);

const allUsersRoute = require('./routes/get.allUsers')
app.use('/api/allusers', allUsersRoute)

// CONNECT SERVER
app.listen(5000, ()=>{
    console.log('Server listening on port 3000')
})