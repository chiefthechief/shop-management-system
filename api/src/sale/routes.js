const {Router} = require("express");
const controller = require("./controller");

router = Router();


router.use(controller.start_sale);
router.get("/all", controller.get_all_sales);
router.get("/:id", controller.get_sale_by_id);
router.post("/add", controller.add_sale);
router.put("/", controller.update_sale);
router.delete("/:id", controller.remove_sale);



module.exports = router;