const {Router} = require("express");
const controller = require("./controller");
const passport = require("passport");

router = Router();

//for workers
router.post("/login/", passport.authenticate("local"), controller.login);

module.exports = router