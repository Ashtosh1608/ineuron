const dotenv = require("dotenv")
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
app.use(cookieParser())

dotenv.config({ path: './config.env' });

require('./db/conn');
// const User = require('./model/userSchema');

app.use(express.json());
// we link the router files to make our route easy
app.use(require('./router/auth'));

const PORT = process.env.PORT;

// Middleware

// const middleware = (req,res,next) => {
//     console.log('Hello my Middleware');
//     next();
// }


////////////// my....



app.get('/', (req, res) => {    
    res.send(`Hello world from the server`);
}) ;
// app.get('/about', middleware , (req, res) => {    
//     res.send(`Hello world About from the server`);
// }) ;
app.get('/contact', (req, res) => {  
    res.cookie("aTest", "ashtoshtoken")
    res.send(`Hello world Contact from the server`);
}) ;
app.get('/signin', (req, res) => {    
    res.send(`Hello world Login from the server`);
}) ;
app.get('/signup', (req, res) => {    
    res.send(`Hello world Registration from the server`);
}) ;


app.listen(PORT, () => {
    console.log(`Server is running at port no ${PORT}`);
})