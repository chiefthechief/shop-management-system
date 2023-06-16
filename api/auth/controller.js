const queries = require("../src/workers/queries");
const authenticate = require("./auth");
const pool = require("../src/db");

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


module.exports ={
    allow_worker,
}