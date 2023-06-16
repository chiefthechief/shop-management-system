const {Router} = require("express");
const controller = require("./controller");

router = Router();

router.get("/all", controller.get_all_reciept);
router.post("/add", controller.add_reciept);
router.get("/:id", controller.get_reciept_id);
router.delete("/:id", controller.remove_reciept);
router.put("/:id", controller.update_reciept);
router.get("generate-reciept", controller.generate_reciept);



module.exports = router;