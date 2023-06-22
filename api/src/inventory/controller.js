const pool = require("../db");
const queries = require("./queries");


const start_inventory = (req, res, next)=>{
    if(req.user != undefined){
        let check_user = req.user.id.toString().slice(0,2);
        if(check_user == '11'){ 
            next();
        }
        else res.sendStatus(401);
    }else res.sendStatus(401)
}

const get_inventory = (req, res) =>{
    pool.query(queries.get_inventory, (err, result) =>{
        if(err) throw err;
        else if(!result.rows.length) res.status(400).send("You have no inventory");
        else res.status(200).json(result.rows)
    });
}
const get_inventory_id = (req, res) =>{
    const id = req.params.id;
    
    pool.query(queries.get_inventory_by_id, [id], (err, result)=>{
        if(err) throw err;
        else if(!result.rows.length) res.status(400).send(`There is no product with the id of ${id}`);
        else res.status(200).json(result.rows);
    });
}
const add_inventory = (req, res)=>{
    const {product_id, product_name, product_qty, supplier_id, product_price} = req.body; 

    pool.query(queries.get_inventory_by_id, [product_id], (err, result)=>{
        if(err) throw err;
        if(result.rows.length) res.status(400).send(`There is already aproduct with the id of ${product_id}`);
        else{
            pool.query(queries.add_inventory, [product_id, product_name, product_qty, supplier_id, product_price], (err, result) =>{
                if (err) throw err;
                res.status(201).send("product has been added successfully");
            });
        }
    });
}
const remove_inventory = (req, res) =>{
    const id = req.params.id;

    pool.query(queries.get_inventory_by_id, [id], (err, result)=>{
        if(err) throw err;
        if(!result.rows.length) res.status(400).send(`There is no product with the id of ${id}`);
        else{
            pool.query(queries.remove_inventory, [id], (err, result) =>{
                if (err) throw err;
                res.status(201).send("Supplier removed successfully");
            });
        }
    });
}
const update_inventory = (req, res) =>{
    const id = req.params.id;
    const {product_name} = req.body; 

    pool.query(queries.get_suppliers_by_id, [id], (err, result)=>{
        if(err) throw err;
        if(!result.rows.length) res.status(400).send(`There is no product with the id of ${id}`);
        else{
            pool.query(queries.remove_supplier, [product_name, id], (err, result) =>{
                if (err) throw err;
                res.status(201).send("Product updated successfully");
            });
        }
    });
}


module.exports = {
    start_inventory,
    get_inventory,
    get_inventory_id,
    remove_inventory,
    update_inventory,
    add_inventory,
}