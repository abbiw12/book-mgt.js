const express = require("express");
const prisma = require("../context");
const { getAllBooks, createBook, upDateBook, deleteBook } = require("../controllers/book_mgtcontroller");
const BookRouter = express.Router()


BookRouter.get("/get-books",getAllBooks);
BookRouter.post("/create-books",createBook)
BookRouter.put("/update-books/:id", upDateBook)
BookRouter.delete("/delate-book/:id",deleteBook)

module.exports = BookRouter;