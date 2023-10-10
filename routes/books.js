const express = require("express")
const Book = require('../models/Books.js');
const routes = express.Router()

//Get All Books
// routes.get("/books", async (req, res) => {
//     try {
//         const allBooks = await Book.find();
//         res.send({ books: allBooks });
//     } catch (err) {
//         res.status(500).send({ message: 'Could not fetch books', error: err });
//     }
// });

routes.get("/books", async (req,res) => {
    
    try{
        const bookList = await Book.find({});
        res.status(200).send(bookList);
    }catch(error){
        res.status(500).send(error)
    }


})

//Add NEW Book
routes.post("/books", (req, res) => {
    res.send({message: "Add NEW Book"})
})

//Update existing Book By Id
routes.post("/book/:bookid", (req, res) => {
    res.send({message: "Update existing Book By Id"})
})

//Delete Book By ID
routes.delete("/book/:bookid", (req, res) => {
    res.send({message: "Delete Book By ID"})
})

//Get Book By ID
routes.get("/book/:bookid", (req, res) => {
    res.send({message: "Get Book By ID"})
})

//Get All Books in sorted order
routes.get("/books/sort", (req, res) => {
    res.send({message: "Get All Books in sorted order"})
})

module.exports = routes