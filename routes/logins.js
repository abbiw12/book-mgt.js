const express = require("express");
const { userLogin } = require("../controllers/loginsController");

const loginRouter = express.Router()
loginRouter.post("/User-login",userLogin)

module.exports = loginRouter;