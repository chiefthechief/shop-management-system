const {Router} = require("express");
const controller = require("./controller");

router = Router();

router.use(controller.start_mart);
router.get("/all", controller.get_available_items);
router.post("/add", controller.add_item);
router.post("/cart/checkout/:customer_id", controller.make_order)
router.get("/product/:id", controller.get_particular_product);
router.get("/cart/:id", controller.get_customer_cart);
router.get("/wishlist/:id", controller.get_customer_wishlist);

module.exports = router;
