const express = require("express");
const prisma = require("../context");
const BookRouter = express.Router()


BookRouter.get("/get-books",async (req,res) => {
    const allBooks = await prisma.books.findMany();
    res.json(allBooks)
    
});
BookRouter.post("/create-books", async(req,res) => {
    const {name,sold,authorId} = req.body;
    // console.log(req.body)
    const newBook = await prisma.books.create({
        data:{
            name,
            sold,
            authorId
        }
    })
    res.json(newBook);
})
BookRouter.put("/update-books/:id", async(req,res) => {
    const {name,sold} =req.body
    const {id} =req.params
    console.log(req.params)
    const updatedBook = await prisma.books.update({
        where:{
            id: parseInt(id)
        }, 
        data: {
           name,
           sold
        }
            
    })
    res.json(updatedBook)
})
BookRouter.delete("/delate-book/:id",async(req,res) => {
    const id = req.params.id
    const existing = await prisma.books.findUnique({
        where: {
            id: parseInt(id)
        }
    })

    if(!existing){
        return await prisma.books.delete(
            {
            where: {
                id: parseInt(id)
            }
        }
        )
    } else {
        res.json("Id does not exist")
    }
})

module.exports = BookRouter;