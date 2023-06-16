const {Router} = require("express");
const worker_auth = require("./controller");

router = Router();

//for workers
router.post("/worker_login/", worker_auth.allow_worker);
//router.get("/worker_login/");

// //for customers
// router.get("/customer_login/");
// router.post("/customer_log_in");
// router.get("/customer_sign_up");
// router.post("/customer_sign_up");


module.exports = router