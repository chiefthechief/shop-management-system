const queries = require("./queries");
const pool = require("../db");
const hasher = require("../../auth/auth")



const start_customer = (req, res, next)=>{
    console.log("Inside tellers");
    console.log(req.user);
    if(req.user){ 
        next();
    }
    else res.send(401);
}

const get_all_customers = (req, res)=>{
    pool.query(queries.get_all_workers, (err, result)=>{
        if(err) throw err;
        if(!result.rows.length) res.send("There are no customers");
        res.status(200).json(result.rows);
    })
}

const get_customer_by_id = (req, res)=>{
    const id = req.params.id;
    pool.query(queries.get_customer_by_id, [id], (err, result)=>{
        if(err) throw err;
        const state = !result.rows.length;
        console.log(state)
        if(state) {
            res.status(401).send("There is no customer such id");
        }
        else{
            res.status(200).json(result.rows);
        } 
    })
}

const add_customer = (req, res)=>{
    const{id, first_name, last_name, tel_number, email, password, customer_address} = req.body;
    const hashed = hasher.hash_pass(password);
    pool.query(queries.exist, [id, email], (err, results)=> {
        console.log(results.rows)
        if(err) throw err;
        if(results.rows.length) res.status(401).send("Customer already exist");
        else{
        pool.query(queries.add_customer, [id, first_name, last_name, tel_number, email, hashed, customer_address], (err, result)=>{
            if(err) throw err;
            res.status(201).send("Account created successfully!");
        })
    }
    })
}
const remove_customer = (req, res)=>{
    const id = parseInt(req.params.id);
    pool.query(queries.get_customer_by_id,[id], (err, result)=>{
        const state = !result.rows.length;
        if(err) throw err;
        if(state) res.send("There is no customer with such id");
        else{
            pool.query(queries.remove_customer,[id], (err, result)=>{
                if(err) throw err;
                res.status(200).json("Account has been deleted successfully");
            });
        }
    });
}
const update_customer =(req, res)=>{
    const id =req.params.id;
    const {first_name} = req.body;
    pool.query(queries.get_customer_by_id, [id], (err, result)=>{
        if(err) throw err;
        if(!result.rows.length) res.status(401).send("There is no customer with such id");
        else{
            pool.query(queries.update_customer, [first_name, id], (err, result)=>{
                if(err) throw err;
                res.status(201).send("Customer has been updated successfully");
            });
        }
    })
}

module.exports = {
    start_customer,
    get_all_customers,
    get_customer_by_id,
    add_customer,
    remove_customer,
    update_customer,
}