const prisma = require("../context")
const bcrypt =require('bcrypt')

const createUser = async(req,res) => {
    const {userName,email,password} =req.body

    const hashPassword =await bcrypt.hash(password,10)
    // console.log(req.body)
    const newBooks = await prisma.user.create({
        data: {
            userName,
            email,
            password:hashPassword
        },
        select: {
            userName: true,
            email:true
        }
        
    
    })
    res.send(newBooks)
}

const getAllUsers = async(req,res) =>{
    const allUsers =await prisma.user.findMany({
        select: {
            userName:true,
            email: true
        }
    });

    res.json(allUsers)
}
const upDateUser =async(req,res) => {
    const { userName, email, password } = req.body;
    const { id } = req.params;

    const updatedUser = await prisma.user.update({
      where: {
        id: parseInt(id),
      },
      data: {
        userName,
        email,
        password,
      },
      select: {
        userName: true,
        email:true
      }
    });
    res.json(updatedUser)
}
const deleteUser = async(req,res) => {
    const id = req.params.id
    const existing = await prisma.user.findUnique({
        where: {
            id: parseInt(id)
        }
    })

    if(existing){
        return await prisma.user.delete(
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
    createUser,
    getAllUsers,
    upDateUser,
    deleteUser
}