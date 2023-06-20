const queries = require("./queries");
const pool = require("../db");



const start_reciept = (req, res, next)=>{
    console.log("Inside tellers");
    console.log(req.user);
    if(req.user){ 
        next();
    }
    else res.send(401);
}


const get_all_reciept = (req, res)=>{
    pool.query(queries.get_all_reciept, (err, result)=>{
        if(err) throw err;
        else if(!result.rows.length) res.status(401).send("There are no reciepts");
        else res.status(200).json(result.rows);
    });
}
const get_reciept_id = (req, res)=>{
    const id = req.params.id;
    pool.query(queries.get_reciept_by_id, [id], (err, result)=>{
        if(err) throw err;
        else if(!result.rows.length) res.status(401).send(`There is no reciept with id of ${id}`);
        else res.status(200).json(result.rows);
    });
}
const update_reciept = (req, res)=>{
    const id = req.params.id;
    const {teller_id} = req.body
    pool.query(queries.get_reciept_by_id, [id], (err, result)=>{
        if(err) throw err;
        else if(!result.rows.length) res.status(401).send(`There is no reciept with id of ${id}`);
        else {
            pool.query(queries.update_reciept,[teller_id, id],(err, result)=>{
                if(err) throw err;
                res.status(200).send("Reciept has been updated successfully")
            })
        }
    });
}
const remove_reciept = (req, res)=>{
    const id = req.params.id;
    pool.query(queries.get_reciept_by_id, [id], (err, result)=>{
        if(err) throw err;
        else if(!result.rows.length) res.status(401).send(`There is no reciept with id of ${id}`);
        else {
            pool.query(queries.remove_reciept,[id], (err, result)=>{
                if(err) throw err;
                res.status(200).send("Reciept has been deleted successfully");
            });
        }
    });
}
const add_reciept = (req, res)=>{
    const{reciept_id, customer_id, teller_id} = req.body;
    pool.query(queries.get_reciept_by_id, [reciept_id], (err, result)=>{
        if(err) throw err;
        else if(result.rows.length) res.status(401).send("There is already a reciept with such id");
        else{
            pool.query(queries.add_reciept, [reciept_id, customer_id, teller_id], (err, result)=>{
                if(err) throw err;
                else res.status(200).send("Reciept added successfully")
        });
    }
});
}

const generate_reciept = ()=>{

}




module.exports ={
    start_reciept,
    get_all_reciept,
    get_reciept_id,
    update_reciept,
    remove_reciept,
    add_reciept,
    generate_reciept,
}