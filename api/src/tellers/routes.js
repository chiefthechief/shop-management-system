const {Router} = require("express");
const controller = require("./controller");

router = Router();

router.get("/all", controller.get_all_teller_log);
router.get("/generate_report", controller.generate_teller_report);
router.put("/:id", controller.update_log_info);
router.post("/add", controller.add_teller_log);
router.delete("/:id", controller.remove_teller_log);




module.exports = router;