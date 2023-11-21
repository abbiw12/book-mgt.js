const prisma = require("../context")


const createUser = async(req,res) => {
    const {userName,email,password} =req.body
    // console.log(req.body)
    const newBooks = await prisma.user.create({
        data: {
            userName,
            email,
            password
        }
      
    })
    res.send(newBooks)
}

const getAllUsers = async(req,res) =>{
    const allUsers =await prisma.user.findMany();
    res.json(allUsers)
}


module.exports = {
    createUser,
    getAllUsers
}