const get_all_workers = "SELECT * FROM workers";
const get_specific_worker = "SELECT * FROM workers WHERE worker_id=$1";
const add_worker = "INSERT INTO workers(worker_id, first_name, last_name, role, dob, id_number, email, password, tel_number) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)";
const remove_worker = "DELETE FROM workers WHERE worker_id=$1";
const is_worker = "SELECT * FROM workers WHERE worker_id= $1 OR email=$2";
const update_worker = "UPDATE workers SET first_name = $1 WHERE worker_id = $2 ";
const worker_logIn  = "SELECT worker_id, email, password from workers WHERE email=$1";


module.exports = {
    get_all_workers,
    get_specific_worker,
    add_worker,
    is_worker,
    remove_worker,
    update_worker,
    worker_logIn,
}