const queries = require("./queries");
const pool = require("../db");
const hasher = require("../auth")


const get_all_customers = (req, res)=>{
    pool.query(queries.get_all_workers, (err, result)=>{
        if(err) throw err;
        if(!result.rows) res.send("There are no customers");
        res.status(200).json(result.rows);
    })
}

const get_customer_by_id = (req, res)=>{
    const id = req.params.id;
    pool.query(queries.get_customer_by_id, [id], (err, result)=>{
        if(err) throw err;
        if(!result.rows) res.send("There is no customer such id");
        res.status(200).json(result.rows);
    })
}

const add_customer = (req, res)=>{
    const{customer_id, first_name, last_name, tel_number, email, password} = req.body;
    const hashed = hasher.hash_pass(password);
    pool.query(queries.exist, [customer_id, email], (err, results)=> {
        if(err) throw err;
        if(results.rows) res.status(401).send("Customer already exist");
        else{
        pool.query(queries.add_customer, [customer_id, first_name, last_name, tel_number, email, hashed], (err, result)=>{
            if(err) throw err;
            res.status(201)
        })
    }
    })
}
const remove_customer = (req, res)=>{
    const id = parseInt(req.params.id);
    pool.query(queries.get_customer_by_id,[id], (err, result)=>{
        if(err) throw err;
        if(!result.rows) res.send("There is no customer with id");
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
    const {name} = req.body;
    pool.query(queries.get_customer_by_id, [id], (err, result)=>{
        if(err) throw err;
        if(!result.rows) res.status(401).send("There is no customer with such id");
        else{
            pool.query(queries.update_customer, [name, id], (err, result)=>{
                if(err) throw err;
                res.status(201).send("Customer has been updated successfully");
            });
        }
    })
}

module.exports = {
    get_all_customers,
    get_customer_by_id,
    add_customer,
    remove_customer,
    update_customer,
}