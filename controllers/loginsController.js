const express = require('express');
const prisma = require('../context');


const userLogin = async(req,res)=> {
    const {email, Password  } = req.body;
     const user =await  prisma.user.findUnique({
           where: {
               email 
           },
           select: {
               password: true
           }
     })
    if (!user) return res.status(403).json({ msg: "Invalid username or password" })

    const isPasswordMatch = await bcrypt.compare(Password, user.password);

    if(!isPasswordMatch) return res.status(403).json({msg: "Invalid username or password"})

    return res.status(200).json({msg: "login success"})
}

module.exports= {
    userLogin
}







