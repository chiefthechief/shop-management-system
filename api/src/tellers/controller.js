const queries = require("./queries");
const pool = require("../db");

const get_all_teller_log = (req, res)=>{
    pool.query(queries.get_all_teller_log, (err, result)=>{
        if(err) throw err;
        else if(!result.rows.length) res.status(401).send("No teller has been logged")
        else res.status(200).json(result.rows);
    })
}

const generate_teller_report = (req, res)=>{
    
}

const log_teller_info = (req, res)=>{
    
}

const update_log_info = (req, res)=>{
    
}

const remove_teller_log = (req, res)=>{
    
}
const add_teller_log = (req, res)=>{

}



module.exports = {
    add_teller_log,
    remove_teller_log,
    update_log_info,
    log_teller_info,
    generate_teller_report,
    get_all_teller_log,
}