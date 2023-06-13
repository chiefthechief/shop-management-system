const {Router} = require("express");
const controller = require("./controller");

router = Router();

router.get("/all", controller.get_suppliers);
router.get("/:id", controller.get_suppliers_id);
router.put("/:id", controller.update_supplier);
router.delete("/:id", controller.remove_supplier);



module.exports = Router;