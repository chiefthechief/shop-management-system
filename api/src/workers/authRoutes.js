const {Router} = require("express");
const logIn = require("./logIn");

const auth_router = Router();


auth_router.post("/register", logIn.allow_worker);



module.exports = auth_router;