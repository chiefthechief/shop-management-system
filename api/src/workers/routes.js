const {Router} = require("express");
const controller = require("./controller")

const workers_router  = Router();

workers_router.use(controller.start_worker);
workers_router.get("/all", controller.get_all_workers);
workers_router.post("/add", controller.add_worker);
workers_router.get("/:id", controller.get_specific_worker);
workers_router.delete("/:id", controller.remove_worker);
workers_router.put("/:id", controller.update_worker);


module.exports = workers_router;