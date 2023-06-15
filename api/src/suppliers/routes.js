const {Router} = require("express");
const controller = require("./controller");

router = Router();

router.get("/all", controller.get_suppliers);
router.post("/add", controller.add_supplier);
router.get("/:id", controller.get_suppliers_by_id);
router.put("/:id", controller.update_supplier);
router.delete("/:id", controller.remove_supplier);



module.exports = router;