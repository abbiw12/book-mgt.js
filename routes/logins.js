const express = require("express");
const prisma = require("../context");
const { userLogin } = require("../controllers/loginsController");

const loginRouter = express.Router()
loginRouter.post("/User-login",userLogin)

module.exports = loginRouter

