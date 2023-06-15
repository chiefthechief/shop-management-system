const pool = require("../db");
const queries = require("./queries");

const get_suppliers = (req, res)=>{
    pool.query(queries.get_suppliers, (err, result) =>{
        if(err) throw err;
        else if(!result.rows.length) res.status(400).send("There are no suppliers");
        else res.status(200).json(result.rows)
    });

}

const get_suppliers_by_id = (req, res)=>{
    const id = req.params.id;
    
    pool.query(queries.get_suppliers_by_id, [id], (err, result)=>{
        if(err) throw err;
        else if(!result.rows.length) res.status(400).send(`There is no supplier with the id of ${id}`);
        else res.status(200).json(result.rows);
    });
}

const add_supplier = (req, res) =>{
    const id = req.params.id;
    const {supplier_id, supplier_name, contact} = req.body; 

    pool.query(queries.get_suppliers_by_id, [id], (err, result)=>{
        if(err) throw err;
        if(!result.rows.length) res.status(400).send(`There is no supplier with the id of ${id}`);
        else{
            pool.query(queries.add_supplier, [supplier_id, supplier_name, contact], (err, result) =>{
                if (err) throw err;
                res.status(201).send("Supplier added successfully");
            });
        }
    });
    
}

const remove_supplier = (req, res)=>{
    const id = req.params.id;

    pool.query(queries.get_suppliers_by_id, [id], (err, result)=>{
        if(err) throw err;
        if(!result.rows.length) res.status(400).send(`There is no supplier with the id of ${id}`);
        else{
            pool.query(queries.remove_supplier, [id], (err, result) =>{
                if (err) throw err;
                res.status(201).send("Supplier updated successfully");
            });
        }
    });
}

const update_supplier = (req, res)=>{
    const id = req.params.id;
    const {supplier_name} = req.body; 

    pool.query(queries.get_suppliers_by_id, [id], (err, result)=>{
        if(err) throw err;
        if(!result.rows.length) res.status(400).send(`There is no supplier with the id of ${id}`);
        else{
            pool.query(queries.remove_supplier, [supplier_name, id], (err, result) =>{
                if (err) throw err;
                res.status(201).send("Supplier removed successfully");
            });
        }
    });
}

module.exports = {
    get_suppliers,
    get_suppliers_by_id,
    remove_supplier,
    update_supplier,
    add_supplier,
}