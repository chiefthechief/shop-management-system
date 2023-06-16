const express = require("express");
const workersRoutes = require("./src/workers/routes");
const customersRoutes = require("./src/customers/routes");
const tellerRoutes = require("./src/tellers/routes");
const deliverRoutes = require("./src/deliverers/routes");
const saleRoutes = require("./src/sale/routes");
const recieptRoutes = require("./src/reciept/routes");
const supplierRoutes = require("./src/suppliers/routes");
const inventoryRoutes = require("./src/inventory/routes");
const workers_auth_routes = require("./src/workers/authRoutes");

const app = express();
const PORT = 3000;

//Main working code come in here
app.use(express.json())
app.use("/api/v1/workers/auth", workers_auth_routes);
app.use("/api/v1/workers",workersRoutes);
app.use("/api/v1/customers",customersRoutes);
app.use("/api/v1/tellers",tellerRoutes);
//app.use("/api/v1/deliverer",deliverRoutes);
app.use("/api/v1/sale",saleRoutes);
app.use("/api/v1/reciept",recieptRoutes);
app.use("/api/v1/suppliers",supplierRoutes);
app.use("/api/v1/inventory",inventoryRoutes);




app.listen(PORT, ()=>{
    console.log(`shop running on port ${PORT}`);
})