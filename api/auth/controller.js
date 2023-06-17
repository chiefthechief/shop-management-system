const queries = require("../src/workers/queries");
const customer_queries = require("../src/customers/queries");
const authenticate = require("./auth");
const pool = require("../src/db");

//workers log in
const allow_worker = (req, res)=>{
    const{email, password} = req.body;
    pool.query(queries.worker_logIn,[email] ,(err, result) =>{
        if (err) throw err;
        const hash_key = result.rows[0]['password'];
        const state = authenticate.compare_pass(password, hash_key);
        console.log(state);
        if(state) res.status(200).send("Allowed");
        else  res.status(401).send("disallowed");
    })
}

//customers log in
const allow_customer = (req, res)=>{
    const{email, password} = req.body;
    pool.query(customer_queries.customer_log_in,[email] ,(err, result) =>{
        if (err) throw err;
        const hash_key = result.rows[0]['password'];
        const state = authenticate.compare_pass(password, hash_key);
        console.log(state);
        if(state) res.status(200).send("Allowed");
        else  res.status(401).send("disallowed");
    })
}

//customers sign up
const sign_up_customer = (req, res)=>{
    const{customer_id, first_name, last_name, tel_number, email, password, cust_addr} = req.body;
    const hashed = authenticate.hash_pass(password);
    pool.query(customer_queries.exist, [customer_id, email], (err, results)=> {
        if(err) throw err;
        if(results.rows.length) res.status(401).send("Customer already exist");
        else{
        pool.query(customer_queries.add_customer, [customer_id, first_name, last_name, tel_number, email, hashed, cust_addr], (err, result)=>{
            if(err) throw err;
            res.status(201).send("Account created successfully!");
        })
    }
    })
}


module.exports ={
    allow_worker,
    sign_up_customer,
    allow_customer,
}