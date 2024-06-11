const express = require('express');
const bodyParser= require('body-parser');
const dbConfig=require('./config/db.config')
const mongoose=require('mongoose')
const passport = require('passport');
const session = require('express-session');
const auth= require('./src/routes/auth.route')
const salleRouter= require('./src/routes/salle.route')
const reservationRouter= require('./src/routes/reservation.route')

const app=express();

app.use(bodyParser.json())

const port=4000;




app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }));

// Configurer Passport.js pour l'authentification
app.use(passport.initialize());
app.use(passport.session());



app.use('/auth',auth)
app.use('/api/salles', salleRouter)
app.use('/api/reservation', reservationRouter)


//connection data base
mongoose.connect(dbConfig.url).then(()=>{
    console.log("sussessfuly connection to database");

}).catch(err=>{
    console.log('could not connect to the database',err);
    process.exit();
})



app.listen(port,()=>{console.log(`node server is running in port ${port}`)})