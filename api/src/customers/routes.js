const {Router} = require("express");
const controller = require("./controller");

router = Router();

router.post("/register", controller.add_customer);
router.get("/all", controller.get_all_customers);
router.post("/:id", controller.get_customer_by_id);



module.exports = router;