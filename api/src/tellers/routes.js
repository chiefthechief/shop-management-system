const {Router} = require("express");
const controller = require("./controller");

router = Router();

router.get("/all", controller.get_all_teller_log);
router.get("/generate_report", controller.generate_teller_report);
router.get("/sale/:id", controller.get_teller_sale);
router.get("/log/:id", controller.get_teller_log),
router.get("/sales", controller.get_all_teller_sales);
router.put("/update", controller.update_log_info);
router.post("/add", controller.log_teller_info);
router.delete("/:id", controller.remove_teller_log);




module.exports = router;