const { PrismaClient } = require("@prisma/client");
const express = require("express");
const BookRouter = require("./routes/book_mgt");
const userRouter = require("./routes/user");
const app =express();
const session = require("express-session");
const loginRouter = require("./routes/logins");
const portNumber = 4001
app.use(express.json())  




const store = new session.MemoryStore();
app.use("/login",loginRouter)
  app.use("/book", BookRouter)
  app.use("/user", userRouter)
  app.use(session({
    secret: "broni1",
    cookie: {maxAge:178888,secure:true,sameSite: "none"},
    resave: false,
    saveUninitialized: false,
    store,
  }));
app.listen(portNumber,() => {
    console.log(`server is listening on port${portNumber}`)
})