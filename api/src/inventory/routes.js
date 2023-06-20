const {Router} = require("express")
const controller = require("./controller")

router = Router();

router.get("/all", controller.get_inventory);
router.use(controller.start_inventory);
router.post("/add", controller.add_inventory);
router.get("/:id", controller.get_inventory_id);
router.put("/:id", controller.update_inventory);
router.delete("/:id", controller.remove_inventory);



module.exports = router;