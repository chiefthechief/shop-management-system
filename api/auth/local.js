const passport = require("passport");
const worker_queries = require("../src/workers/queries");
const customer_queries = require("../src/customers/queries")
const authenticate = require("./auth")
const pool = require("../src/db")
const {Strategy} = require("passport-local");




passport.use(
    new Strategy({
        usernameField: 'email',
    }, (email, password,done) =>{
        if(!email || !password){
            throw new Error("No credentials");
        }else{
            pool.query(worker_queries.worker_logIn,[email] ,(err, result) =>{
            if (err) throw err;
            const hash_key = result.rows[0]['password'];
            const state = authenticate.compare_pass(password, hash_key);

            if(state) {
                done(null, result.rows[0]);
                console.log("Allowed");
            }
            else  console.log("User credentials do not match");
    })
        }
    })

)