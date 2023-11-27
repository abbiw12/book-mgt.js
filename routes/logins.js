const express = require('express');
const prisma = require('../context');

const loginRouter = express.Router()


Router.post("/User-login",async(req,res)=> {
    const {userName, Password} = req.body;
   database.users.findByUsername(userName, (err,user) => {
    if(!user) return res.status(403).json({msg: "no user found!"})
    if(user.password === password) {
        req.session.user = {
            userName,
            Password
        }
        console.log(req.session)
        res.redirect("/user");
    } else {
        res.status(403).json({msg:"Invalid username or password"})
    }
   })
})