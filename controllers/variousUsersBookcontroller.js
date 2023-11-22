const prisma = require("../context");

const userHomePage =async(req,res) => {
    const userHomePage = await prisma.user.findMany();
    res.json(userHomePage)
}
const aboutUser = async(req,res) => {
    const userAboutPage = await prisma.user.findMany();
    res.json(userAboutPage)
}
const userContact = async(req,res) => {
    const userContactPage = await prisma.user.findMany();
    res.json(userContactPage)
}
const usersID = async (req,res) => {
    const userID = parseInt(variousBooks.split("/"[4]));
    const { id } = req.params;
    const userWithBooks = await prisma.user.findUnique({
        where: {id: userID},
        include: {books: true},
    });
res.json(`books that belongs to the user${userID}`,userWithBooks.books)
}



module.exports = {
    userHomePage,
    aboutUser,
    userContact,
    usersID
}