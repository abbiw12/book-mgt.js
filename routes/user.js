const express = require("express");
const prisma = require("../context");
const { createUser, getAllUsers } = require("../controllers/usercontroller");
const userRouter = express.Router();


userRouter.post("/create-User",createUser)
userRouter.get("/all-users",getAllUsers)


userRouter.put("/update-user/:id",async(req,res) => {
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
    });
    res.json(updatedUser)
})

userRouter.delete("/delete-user/:id",async(req,res) => {
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
}) 


module.exports = userRouter;