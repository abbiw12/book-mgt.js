const { PrismaClient } = require("@prisma/client");
const express = require("express");
const BookRouter = require("./routes/book_mgt");
const userRouter = require("./routes/user");
const app =express();
const portNumber = 4001
const prisma = new PrismaClient();
app.use(express.json()) 




  
//   app.use("/users", userRoute);
  app.use("/book", BookRouter)
  app.use("/user", userRouter)

app.listen(portNumber,() => {
    console.log(`server is listeing on port${portNumber}`)
})