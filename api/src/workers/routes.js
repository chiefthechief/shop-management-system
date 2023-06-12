const {Router} = require("express");
const controller = require("./controller")

const workers_router  = Router();

workers_router.get("/", controller.get_all_workers);
workers_router.post("/", controller.add_worker)
workers_router.get("/:id", controller.get_specific_worker);
workers_router.delete("/:id", controller.remove_worker);
workers_router.put("/:id", controller.update_student)


module.exports = workers_router;