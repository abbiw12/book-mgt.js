const express = require("express");
const { userHomePage, aboutUser, userContact, usersID } = require("../controllers/variousUsersBookcontroller");
const UserRouter = express.Router();

    Router.get("/user-homepage",userHomePage)
Router.get("/user-about",aboutUser)
Router.get("/user-contact",userContact)
Router.put("/books/:userID",usersID)


module.exports = UserRouter;