const pool = require("../db");
const queries = require("./queries");

const get_customer_wishlist = (req, res) => {
    const id = req.params.id;
    pool.query(queries.get_customer_wishlist, [id], (err, result)=>{
        if(err) throw err;
        else if(!result.rows.length) res.status(200).send("No wishlist");
        else res.status(200).json(result.rows)
    })
}

const get_customer_cart = (req, res) => {
    const id = req.params.id;
    pool.query(queries.get_customer_cart, [id], (err, result)=>{
        if(err) throw err;
        else if(!result.rows.length) res.status(200).send("Empty cart");
        else res.status(200).json(result.rows)
    })
}

const get_available_items = (req, res) => {
    pool.query(queries.get_available_items, (err, result)=>{
        if(err) throw err;
        else res.status(200).json(result.rows);
    })
}

const get_particular_product = (req, res) =>{
    const id = req.params.id;
    pool.query(queries.get_particular_product, [id], (err, result)=>{
        if (err) throw err;
        else if(!result.rows.length) res.status(400).send("There is no such product");
        else res.status(200).json(result.rows)
    })
}

//customers can buy and schedule delivery or pick up


module.exports = {
    get_available_items,
    get_customer_cart,
    get_customer_wishlist,
    get_particular_product,
}