const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session")
const genFunc = require("connect-pg-simple");
const passport = require("passport");
require("./auth/local");

//the various routes
const workersRoutes = require("./src/workers/routes");
const customersRoutes = require("./src/customers/routes");
const tellerRoutes = require("./src/tellers/routes");
const deliverRoutes = require("./src/deliverers/routes");
const saleRoutes = require("./src/sale/routes");
const recieptRoutes = require("./src/reciept/routes");
const supplierRoutes = require("./src/suppliers/routes");
const inventoryRoutes = require("./src/inventory/routes");
const auth_routes = require("./auth/authenticate");

//mart routes
const martRoutes = require("./src/mart/routes");

//working with session stores 
const postgre_sql_store = genFunc(session);
const session_store = new postgre_sql_store({
    conString: "postgres://postgres:admin@localhost:5432/shopcompany"
})
 
const app = express();
const PORT = 5000;

//serving up my static stuff
app.use(express.static("./public"))

//Main working code come in here
app.use(express.json())
app.use(cookieParser());
app.use(
    session({
        secret: "ALWFJNWOAJDOWA",
        resave: false,
        saveUninitialized: false,
        store: session_store,
    })
)

app.use((req, res, next) =>{
    console.log(`$(req.method):$(req.url)`);
    next();
})

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/v1/auth/", auth_routes);
app.use("/api/v1/mart/", martRoutes);
app.use("/api/v1/workers",workersRoutes);
app.use("/api/v1/customers",customersRoutes);
app.use("/api/v1/tellers",tellerRoutes);
app.use("/api/v1/delivery",deliverRoutes);
app.use("/api/v1/sale",saleRoutes);
app.use("/api/v1/reciept",recieptRoutes);
app.use("/api/v1/suppliers",supplierRoutes);
app.use("/api/v1/inventory",inventoryRoutes);




app.listen(PORT, ()=>{
    console.log(`shop running on port ${PORT}`);
})