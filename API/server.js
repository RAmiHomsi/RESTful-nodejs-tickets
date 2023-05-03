const { json } = require("express");
const express = require("express")
const mongoose = require('mongoose');
const connectDb = require('./config/db')

connectDb()

const ticket = require('./routes/ticket')


const app = express()

// Routes
app.use('/api/tickets', ticket)



// Midelwares
app.use(express.json())
app.use(express.urlencoded({
   extended: true
}))
// 404 page
app.use((req, res) => {
    res.status(404)
  });

app.listen(3000, ()=> console.log("server running on 3000"))