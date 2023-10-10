const express = require("express")
const booksRoutes = require("./routes/books")
const mongoose = require('mongoose')
const Book = require('./models/Books.js');

const app = express()

const SERVER_PORT = 3001

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

//connects to my running mongo container
mongoose.connect('mongodb://localhost:27017/fullstack-mongo', { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



app.use("/library", booksRoutes)

app.route("/")
    .get((req, res) => {
        res.send("<h1>MogoDB + Mongoose Example</h1>")
    })

app.listen(SERVER_PORT, () =>{
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})