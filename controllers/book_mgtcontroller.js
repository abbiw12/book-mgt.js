const prisma = require("../context");

const getAllBooks = async (req,res) => {
    const allBooks = await prisma.books.findMany();
    res.json(allBooks)
    
}
const createBook = async(req,res) => {
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
}
const upDateBook = async(req,res) => {
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
}
const deleteBook = async(req,res) => {
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
}

module.exports = {
    getAllBooks,
    createBook,
    upDateBook,
    deleteBook
}