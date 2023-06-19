const queries = require("./queries");
const pool = require("../db");
const hasher = require("../../auth/auth");

const get_all_workers = (req, res) =>{
    pool.query(queries.get_all_workers, (err, result)=>{
        if(err) throw err;
        res.status(200).json(result.rows);
    })
}

const get_specific_worker = (req, res)=>{
    const id = parseInt(req.params.id);
    pool.query(queries.get_specific_worker, [id], (err, result)=>{
        if(err) throw err;
        res.status(200).json(result.rows)
    })
}

const add_worker = (req, res)=>{
    const{worker_id, first_name, last_name, role, dob, id_number, email, password, tel_number} = req.body;

    pool.query(queries.is_worker, [worker_id, email], (err, result)=>{
        const no_worker = result.rows.length;
        if(no_worker) res.status(401).send("Worker already exist");
        else{
        pool.query(queries.add_worker,[worker_id, first_name, last_name, role, dob, id_number, email, hasher.hash_pass(password), tel_number], (err, result) =>{
            if(err) throw err;
            res.sendStatus(201)
        });
    }
    });
}

const remove_worker = (req, res)=>{
    const id = parseInt(req.params.id);
    pool.query(queries.remove_worker, [id], (err, result)=>{
        if(err) throw err;
        const no_worker = result.rows.length;
        if(no_worker) res.status(401).send("Worker does not exist");

        else res.status(201).send("Worker has been deleted successfully");
 })
}

const update_worker = (req, res)=>{
    const {first_name} = req.body
    const id = parseInt(req.params.id);
  
    pool.query(queries.get_specific_worker, [id], (err, result)=>{
        const no_worker = !result.rows.length;
        if(no_worker) res.status(401).send("Worker does not exist");

        pool.query(queries.update_worker, [first_name, id], (err, result)=>{
            if(err) throw err;
            res.status(200).send(`Worker with id ${id} has been updated successfully`);
        });
    });
}

//manager should be able to schedule delivery

module.exports = {
    get_all_workers,
    get_specific_worker,
    add_worker,
    remove_worker,
    update_worker,
}