const queries = require("./queries");
const inventory_queries = require("../inventory/queries")
const pool = require("../db");


const start_teller = (req, res, next)=>{
    console.log("Inside tellers");
    console.log(req.user);
    if(req.user){ 
        res.sendStatus(200);
        next();
    }
    else res.send(401);
}

const get_all_teller_log = (req, res)=>{
    pool.query(queries.get_all_teller_log, (err, result)=>{
        if(err) throw err;
        else if(!result.rows.length) res.status(401).send("No teller has been logged")
        else res.status(200).json(result.rows);
    })
}

const get_all_teller_sales= (req, res)=>{
    pool.query(queries.get_all_teller_sales, (err, result)=>{
        if(err) throw err;
        else if(!result.rows.length) res.status(401).send("No teller has been logged")
        else res.status(200).json(result.rows);
    })
}

const get_teller_sale = (req, res)=>{
    const id = req.params.id;
    pool.query(queries.get_teller_sale, [id], (err, result)=>{
        if(err) throw err;
        else if(!result.rows.length) res.status(400).send("There is no log with such id");
        else res.status(200).json(result.rows);
    })
}

const get_teller_log = (req, res)=>{
    const id = req.params.id;
    pool.query(queries.get_teller_log, [id], (err, result)=>{
        if(err) throw err;
        else if(!result.rows.length) res.status(400).send("There is no log with such id");
        else res.status(200).json(result.rows);
    })
}

const generate_teller_report = (req, res)=>{
    
}

const log_teller_info = (req, res)=>{
    const {teller_id, t_arrival, t_depart, teller_log_code}= req.body;
    pool.query(queries.get_teller_sale, [teller_log_code], (err, result)=>{
        if(err) throw err;
        else if(result.rows.length) res.status(400).send(`log  with such id ${teller_log_codes} already exists`);
        else {
            pool.query(queries.log_teller_info, [teller_id, t_arrival, t_depart, teller_log_code], (err, result)=>{
                if(err) throw err;
                res.status(201).send("Log made successfully");
            });
        }
    })
}

const update_log_info = (req, res)=>{
    const {teller_log_code, t_depart} = req.body;
    pool.query(queries.get_teller_log, [teller_log_code], (err, result)=>{
        if(err) throw err;
        else if(!result.rows.length) res.status(400).send("There is no log with such id");
        else {
            pool.query(queries.update_log_info,[t_depart, teller_log_code], (err, result)=>{
                if(err) throw err;
                res.status(200).send("Log has been updated successfully");
            });
        }
    })

}

const remove_teller_log = (req, res)=>{
    const id = req.params.id;
    pool.query(queries.get_teller_log, [id], (err, result)=>{
        if(err) throw err;
        else if(!result.rows.length) res.status(400).send("There is no log with such id");
        else {
            pool.query(queries.remove_teller_log, [id], (err, result)=>{
                if(err) throw err;
                else res.status(200).send(`Sale log with id ${id} has been deleted succesfully`);
            })
        }
    })
}


module.exports = {
    remove_teller_log,
    update_log_info,
    log_teller_info,
    generate_teller_report,
    get_all_teller_log,
    get_teller_sale,
    get_all_teller_sales,
    get_teller_log,
    start_teller,
}