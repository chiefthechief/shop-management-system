const pool = require("../db");
const queries = require("./queries");
const sale_queries = require("../sale/queries")
const sale_controller = require("../sale/controller")


const start_mart = (req, res, next)=>{
    let check_user = req.user.id.toString().slice(0,2);
    if(check_user == '10'){ 
        next();
    }
    else res.send(401);
}

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

const add_item = (req, res)=>{
    const {customer_id, product_id, type, qty} = req.body;
    pool.query(queries.add_item, [customer_id, product_id, type, qty], (err, result)=>{
        if(err) throw err;
        res.status(201).send("added succesfully");
    })

}

const make_order = (req, res)=>{
    const mode = "online";
    const transmission = "delivery";
    const customer_id = req.params.customer_id;
    const gen_sale_id = sale_controller.generate_sale_id(customer_id);
    for (items = 0 ; items < req.body.length; items ++){
        const{product_id, qty} = req.body;
        pool.query(sale_queries.add_sale, [gen_sale_id, product_id, qty, mode, transmission, customer_id], (err, result)=>{
            if(err) throw err;
            res.status(200).send("Order made successfully")
        })
    }
}

//customers can buy and schedule delivery or pick up


module.exports = {
    start_mart,
    add_item,
    get_available_items,
    get_customer_cart,
    get_customer_wishlist,
    get_particular_product,
    make_order,
}