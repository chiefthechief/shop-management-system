const passport = require("passport");
const queries = require("./queries");
const authenticate = require("./auth")
const pool = require("../src/db")
const {Strategy} = require("passport-local");


passport.serializeUser((user, done) => {
    done(null, user.id);
})


passport.deserializeUser((id, done)=>{
    try{
        pool.query(queries.get_specific_user,[id] ,(err, result) =>{
            if(err) throw err;
            else if(!result.rows.length) throw new Error("User not found");
            else done(null, result.rows[0])
        });
    }catch(err){
        console.log(err);
        done(err, null);
    }
});


passport.use(
    new Strategy({
        usernameField: 'email',
    }, (email, password,done) =>{
        if(!email || !password){
            throw new Error("No credentials");
        }else{
            pool.query(queries.get_user_auth,[email] ,(err, result) =>{
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