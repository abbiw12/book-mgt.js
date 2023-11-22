const express = require("express");
const prisma = require("../context");
const { createUser, getAllUsers, upDateUser, deleteUser } = require("../controllers/usercontroller");
const userRouter = express.Router();


userRouter.post("/create-User",createUser)
userRouter.get("/all-users",getAllUsers)
userRouter.put("/update-user/:id",upDateUser)
userRouter.delete("/delete-user/:id",deleteUser) 


module.exports = userRouter;