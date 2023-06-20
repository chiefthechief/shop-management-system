const pool = require("../db");
const queries = require("./queries");


const start_delivery = (req, res, next)=>{
    console.log("Inside tellers");
    console.log(req.user);
    if(req.user){ 
        next();
    }
    else res.send(401);
}

const log_delivery = (req, res)=>{
    const{delivery_id, deliverer_id,delivery_report, customer_id, product_id} = req.body;
    pool.query(queries.get_delivery_report_by_id, [delivery_id], (err, result)=>{
        if(err) throw err;
        else if(result.rows.length) res.status(401).send("There is already planned delivery with such id");
        else{
            pool.query(queries.log_delivery,[delivery_id, deliverer_id,delivery_report, customer_id, product_id], (err, result)=>{
                if(err) throw err;
                res.status(201).send("log created successfully");
            });
        }
    })

}
const get_all_delivery_report = (req, res) =>{
    pool.query(queries.get_all_delivery_report, (err, result) =>{
        if(err) throw err;
        else if(!result.rows.length) res.status(401).send("There are no planned deliveries");
        else res.status(200).json(result.rows)
    })
}
const get_delivery_report_by_id = (req, res) =>{
    const id = req.params.id;
    pool.query(queries.get_delivery_report_by_id, [id], (err, result)=>{
        if(err) throw err;
        else if(!result.rows.length) res.status(401).send("There is no planned delivery with such id");
        else res.status(200).json(result.rows);
    })
}
const delivery_state = (req, res) =>{
    const state = req.params.id;
    let category;
    switch (state){
        case 'D':
            category = "delivered";
            break;
        case 'P':
            category = "progress";
            break;
        case 'N':
            category = "Not-yet";
            break;
        default:
            res.status(401).send("Wrong state entered");
    }
    pool.query(queries.delivery_state,[state], (err, result) =>{
        if(err) throw err;
        else if(!result.rows.length) res.status(200).send(`No products are in ${category} category`);
        else res.status(200).json(result.rows);
    })

}



module.exports = {
    start_delivery,
    get_all_delivery_report,
    get_delivery_report_by_id,
    delivery_state,
    log_delivery,
}