const customer_queries = require("../src/customers/queries");
const authenticate = require("./auth");
const pool = require("../src/db");


//workers log in
const login = (req, res)=>{
    console.log("logged In");
    res.sendStatus(200)
}

//customers sign up
const sign_up_customer = (req, res)=>{
    const{id, first_name, last_name, tel_number, email, password, cust_addr} = req.body;
    const hashed = authenticate.hash_pass(password);
    pool.query(customer_queries.exist, [id, email], (err, results)=> {
        if(err) throw err;
        if(results.rows.length) res.status(401).send("Customer already exist");
        else{
        pool.query(customer_queries.add_customer, [id, first_name, last_name, tel_number, email, hashed, cust_addr], (err, result)=>{
            if(err) throw err;
            res.status(201).send("Account created successfully!");
        })
    }
    })
}

const log_out = (req, res)=>{
    req.logout( (err) =>{
        if(err) return err;
        res.send("Log out");
    })
}


module.exports ={
    login,
    sign_up_customer,
    log_out,
}