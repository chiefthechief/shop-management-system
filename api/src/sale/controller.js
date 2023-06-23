const queries = require("./queries");
const pool = require("../db");


const start_sale = (req, res, next)=>{
    if(req.user != undefined){
        let check_user = req.user.id.toString().slice(0,2);
        if(check_user == '110'){ 
            next();
        }
        else res.sendStatus(401);
    }else res.sendStatus(401)
}

const get_all_sales = (req, res)=>{
    pool.query(queries.get_all_sales, (err, result)=>{
        if(err) throw err;
        else if(!result.rows.length) res.status(401).send("No sales have been made");
        else res.status(200).json(result.rows)
    })
}

const get_sale_by_id = (req, res)=>{
    const id = req.params.id;
    pool.query(queries.get_sale_by_id, [id], (err, result)=>{
        if(err) throw err;
        else if(!result.rows.length) res.status(401).send("There is no sale with such id");
        else res.status(200).json(result.rows);
    })
}

const add_sale = (req, res)=>{
    const{sold_id, product_id, product_qty, mode, transmission, customer_id, reciept_id} = req.body;
    pool.query(queries.get_sale_by_id, [sold_id], (err, result)=>{
        if(err) throw err;
        else if(result.rows.length) res.status(401).send("There is already an existing sale with such id");
        else{
            pool.query(queries.add_sale, [sold_id, product_id, product_qty, mode, transmission, customer_id, reciept_id], (err, result)=>{
                if(err) throw err;
                res.status(201).send("Sale added successfully");
            })
        }
    })
}

const update_sale = (req, res)=>{
    const{sold_id, product_id} =req.body;
    pool.query(queries.get_sale_by_id, [sold_id], (err, result)=>{
        if(err) throw err;
        else if(!result.rows.length) res.status(401).send("There is no sale with such id");
        else {
            pool.query(queries.update_sale, [product_id, sold_id], (err, result)=>{
                if(err) throw err;
                res.status(200).send("Sale updated successfully");
            })
        }
    })
}
const remove_sale = (req, res)=>{
    const id = req.params.id;
    pool.query(queries.get_sale_by_id, [id], (err, result)=>{
        if(err) throw err;
        else if(!result.rows.length) res.status(401).send("There is no sale with such id");
        else {
            pool.query(queries.remove_sale,[id], (err, result)=>{
                if (err) throw err;
                res.status(200).send("Sale removed successfully");
            })
        }
    })
}

const generate_sale_id = (customer_id)=>{

}

module.exports = {
    start_sale,
    get_all_sales,
    get_sale_by_id,
    add_sale,
    update_sale,
    remove_sale,
    generate_sale_id,
}