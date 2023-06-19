const {Router} = require("express")
const controller = require("./controller")

router = Router();

router.get("/all",controller.get_all_delivery_report);
router.get("/specific/:id",controller.get_delivery_report_by_id);
router.get("/state/:id",controller.delivery_state);
router.post("/add", controller.log_delivery);



module.exports = router;