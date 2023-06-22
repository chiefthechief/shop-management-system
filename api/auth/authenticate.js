const {Router} = require("express");
const controller = require("./controller");
const passport = require("passport");

router = Router();

//for workers
router.post("/login/", passport.authenticate("local"), controller.login);

router.post("/signup/", controller.sign_up_customer); //not working yet

router.post("/logout",controller.log_out);

module.exports = router