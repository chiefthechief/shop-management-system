const {Router} = require("express")

router = Router();

router.get("/all", controller.inventory);
router.post("/add", controller.add_inventory);
router.get("/:id", controller.get_inventory_id);
router.put("/:id", controller.update_inventory);
router.delete("/:id", controller.remove_inventory);



module.exports = Router;