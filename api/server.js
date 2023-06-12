const express = require("express");
const workersRoutes = require("./src/workers/routes");
const workers_auth_routes = require("./src/worker/authRoutes")

const app = express();
const PORT = 3000;

//Main working code come in here
app.use(express.json())
app.use("/api/v1/workers/auth", workers_auth_routes);
app.use("/api/v1/workers",workersRoutes)



app.listen(PORT, ()=>{
    console.log(`shop running on port ${PORT}`);
})