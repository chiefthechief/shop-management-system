const {Router} = require("express");
const controller = require("./controller");

router = Router();

//for workers
router.post("/worker_login/", controller.allow_worker);
//router.get("/worker_login/");

// //for customers
// router.get("/customer_login/");
// router.post("/customer_log_in");
// router.get("/customer_sign_up");
router.post("/customer_sign_up", controller.sign_up_customer);


module.exports = router