require('dotenv').config()
const prisma = require('../context');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userLogin = async(req,res)=> {
    const {email, password  } = req.body;
     const user = await  prisma.user.findUnique({
           where: {
               email 
           }, 
           select: {
               password: true
           }  
     })
      const accessToken= jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
      res.json({accessToken: accessToken})

      const authenticateToken =  (req,res,nex) => {
            
      } 

    if (!user) return res.status(403).json({ msg: "Invalid username or password" })

    const jwtToken= jwt.sign({ foo: 'bar' }," process.env.secret");

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    
    if(!isPasswordMatch) return res.status(403).json({msg: "Invalid username or password"})

    return res.status(200).json({data:{ token:jwtToken},msg: "login successful"})
}

module.exports= {
    userLogin
}







